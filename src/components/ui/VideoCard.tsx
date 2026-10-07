import Image from "next/image";
import { Play, X, Bookmark } from "lucide-react";
import type { SavedItem } from "@/types";

interface VideoCardProps {
  item: SavedItem;
}

export default function VideoCard({ item }: VideoCardProps) {
  const thumbnailUrl = item.metadata?.thumbnail_url;

  return (
    <div className="flex flex-col gap-4">
      {/* Hero Card */}
      <article className="relative w-full aspect-[3/4] max-h-[600px] rounded-[32px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] bg-white/40 border border-white/50">
        {thumbnailUrl ? (
          <Image
            src={thumbnailUrl}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, 640px"
            className="object-cover"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-slate-200">
            <span className="text-slate-500 text-xs font-semibold">
              No Thumbnail
            </span>
          </div>
        )}

        {/* Translucent Scrim Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(15,23,42,0.92)]" />

        {/* Content Stack */}
        <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col gap-3 z-10">
          {/* Metadata Pill Row */}
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-semibold tracking-wide uppercase shadow-sm">
              Next in queue
            </span>
            <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white text-[10px] font-semibold tracking-wide uppercase shadow-sm">
              {item.source}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-white text-lg md:text-xl font-semibold leading-tight line-clamp-2 drop-shadow-md">
            {item.title}
          </h3>

          {/* Summary / Channel */}
          <div className="flex flex-col gap-1 mt-1">
            <p className="text-sky-200/90 text-xs font-medium drop-shadow-sm">
              {item.author_name} • YouTube
            </p>
            <div className="text-white/85 text-sm leading-snug mt-1 font-light flex flex-col gap-1.5 drop-shadow-sm">
              {item.summary.split('\n').filter(Boolean).slice(0, 2).map((bullet, idx) => (
                <span key={idx} className="block line-clamp-1">
                  <span className="text-sky-400 mr-1.5 font-bold">•</span>
                  {bullet.replace(/^-\s*/, '')}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Interactive Action Controls */}
      <div className="flex items-center justify-center gap-6 px-4 py-2">
        {/* Discard */}
        <button className="w-14 h-14 rounded-full bg-white/80 backdrop-blur-md shadow-sm border border-white flex items-center justify-center text-slate-700 hover:bg-white transition-colors active:scale-95">
          <X size={24} strokeWidth={2.5} />
        </button>

        {/* Play */}
        <a 
          href={item.source_url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-16 h-16 rounded-full bg-[#006194] shadow-lg shadow-sky-600/30 flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-transform"
        >
          <Play size={28} strokeWidth={2.5} className="ml-1" />
          <span className="absolute top-1 right-1 w-3 h-3 bg-sky-300 rounded-full border-2 border-[#006194]"></span>
        </a>

        {/* Save/Bookmark */}
        <button className="w-14 h-14 rounded-full bg-white/80 backdrop-blur-md shadow-sm border border-white flex items-center justify-center text-slate-700 hover:bg-white transition-colors active:scale-95">
          <Bookmark size={22} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
