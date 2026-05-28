import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/contexts/AppContext";
import { LibraryProvider } from "@/contexts/LibraryContext";
import Shell from "@/components/Shell";

export const metadata: Metadata = {
  title: "UniGames — One library across every platform",
  description: "Unify your Steam, Xbox, PlayStation and Epic Games libraries in one clean home.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <AppProvider>
          <LibraryProvider>
            <Shell>{children}</Shell>
          </LibraryProvider>
        </AppProvider>
      </body>
    </html>
  );
}
