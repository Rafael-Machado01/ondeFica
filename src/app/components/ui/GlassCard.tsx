'use client'
import { ReactNode } from "react";
import {motion} from 'motion/react';
// Um dos componentes mais importantes do nosso projeto e muito simples.
// O diferente deste componente é que fizemos uma prop como className então até podemos usar css na invocação da função.
interface GlassCardProps {
  children: ReactNode;
  className?: string,
  hover?:boolean;
}

export function GlassCard({children, className="",hover = false}: GlassCardProps) {
  return (
    <motion.div
    initial={{opacity:0, y:20}}  animate={{opacity:1,y:0}} transition={{duration:0.5}}
    whileHover={hover ? {scale:1.01,borderColor: 'rgba(255,255,255,0.12)'}: {}}
    className={`backdrop-blur-xl bg-white/3 rounded-3xl text-white shadow-2xl transition-all ${className} `}>
      {children}
    </motion.div>
  )
}