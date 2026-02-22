'use client'

import { GlassCard } from '@/app/components/ui/GlassCard';
import { Brand } from '@/app/components/ui/Brand';
import { GlassInput } from '@/app/components/ui/GlassInput';
import { Binary, Building2, House, MapPinHouse } from "lucide-react";
import { useState } from 'react';
import searchCep from '@/services/cepServer';
import Result from '@/app/components/ui/Results';

interface CepType {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro?: boolean;
}

export default function Home() {

  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState<CepType | null>(null);
  const [loading, setLoading] = useState(false);

  const whenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value);
    if (error) setError('');
  };

  const handleSearch = async () => {
    const formatCep = input.replace(/\D/g, '');

    if (formatCep.length !== 8) {
      setError('O CEP deve ter 8 dígitos.');
      setResult(null);
      return;
    }

    try {
      setLoading(true);
      setError('');

      const data: CepType = await searchCep(formatCep);

      if (data.erro) {
        setError('CEP inexistente.');
        setResult(null);
        return;
      }

      setResult(data);

    } catch {
      setError('Você está offline ou houve timeout.');
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  const endereco = result
    ? [result.logradouro, result.bairro, result.localidade, result.uf]
        .filter(Boolean)
        .join(', ')
    : '';

  return (
    <main>

      <header className="flex justify-center items-center">
        <GlassCard className="p-6 m-6 w-full max-w-md">
          <Brand title="ondeFica?" subtitle="Descubra endereços." />
          <GlassInput
            value={input}
            onChange={whenChange}
            onClick={handleSearch}
            error={error}
            button
            placeholder="Digite o CEP"
            hover
            icon={<Binary />}
          />
        </GlassCard>
      </header>

      {loading && (
        <p className="text-center mt-10 text-slate-400 animate-pulse">
          Buscando endereço...
        </p>
      )}

      {result && (
        <section className="flex flex-col lg:flex-row justify-center items-start mt-16 text-white gap-10 px-6 max-w-6xl mx-auto">

          <div className="w-full lg:w-1/2 space-y-3">
            <Result title="Logradouro" content={result.logradouro} icon={House} />
            <Result title="Bairro" content={result.bairro} icon={Building2} />
            <Result title="Cidade" content={result.localidade} icon={MapPinHouse} />
          </div>

          <div className="w-full z-20 lg:w-1/2">
            <iframe
              className="w-full aspect-video rounded-2xl shadow-2xl border border-white/10"
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                endereco
              )}&t=k&z=17&output=embed`}
            />
          </div>

        </section>
      )}

    </main>
  );
}