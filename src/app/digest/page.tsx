import VideoCard from "@/components/ui/VideoCard";
import type { SavedItem } from "@/types";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export const revalidate = 0; // Ensure fresh data on every request

export default async function DigestPage() {
  const { data, error } = await supabase
    .from('saved_items')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(3);

  const digestItems = data ? (data as SavedItem[]) : [];

  return (
    <main className="flex flex-col items-center min-h-screen px-4 pt-6 pb-28">
      <div className="w-full max-w-lg flex flex-col gap-8">
        
        {/* Header Section */}
        <section className="flex flex-col gap-4">
          <header className="flex flex-col gap-1">
            <h1 className="text-3xl font-black tracking-tight text-[#006194]">
              Daily Digest
            </h1>
            <p className="text-sm font-medium text-slate-500">
              {new Date().toLocaleDateString("en-US", {
                weekday: 'long',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </header>
          
          <div className="glass-card rounded-3xl p-5 shadow-sm">
            <p className="text-sm font-medium leading-relaxed text-slate-700">
              Here are your 3 curated videos for today. Take a moment to absorb the key takeaways before they disappear tomorrow.
            </p>
          </div>
        </section>

        {/* Digest Feed Section */}
        <section className="flex flex-col gap-8">
          {digestItems.map((item) => (
            <VideoCard key={item.id} item={item} />
          ))}
          
          {/* End of digest indicator */}
          <div className="flex flex-col items-center justify-center pt-8 pb-12 gap-3 text-center">
            <div className="w-full max-w-[120px] h-1 bg-[#006194]/20 rounded-full" />
            <p className="text-xs font-semibold tracking-wide text-slate-400 mt-2">
              You're all caught up
            </p>
          </div>
        </section>
        
      </div>
    </main>
  );
}
