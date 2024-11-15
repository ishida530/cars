import localFont from "next/font/local";
import "./globals.css";
import { SearchContextProvider } from "./context/search";
import { Inter } from 'next/font/google'
import { ModalProvider } from "./context/modal";
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: "AM Cars",
  description: "Skup samochodów 24h/7",
};

export default function RootLayout({ children }) {


  return (
    <ModalProvider>
      <SearchContextProvider >
        <html lang="en">
          <body className={inter.className}>
            {children}
          </body>
        </html>
      </SearchContextProvider>
    </ModalProvider>
  );
}
