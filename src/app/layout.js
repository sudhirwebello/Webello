import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Webello",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="../../favicon.ico" />
      </head>

      <body className={inter.className} suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
