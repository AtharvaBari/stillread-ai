"use client";

import { useState, useEffect } from "react";
import VideoCard from "@/components/ui/VideoCard";
import type { SavedItem } from "@/types";
import { createClient } from "@supabase/supabase-js";
import { Search } from "lucide-react";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function InboxPage() {
  const [items, setItems] = useState<SavedItem[]>([]);

  useEffect(() => {
    async function fetchItems() {
      const { data, error } = await supabase
        .from('saved_items')
        .select('*')
        .order('created_at', { ascending: false });
        
      if (!error && data) {
        setItems(data as SavedItem[]);
      }
    }
    fetchItems();
  }, []);

  useEffect(() => {
    const handleItemSaved = (e: any) => {
      setItems((prev) => [e.detail, ...prev]);
    };
    window.addEventListener("itemSaved", handleItemSaved);
    return () => window.removeEventListener("itemSaved", handleItemSaved);
  }, []);

  return (
    <main className="flex flex-col items-center min-h-screen px-4 pt-6 pb-28">
      <div className="w-full max-w-lg flex flex-col gap-6">
        
        {/* Header Section */}
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight text-[#0f172a]">
            Still Read
          </h1>
          <button className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-700 hover:bg-white/80 transition-colors shadow-sm">
            <Search size={20} />
          </button>
        </header>

        {/* Sub-header Status Pill Bar */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1.5 text-sm font-medium text-slate-600">
            <span className="text-sky-500">✦</span>
            <span>Daily Mindful Digest</span>
          </div>
          <div className="bg-sky-100/60 border border-sky-300/40 text-sky-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
            • ALL CAUGHT UP
          </div>
        </div>

        {/* Feed Section */}
        <section className="flex flex-col gap-8 mt-4">
          {items.map((item) => (
            <VideoCard key={item.id} item={item} />
          ))}
          
          {/* End of feed indicator */}
          <div className="flex flex-col items-center justify-center py-8 gap-2 opacity-30">
            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
          </div>
        </section>
        
      </div>
    </main>
  );
}
