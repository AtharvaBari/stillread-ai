# EXECUTION PROTOCOL

Execute these steps strictly in order. Do not skip ahead.

## Step 1: Scaffold the Environment
- Initialize the Next.js app with Tailwind and TypeScript.
- Clean `globals.css` and implement the Neo-Brutalist dark theme root variables.
- Create `/types/index.ts` and define the `SavedVideo` interface matching `schema.sql`.
- Initialize `supabase-js` in `/lib/supabase.ts` (assume environment variables are set).

## Step 2: Build the UI Components
- Build `VideoCard.tsx` applying heavy borders and high contrast.
- Build `BottomNav.tsx` with routing to `/` and `/digest`.
- Build `UrlInput.tsx` containing an input field and a submit button.

## Step 3: Implement the Views (Static)
- Construct `/app/page.tsx` (Inbox). Place `UrlInput` at the top. Underneath, map a static array of mock `SavedVideo` objects into `VideoCard` components.
- Construct `/app/digest/page.tsx`. Display only 3 mocked `VideoCard` components to represent the daily digest.

## Step 4: The API & Backend Integration
- Build `/api/save-youtube/route.ts`. 
- For this MVP step, the route should accept a POST request with a URL, returning a hardcoded mock object (title, thumbnail, and 3-bullet summary) to ensure frontend-to-backend wiring works before adding heavy scraping libraries.
- Wire `UrlInput.tsx` to call this API route and insert the returned mock data into Supabase.

## Step 5: Real Extraction Pipeline (Final)
- Only upon explicit user confirmation, update `/lib/youtube.ts` to utilize standard Node packages to fetch YouTube metadata (title, thumbnail).
- Integrate OpenAI for dummy text generation based on the title (bypassing full yt-dlp audio extraction for the V1 prototype to ensure rapid deployment, relying on metadata first).