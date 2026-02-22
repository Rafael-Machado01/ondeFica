import "@/app/styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Background from '@/app/components/ui/BackGround'; 
<>
<Analytics/>
<SpeedInsights/>

</>

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
    <html lang="pt-BR">
      <body>
        <Background>{children}</Background>
      </body>
    </html>
  );
}
