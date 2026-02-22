import "@/app/styles/globals.css";
import Background from '@/app/components/ui/BackGround'; 
import { title } from "process";

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
