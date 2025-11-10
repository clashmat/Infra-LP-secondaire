import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Vault Vert — LP secondaire infra",
  description: "Feeder tokenisé par fonds. Fenêtres d’enchères. DvP rapide. Accès prioritaire via le Vault Vert.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="bg-bgd text-white">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header/>
          <main className="min-h-screen">{children}</main>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
