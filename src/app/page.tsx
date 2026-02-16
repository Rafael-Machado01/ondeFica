 'use client'
 import { GlassCard } from '@/app/components/ui/GlassCard';
 import {Brand} from '@/app/components/ui/Brand';
 import { GlassInput } from '@/app/components/ui/GlassInput';
 import { MapPinHouse,Building2, Binary, MapPlus } from "lucide-react";
 import Swap from './components/ui/Swap';
 import { useState, ReactNode } from 'react';
import searchCep from '@/services/cepServer';

export default function Home() {

const [isCep,setIsCep] = useState(false);
const [input, setInput] = useState('');
const handleSearch = async () => {
  console.log(input)
  const formatCep = input.replace(/\D/g, '');
  console.log(formatCep)
  if(formatCep.length !== 8 ) {
    alert('O cep não tem os 8 números');
    return;
  }
  try {
    const data = await searchCep(formatCep);
    console.log(data);
  }catch(err) {
    console.log(err)
  }
}
const whenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setInput(event.currentTarget.value);
}
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
          <GlassInput value={input} onChange={whenChange} button={ field.asButton} key={index} label={field.label} placeholder={field.placeholder} hover icon={field.icon}/>
        ))}
        <Swap onClick={() => setIsCep (prev => !prev)} text={isCep ? 'Procure por Endereço.': 'Procure por CEP.'}/>
          <button type='button' onClick={handleSearch}>buscar</button>
      </GlassCard>
    </header>
    <main>
    </main>
     </>
  );
}
