import { Map } from "lucide-react";
interface BrandProps {
  subtitle?: string;
  title: string;
}

export function Brand({subtitle,title}:BrandProps) {
  return(
    <div className="flex flex-col gap-2 m-2">
      <div className="flex justify-center">
      <Map className="w-6 h-6 m-0.5"/>
      <h1 className="italic font-semibold ">{title}</h1>
      </div>
      {subtitle && (
         <p className="text-gray-300/86 text-center">{subtitle}</p>
      )}
    </div>
  )
}