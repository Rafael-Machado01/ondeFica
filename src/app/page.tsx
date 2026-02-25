'use client'

import { GlassCard } from '@/app/components/ui/GlassCard';
import { Brand } from '@/app/components/ui/Brand';
import { GlassInput } from '@/app/components/ui/GlassInput';
import { Binary, Building2, Copy, Check, House, MapPinHouse } from "lucide-react";
import { useState, type ChangeEvent } from 'react';
import searchCep from '@/services/cepServer';
import Result from '@/app/components/ui/Results';
import ButtonCopy from './components/ui/ButtonCopy';
import { ReactNode } from 'react';

// Tipagem de resultado de cep.
interface CepType {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro?: boolean;
}
// Tipagem do input
interface FieldsType {
  label?:string;
  placeholder: string;
  icon:ReactNode;
  asButton?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onChange:(event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export default function Home() {

  const [input, setInput] = useState(''); // Estado do valor do input.
  const [error, setError] = useState(''); // Estado de erro. Vai armazenar mensagens de erro.
  const [result, setResult] = useState<CepType | null>(null); // Result oque recebe o data que vem do api, ele tem o estado inicial como null ou cepType
  const [loading, setLoading] = useState(false);// Se loading true então exibe "carregando.."
  const [copy,setCopy] = useState(false) // Estado se foi feito a copia para a area de transferência.


  const whenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value); // Quando o input for digitado guarde no input por meio do setInput
    if (error) setError('');  // E quando tiver um erro porem for digitado novamente então limpe a mensagem de erro.
  };

  const handleSearch = async () => { // Função de busca na api
    const formatCep = input.replace(/\D/g, '');  // Formatando o input tire tudo que for letra e simbolo pegue apenas números
    // Isso então se o Usuario digitar meu cep é 19802360 ele vai pegar apenas 19802360.

    if (formatCep.length !== 8) { // Se o número digitado não tiver 8 dígitos não é um cep. 
      setError('O CEP deve ter 8 dígitos.'); // Mostra a mensagem de erro.
      setResult(null);
      return;
    }

    try {
      setLoading(true); // Mostra a mensagem de carregando..
      setError(''); // Limpa a mensagem de erro do input caso tenha.

      const data: CepType = await searchCep(formatCep); // Data da api que é formatada pela tipagem cepType e usa a função searchCep(recebendo o cep formatado.)

      if (data.erro) { // Se der erro true na api então significa cep invalido. Aqui é apenas este erro possível pois já formatamos o cep
        setError('CEP inexistente.'); // Mostrando o erro.
        setResult(null);
        return;
      }

      setResult(data); // Se não tem erro passa o data para result.

    } catch {
      setError('Você está offline ou houve timeout.'); // Se voce esta com conexão lenta ou api fora do ar
      setResult(null);
    } finally {
      setLoading(false); // Quando o try acabar tire a mensagem de carregando
    }
  };

    const cepField: FieldsType[] = [
    {icon:<Binary/>,placeholder:"Digite o CEP",asButton:true,onClick:handleSearch,onChange:whenChange,value:input}
  ];

    const addressFields: FieldsType[] = [
      AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
    ]

  const address = result
    ? [result.logradouro, result.bairro, result.localidade, result.uf]
        .filter(Boolean)
        .join(', ')
    : ''; // Aqui formatando a resposta do result e juntando tudo em uma variável usamos no copy e para o googlemaps achar o endereço.

  const handleCopy = () => {
    navigator.clipboard.writeText(address); // Cole na area de transferência
    setCopy(true); // Se for true então o botão fica verde
    setTimeout(()=> { // 1,5s após ele volta ser false e fica na cor padrão
      setCopy(false);
    },1500)
  }

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
        </p>// Mensagem de carregando
      )}

      {/*Se tiver result mostre */}
      {result && (
        <section className="flex flex-col lg:flex-row justify-center items-start mt-16 text-white gap-10 px-6 max-w-6xl mx-auto">

          <div className="w-full lg:w-1/2 space-y-3">
            <Result title="Logradouro" content={result.logradouro} icon={House} />
            <Result title="Bairro" content={result.bairro} icon={Building2} />
            <Result title="Cidade" content={result.localidade} icon={MapPinHouse} />
            <ButtonCopy content="Copiar Resultado" variant={copy ? "copy" : "normal"} icon={copy ? Check : Copy } onClick={handleCopy}/>
          </div>

          <div className="w-full z-20 lg:w-1/2">
            <iframe
              className="w-full aspect-video rounded-2xl shadow-2xl border border-white/10"
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                address // Aqui usando nosso endereço formatado.
              )}&t=k&z=17&output=embed`}
            />
          </div>

        </section>
      )}

    </main>
  );
}