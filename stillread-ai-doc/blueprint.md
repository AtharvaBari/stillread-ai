# STILL READ - MVP BLUEPRINT

## Core Directives
1. **Tech Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS, Supabase (Database/Auth), Lucide React (Icons).
2. **Design Language:** Strict Dark Mode, Neo-Brutalist (sharp corners, heavy borders, slate-900 background, glaring white text). Mobile-first responsive web design.
3. **No Hallucination:** You may only create files listed in the [Target File Tree]. Do not invent custom API routes or UI components outside this scope. Do not use Framer Motion or heavy animation libraries.

## Target File Tree
/src
  /app
    /api
      /save-youtube/route.ts       # Handles yt-dlp extraction & LLM calls
    /digest/page.tsx               # The daily digest view
    globals.css                    # Tailwind imports and Neo-Brutalist variables
    layout.tsx                     # Global layout, standard HTML wrapper
    page.tsx                       # Inbox view (Main feed)
  /components
    /ui
      VideoCard.tsx                # Card component for saved videos
      BottomNav.tsx                # Mobile-style bottom navigation
      UrlInput.tsx                 # Form component to paste/submit URLs
  /lib
    supabase.ts                    # Supabase client initialization
    youtube.ts                     # yt-dlp and OpenAI API handler logic
  /types
    index.ts                       # TypeScript interfaces (Database types)