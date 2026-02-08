'use client'
import { motion } from "motion/react";
import { ReactNode } from "react";

interface GlassInputProps {
  icon?: ReactNode;
  label?: string;
  error?: string;
  hover?: boolean;
  placeholder?: string;
  button?: boolean
}

export function GlassInput({icon,label,error,placeholder,hover = false,button = false }: GlassInputProps) {
  return (
    <div className="space-y-2 w-full">
      {label && (
        <label className="text-sm  font-medium text-[#FFD700]/80 block">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#009B3A]">
            {icon}
          </div>
        )}
        <motion.input
        whileFocus={{borderColor: '#7e7c23'}}
        whileHover={{borderColor:   '#7e7c23'}}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-xl bg-white/3 backdrop-blur-xl border border-[#7e7c23]/25
        text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#7e7c23]/50
        transition-all duration-300  ${icon ? 'pl-12' : ''} ${error ? 'border-red-500/50': ''}`}/>
</div>
          {error && (
            <motion.p initial={{opacity:0,y:-10}} animate={{opacity:1, y:0}} className="text-sm text-red-400">
              {error}
            </motion.p>
          )}
          {button && (
            <button className="bg-[#1052d7]/30 p-2 rounded-xl mx-auto block hover:bg-[#1052d7]/50 
            transition-colors duration-300 hover:cursor-pointer">Pesquisar</button>
          )}
    </div>
  )
}