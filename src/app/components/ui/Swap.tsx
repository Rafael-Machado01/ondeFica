import { ArrowLeftRight } from "lucide-react"
interface SwapProps {
  onClick?:() => void;
  text: string;
}
export default function Swap({text,onClick}: SwapProps) {
  return (
    <div className="flex font-light text-slate-300 justify-center gap-2 mt-2 hover:text-[#1052d7]  hover:cursor-pointer transition-all duration-500 "> 
      <ArrowLeftRight width={20} height={20} />
       <button className=" hover:cursor-pointer" onClick={onClick}>{text}</button>
    </div>
  )
}