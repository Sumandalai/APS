import "../globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Auth",
  description: "Generated by create next app",
};
const AuthLayout = ({ 
    children
  }) => {
    return ( 
      <html lang='en'>
        <body className={inter.className}>
        <div className="h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-800 to-black">
        {children}
      </div>
      </body>
      </html>
     );
  }
   
  export default AuthLayout;