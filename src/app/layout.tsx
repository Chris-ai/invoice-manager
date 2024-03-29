import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeContextProvider } from "@/context/themeContext";
import { Navbar } from "@/components/navigation/navbar";
import { Sidebar } from "@/components/navigation/sidebar";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Invoice Manager",
  description: "...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeContextProvider>
        <body className={`${font.className} min-h-screen`}>
          <Navbar />
          <main className="lg:flex min-h-screen w-full bg-light-bg dark:bg-charcoal dark:text-white">
            <Sidebar />
            {children}
          </main>
        </body>
      </ThemeContextProvider>
    </html>
  );
}
