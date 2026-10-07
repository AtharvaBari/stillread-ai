"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Plus, User } from "lucide-react";
import UrlInput from "./UrlInput";
import type { SavedItem } from "@/types";

export default function BottomNav() {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSuccess = (item: SavedItem) => {
    window.dispatchEvent(new CustomEvent("itemSaved", { detail: item }));
  };

  return (
    <>
      <nav className="fixed bottom-6 left-0 right-0 z-50 px-4 pointer-events-none">
        <div className="max-w-[320px] mx-auto h-16 bg-[#0f172a]/90 backdrop-blur-2xl rounded-full border border-white/10 shadow-2xl px-6 flex items-center justify-between pointer-events-auto">
          <Link href="/" className="relative flex items-center justify-center p-2 text-white/60 hover:text-white transition-colors">
            {pathname === "/" && <span className="absolute inset-0 bg-cyan-400/20 blur-md rounded-full"></span>}
            <Home size={24} strokeWidth={2} className="relative z-10" />
          </Link>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-12 h-12 rounded-full bg-gradient-to-tr from-sky-500 to-cyan-400 text-white shadow-lg flex items-center justify-center transform -translate-y-2 hover:scale-105 active:scale-95 transition-all"
          >
            <Plus size={28} strokeWidth={2.5} />
          </button>

          <Link href="/digest" className="relative flex items-center justify-center p-2 text-white/60 hover:text-white transition-colors">
            {pathname === "/digest" && <span className="absolute inset-0 bg-cyan-400/20 blur-md rounded-full"></span>}
            <User size={24} strokeWidth={2} className="relative z-10" />
          </Link>
        </div>
      </nav>

      <UrlInput 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSuccess={handleSuccess} 
      />
    </>
  );
}
