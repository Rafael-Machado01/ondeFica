import "@/app/styles/globals.css";
import Background from '@/app/components/ui/BackGround'; 

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
