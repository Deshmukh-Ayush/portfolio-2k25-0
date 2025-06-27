import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { ViewTransitions } from "next-view-transitions";
import { Footer } from "@/components/navbar/footer";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ayush Deshmukh",
  description:
    "A Developer Portfolio Website, expert in Web Development and App Development Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${inter.className} bg-neutral-100 antialiased dark:bg-neutral-700`}
          style={
            {
              "--pattern-fg": "rgb(23 23 23 / 0.1)", // neutral-900 with opacity for light mode
              "--pattern-fg-dark": "rgb(245 245 245 / 0.1)", // neutral-100 with opacity for dark mode
            } as React.CSSProperties
          }
        >
          <Toaster position="top-center" />
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
