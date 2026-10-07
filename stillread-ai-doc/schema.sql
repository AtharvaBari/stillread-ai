-- STILL READ: Future-Proof Supabase Database Schema

create extension if not exists "uuid-ossp";
-- Enable vector search support for future semantic search features
create extension if not exists vector;

-- Define supported source platforms (You can add more here later without breaking existing data)
create type content_source as enum (
  'youtube', 
  'twitter', 
  'instagram', 
  'substack'
);

-- Universal items table
create table public.saved_items (
    id uuid default uuid_generate_v4() primary key,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    
    -- Universal fields
    source content_source not null default 'youtube',
    source_url text not null,
    title text not null,
    author_name text,
    summary text not null,
    
    -- Platform-specific flexible payload (e.g., thumbnails, video durations, tweet IDs)
    metadata jsonb default '{}'::jsonb not null,
    
    -- Vector embedding (Ready for future search features)
    embedding vector(768),
    
    -- Consumption States
    is_digested boolean default false
);

-- Fast JSONB and platform filtering indexes
create index idx_saved_items_source on public.saved_items(source);
create index idx_saved_items_metadata on public.saved_items using gin (metadata);

-- MVP RLS (Row Level Security) - Set to public for prototyping
alter table public.saved_items enable row level security;
create policy "Allow public read" on public.saved_items for select using (true);
create policy "Allow public insert" on public.saved_items for insert with check (true);