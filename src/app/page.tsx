 'use client'
 import { GlassCard } from '@/app/components/ui/GlassCard';
 import {Brand} from '@/app/components/ui/Brand';
 import { GlassInput } from '@/app/components/ui/GlassInput';
 import { MapPinned,MapPinHouse,Building2, Binary, MapPlus } from "lucide-react";
 import Swap from './components/ui/Swap';
 import { useState, ReactNode } from 'react';

export default function Home() {

const [isCep,setIsCep] = useState(false);

interface FieldsConfig {
  label?: string;
  placeholder:string;
  icon:ReactNode;
  asButton?: boolean;
}
const CepFields : FieldsConfig[]  = [
  {icon:<Binary/>,placeholder:'Digite o CEP'}
];

const AddressFields : FieldsConfig[] = [
  {icon: <MapPinHouse />,label:'Rua', placeholder:'Digite a rua'},
  {icon:<Building2/>,label:'Cidade', placeholder:'Digite a cidade'},
  {icon:<MapPlus/>,label:'Bairro', placeholder:'Digite o bairro',asButton: true}
];

const Fields = isCep ? CepFields : AddressFields;

  return (
    <>
    <header className='flex justify-center items-center'>
      <GlassCard className='p-5 mt-5' >
        <Brand title='ondeFica?' subtitle='Descubra endereços.'/>
        {Fields.map((field,index) => (
          <GlassInput button={ field.asButton} key={index} label={field.label} placeholder={field.placeholder} hover icon={field.icon}/>
        ))}
        <Swap onClick={() => setIsCep (prev => !prev)} text={isCep ? 'Procure por Endereço.': 'Procure por CEP.'}/>
      </GlassCard>
    </header>
    <main>
    </main>
     </>
  );
}
