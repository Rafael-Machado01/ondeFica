 'use client'
 import { GlassCard } from '@/app/components/ui/GlassCard';
 import {Brand} from '@/app/components/ui/Brand';
 import { GlassInput } from '@/app/components/ui/GlassInput';
 import { Binary } from "lucide-react";
 import { useState } from 'react';
 import searchCep from '@/services/cepServer';

export default function Home() {
  const [input, setInput] = useState('');
  const [error,setError] = useState('');
  const [result, setResult] = useState('1');

  const whenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setInput(event.currentTarget.value);
  }

const handleSearch = async () => {
  const formatCep = input.replace(/\D/g, '');
  if(formatCep.length !== 8 ) {
    setError('O Cep não tem 8  dígitos.');
    return;
  }
  try {
    const data = await searchCep(formatCep);
    console.log(data);
    if(data.erro === 'true') {
      setError('Cep inexistente.');
      return;
    };
    setError('');

  }catch(err) {
    setError('Timeout - Você está offline.');
  }
}

  return (
     <main>
    <header className='flex justify-center items-center'>
      <GlassCard className='p-5 m-5' >
        <Brand title='ondeFica?' subtitle='Descubra endereços.'/>
        <GlassInput value={input} onChange={whenChange} onClick={handleSearch} error={error} button placeholder='Digite o cep' hover  icon={<Binary/>}  />
      </GlassCard>
    </header>
    <section className='flex justify-center items-center mt-20'>
    {Object.keys(result).length > 0 &&(
      <GlassCard className='p-5 m-5'>
        <h1>Rua</h1>
        <p>Tres de maio</p>

      </GlassCard>
    )}
    </section>
    </main>
  );
}
