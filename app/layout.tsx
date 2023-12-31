import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/sections/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Header } from "@/sections";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Duc | Personal Portfolio",
  description: "Im Front-End Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative  pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 `}
      >
        <div className="bg-[#bcede3] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#cfcaec] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <Header />
          {children}
          <Footer />
          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
