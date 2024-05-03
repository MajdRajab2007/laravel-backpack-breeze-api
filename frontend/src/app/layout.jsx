import { Inter, Tajawal } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/Navbar/Navbar";
import Footer from "./(components)/Footer/Footer";
import Providers from '../../lib/Provider'

const tajawal = Tajawal({ subsets: ["arabic"], weight:["300", "400", "700", "800"] });

export const metadata = {
    title: "دليل الشباب"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${tajawal.className} dark:bg-darkbg`}>
        <Providers >

        {children}
        </Providers>

      </body>
    </html>
  );
}
