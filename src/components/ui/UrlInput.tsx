"use client";

import { useState } from "react";
import { Link2, ArrowRight, Loader2, X } from "lucide-react";
import type { SavedItem } from "@/types";

interface UrlInputProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (item: SavedItem) => void;
}

export default function UrlInput({ isOpen, onClose, onSuccess }: UrlInputProps) {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = url.trim();
    if (!trimmed) return;

    try {
      setIsLoading(true);
      const res = await fetch("/api/save-youtube", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: trimmed }),
      });
      if (!res.ok) throw new Error("Failed to fetch data");
      const newItem = await res.json();
      onSuccess(newItem);
      setUrl("");
      onClose();
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex flex-col justify-end pointer-events-none">
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm pointer-events-auto transition-opacity" onClick={onClose} />
      
      <div className="relative w-full max-w-lg mx-auto bg-white/70 backdrop-blur-2xl border-t border-white shadow-2xl rounded-t-3xl p-6 pb-12 pointer-events-auto transform transition-transform">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-slate-800">Add Content</h2>
          <button onClick={onClose} className="p-2 bg-white/50 rounded-full text-slate-600 hover:bg-white">
            <X size={20} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Link2 size={20} className="text-slate-400" />
            </div>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Paste link here..."
              disabled={isLoading}
              className="w-full pl-12 pr-14 py-4 rounded-2xl bg-white/60 border border-white focus:outline-none focus:ring-2 focus:ring-sky-400 focus:bg-white text-slate-800 placeholder-slate-400 shadow-inner"
              autoFocus
            />
            <button
              type="submit"
              disabled={isLoading || !url.trim()}
              className="absolute inset-y-1 right-1 w-12 flex items-center justify-center rounded-xl bg-[#006194] text-white disabled:opacity-50 transition-transform active:scale-95"
            >
              {isLoading ? <Loader2 size={20} className="animate-spin" /> : <ArrowRight size={20} />}
            </button>
          </div>
          {isLoading && (
            <p className="text-sm text-center text-sky-700 font-medium animate-pulse mt-2">
              Extracting transcript & summarizing...
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
