import type { LucideIcon } from "lucide-react";

interface ButtonProps {
  content: string;
  icon: LucideIcon;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  variant: "normal" | "copy";
}
// Props até com variantes isso é muito bom para podermos reutilizar o botão.
// Por exemplo podemos criar um primary color, red,green, blue. São infinitas possibilidades.

const variants = {
  normal: "bg-[#1052d7]/50 hover:bg-[#1052d7]",
  copy : "bg-[#009B3A] hover:bg-[#007f2c]"
} // definindo o css das variantes.
    
export default function ButtonCopy({content,icon,onClick,variant}: ButtonProps) {
    const Icon = icon; // Referenciando que o componente icon é o icon de lucideIcon.
  return (
    <button onClick={onClick} className={` ${variants[variant]} flex items-center gap-2 p-3 rounded-xl mx-auto transition-colors duration-300 hover:cursor-pointer`}>
      <Icon color="white" size={18}/> {content} // Referenciando para que podemos usar o size e color.
      </button>
  )
}