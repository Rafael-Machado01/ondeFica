import '@/app/styles/background.css';
import { Children, ReactNode } from 'react';

interface BackGroundProps {
  children: ReactNode;
}
  
export default function Background({children} : BackGroundProps) {
  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-[#001A0E] transition-colors duration-500">
      <div className="absolute inset-0 overflow-hidden">
       
       <div className="absolute w-96 h-96 bg-[#009B3A]/35 rounded-full blur-3xl"
        style={{
          animation: 'float1 9s ease-in-out infinite',
          top: '10%',
          left: '-10%'
        }}
        />

        <div className="absolute w-64 h-64 bg-[#009B3A]/20 rounded-full blur-3xl"
        style={{
          animation: 'float3 14s ease-in-out infinite',
          top: '60%',
          left: '10%',
          animationDelay: '3s'
        }}
        />

        <div className="absolute w-90 h-90 bg-[#FFD700]/50 rounded-full blur-3xl"
        style={{
          animation: 'float5 19s ease-in-out infinite',
          bottom: '2%',
          right: '2%',
          animationDelay: '9s'
        }}
        />

        <div className="absolute w-80 h-80 bg-[#002776]/22 rounded-full blur-3xl"
        style={{
          animation: 'float4 22s ease-in-out infinite',
          top: '40%',
          left: '40%',
          animationDelay: '6s'
        }}
        />

        <div className="absolute w-66 h-66 bg-[#002776]/35 rounded-full blur-3xl"
        style={{
          animation: 'float6 11s ease-in-out infinite',
          top: '0%',
          left: '80%',
          animationDelay: '7s'
        }}
        />

        <div className="absolute w-46 h-46 bg-[#009B3A]/18 rounded-full blur-3xl"
        style={{
          animation: 'float7 32s ease-in-out infinite',
          bottom: '30%',
          right: '40%',
          animationDelay: '8s'
        }}
        />
      </div>
     <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}