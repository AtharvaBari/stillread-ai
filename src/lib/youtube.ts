import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

/**
 * Extracts YouTube metadata using the public oEmbed endpoint.
 * This avoids needing a Google API key for MVP.
 */
export async function extractYouTubeMetadata(url: string) {
  // Use public YouTube oEmbed API
  const oembedUrl = `https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`;
  
  const response = await fetch(oembedUrl);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch YouTube metadata: ${response.status} ${response.statusText}`);
  }
  
  const data = await response.json();
  
  return {
    title: data.title as string,
    channel_name: data.author_name as string,
    thumbnail_url: data.thumbnail_url as string,
  };
}

/**
 * Generates a highly realistic 3-bullet point summary based purely on the video title.
 */
export async function generateSummary(title: string): Promise<string> {
  const contents = `Generate a strict, active-tone, 3-bullet point summary based purely on the video title: "${title}". Each bullet point should be separated by a newline (\\n). Do not use asterisks, dashes, or markdown formatting for the bullets themselves. Just output exactly 3 lines of text.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents,
    });

    if (response.text) return response.text;
  } catch (error: any) {
    if (error?.message?.includes("503") || error?.message?.includes("high demand") || error?.message?.includes("UNAVAILABLE")) {
      console.warn("gemini-3.8-flash is experiencing high demand (503). Falling back to gemini-3.5-flash...");
      const fallbackResponse = await ai.models.generateContent({
        model: 'gemini-3.5-flash',
        contents,
      });
      if (fallbackResponse.text) return fallbackResponse.text;
    }
    throw error;
  }

  throw new Error("Failed to generate summary");
}
