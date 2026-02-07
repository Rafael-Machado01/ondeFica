 'use client'
 import { GlassCard } from '@/app/components/ui/GlassCard';
 import {Brand} from '@/app/components/ui/Brand';
 import { GlassInput } from '@/app/components/ui/GlassInput';
 import { MapPinned } from "lucide-react";
 import Swap from './components/ui/Swap';
 import { useState, ReactNode } from 'react';

const [isCep,setIsCep] = useState(false);

interface FieldsConfig {
  label?: string;
  placeholder:string;
  icon:ReactNode;
}

const CepFields : FieldsConfig[]  = [
  {placeholder:'Digite o CEP.'}
];

const AddressFields : FieldsConfig[] = [
  {label:'Rua', placeholder:'Digite a rua.'},
  {label:'Cidade', placeholder:'Digite a cidade.'},
  {label:'Bairro', placeholder:'Digite o bairro.'}
];

const Fields = isCep ? CepFields : AddressFields;

export default function Home() {

  return (
    <main className='flex justify-center items-center'>
      <GlassCard className='p-5 mt-5' >
        <Brand title='ondeFica?' subtitle='Descubra endereços.'/>
        {Fields.map((field,index) => (
          <GlassInput key={index} label={field.label} placeholder={field.placeholder} icon={field.icon}/>
        ))}
        <GlassInput placeholder='olá' icon={  <MapPinned className="w-7 text-green-300 h-7"/>} hover/>
        <Swap onClick={() => setIsCep (prev => !prev)} text={isCep ? 'Procure por Endereço.': 'Procure por CEP.'}/>
      </GlassCard>
    </main>
  );
}
