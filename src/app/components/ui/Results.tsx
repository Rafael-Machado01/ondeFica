import { House, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

  interface ResultProps {
    title: string;
    content: string;
    icon: LucideIcon;
    uf?: string;
  }

export default function Result({title, content,icon,uf}: ResultProps) {
  const Icon = icon;
  return (
      <div className="flex items-center backdrop-blur-xl m-2 bg-white/3 shadow-2xl min-w-[150] p-3 rounded-xl hover:translate-1.25 duration-300">
      <Icon color="#009B3A" size={20}/>
        <div className="ml-2">
          <label className="text-[#FFD700] text-sm font-light">{title}</label>
          <p className="text-slate-300">{content} <span className="text-[#FFD700]">{uf}</span></p>
        </div>
      </div>
)}