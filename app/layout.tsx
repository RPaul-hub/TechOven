import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import ResponsiveNav from "@/navbar/responsivenav";

const font = Poppins({
  weight: ['100','200','300','400','500','600','700','800','900'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "T echOven | Shopping Cart",
  description: "shopping car for digital products",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <ResponsiveNav />
        <div className="pt-[14vh] w-[90%] xl:w-[80%] mx-auto overflow-hidden"> 
          {children}
        </div>
      </body>
    </html>
  );
}
