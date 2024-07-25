import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
// import "./globals.css";
import "@/resources/sass/styles.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "La Granja",
  description: "La Granja",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
