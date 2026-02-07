 import { GlassCard } from '@/app/components/ui/GlassCard';
 import {Brand} from '@/app/components/ui/Brand';
 import { GlassInput } from '@/app/components/ui/GlassInput';
 import { MapPinned } from "lucide-react";
export default function Home() {
  return (
    <main className='flex justify-center items-center'>
      <GlassCard className='p-5 mt-5' >
        <Brand title='ondeFica?' subtitle='Descubra endereços pelo CEP'/>
        <GlassInput icon={  <MapPinned className="w-7 text-green-300 h-7"/>} hover/>
      </GlassCard>
    </main>
  );
}
