import { Inter, Almarai } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/Navbar/Navbar";
import Footer from "./(components)/Footer/Footer";
import Providers from '../../lib/Provider'

const almarai = Almarai({ subsets: ["arabic"], weight:["300", "400", "700", "800"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${almarai.className} dark:bg-darkbg`}>
        <Providers>

        {children}
        </Providers>

      </body>
    </html>
  );
}
