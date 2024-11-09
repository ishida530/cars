import localFont from "next/font/local";
import "./globals.css";
import { SearchContextProvider } from "./context/search";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {


  return (
    <SearchContextProvider >
      <html lang="en">
        <body className={inter.className}>
          {children}
        </body>
      </html>
    </SearchContextProvider>
  );
}