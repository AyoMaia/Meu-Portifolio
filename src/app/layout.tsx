import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Copy from './components/Copy'
import { Inter } from "next/font/google";
import "./globals.css";
import Menu from './components/Menu';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Diogo Maia",
  description: "Portifolio Diogo Maia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    
    <html lang="pt-br">
      
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <Copy />
      </body>
    </html>
  );
}
