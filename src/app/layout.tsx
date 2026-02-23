import "@/app/styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Background from '@/app/components/ui/BackGround'; 

// Aqui estamos usando os Analytics do Next junto ao speed.
// Serve para o painel de controle na Vercel.
<> 
<Analytics/>
<SpeedInsights/>
</>

// Nosso metadata estamos definindo o titulo da pagina junto a uma descrição para leitores de tela.
// Também o favicon da aplicação.
export const metadata = {
  title: 'ondeFica?',
  description: 'Descubra endereços pelo Cep',
  icons: {
    icon: "/favicon.svg"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     // Envolvemos o children que seria o page.tsx no componente BackGround
        // Este componente é o responsável pela animação do fundo.
    <html lang="pt-BR">
      <body>
        <Background>{children}</Background> 
      </body>
    </html>
  );
}
