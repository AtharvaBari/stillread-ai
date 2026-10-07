# Project: Still Read (MVP Phase 1)
**Concept:** A mobile-first web application designed to act as a "Daily Digest" and rediscovery inbox for saved YouTube videos. The app is built to be wrapped in a mobile WebView later.

## 1. Tech Stack Requirements
*   **Framework:** Next.js (App Router).
*   **Styling:** Tailwind CSS.
*   **Backend/Database:** Supabase (for handling user auth and storing saved YouTube URLs and extracted metadata).
*   **Hosting Deployment:** Vercel.
*   **Icons:** Lucide React.

## 2. Design System & Aesthetics
*   **Theme:** Strict Dark Mode default.
*   **Aesthetic:** Neo-Brutalist. Use high-contrast borders, sharp edges (no rounded corners), bold typography, and subtle retro pixel-art accents where appropriate for empty states or loaders.
*   **Layout:** Mobile-first design. The UI must feel like a native iOS/Android app running in a browser. Bottom navigation bar for core routing.

## 3. Core Features (Scope Locked)
*   **Input:** A simple, prominent input field to paste a YouTube URL.
*   **Processing State:** When a URL is pasted, show a loading state indicating the app is "Extracting transcript & summarizing..." (Note: Front-end will just mock this delay for now).
*   **The Inbox (Feed):** A chronological feed of saved videos displaying:
    *   YouTube Thumbnail.
    *   Video Title.
    *   A short, AI-generated 3-bullet point summary (mocked in UI for now).
*   **Daily Digest View:** A separate tab showing only 3 curated videos for "Today's Consumption."

## 4. Anti-Hallucination Rules for AI Agent
*   DO NOT build a custom backend API right now. Rely on mock data arrays for the front-end UI until instructed to connect Supabase.
*   DO NOT add features for Twitter, Instagram, or PDFs. We are strictly building for YouTube links in this phase.
*   DO NOT use complex animation libraries like Framer Motion yet. Keep the DOM lightweight.
*   Assume the app will be accessed via mobile Safari/Chrome. Touch targets must be at least 44x44px.