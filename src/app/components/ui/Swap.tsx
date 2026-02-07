import { ArrowLeftRight } from "lucide-react"
interface SwapProps {
  onClick?:() => void;
  text: string;
}
export default function Swap({text,onClick}: SwapProps) {
  return (
    <div className="flex justify-center gap-2 mt-2"> 
      <ArrowLeftRight className="text-gray-200" width={20} height={20} />
       <button onClick={onClick} className="font-light hover:cursor-pointer">{text}</button>
    </div>
  )
}