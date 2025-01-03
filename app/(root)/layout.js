import { Inter } from "next/font/google";
import "../globals.css";
//import Navbar from "@/components/navbar/Navbar";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
const inter = Inter({ subsets: ["latin"] });
import { GameProvider } from '@/Context/GameContext';
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const session = await auth();
  //const session = await auth();

  return (
    <SessionProvider session={session}>
      <GameProvider>
      <html lang="en">
        <body className={`${inter.className} bg-[#030014] overflow-y-hidden overflow-x-hidden`}>
          {children}
        </body>
      </html>
      </GameProvider>
    </SessionProvider>
  );
}
