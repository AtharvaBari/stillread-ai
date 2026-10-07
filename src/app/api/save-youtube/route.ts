import { NextResponse } from "next/server";
import { extractYouTubeMetadata, generateSummary } from "@/lib/youtube";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request: Request) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json(
        { error: "URL is required" },
        { status: 400 }
      );
    }

    // Step 5: Real Extraction Pipeline
    // 1. Fetch live YouTube metadata via oEmbed
    let metadata;
    try {
      metadata = await extractYouTubeMetadata(url);
    } catch (err) {
      console.error("oEmbed extraction failed:", err);
      return NextResponse.json(
        { error: "Failed to extract YouTube metadata. Ensure the URL is valid and public." },
        { status: 400 }
      );
    }

    // 2. Generate summary using Gemini
    const summary = await generateSummary(metadata.title);

    // 3. Assemble the final SavedItem-compatible metadata payload
    const finalItem = {
      source: 'youtube',
      source_url: url,
      title: metadata.title,
      author_name: metadata.channel_name,
      summary: summary,
      metadata: {
        thumbnail_url: metadata.thumbnail_url
      },
      is_digested: false,
    };

    // 4. Save to Supabase
    const { data, error } = await supabase
      .from("saved_items")
      .insert([finalItem])
      .select()
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Failed to save item to database." },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error processing YouTube URL:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
