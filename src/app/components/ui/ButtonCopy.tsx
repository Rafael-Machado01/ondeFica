import type { LucideIcon } from "lucide-react";

interface ButtonProps {
  content: string;
  icon: LucideIcon;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  variant: "normal" | "copy";
}

const variants = {
  normal: "bg-[#1052d7]/50 hover:bg-[#1052d7]",
  copy : "bg-[#009B3A]"
}
  
export default function ButtonCopy({content,icon,onClick,variant}: ButtonProps) {
    const Icon = icon;
  return (
    <button onClick={onClick} className={` ${variants[variant]} flex items-center gap-2 p-3 rounded-xl mx-auto transition-colors duration-300 hover:cursor-pointer`}>
      <Icon color="white" size={18}/> {content}
      </button>
  )
}