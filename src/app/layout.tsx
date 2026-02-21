import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import "@/styles/global.css";
import BaseInformation from "@/components/layout/BaseInformation";
import PageFiller from "@/components/layout/PageFiller";
import { Metadata } from "next";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { MathJaxProvider } from "@/components/mathjax/MathJaxProvider";

export const metadata: Metadata = {
  title: {
    default: "Actamech | Acta Mechanica et Imperium",
    template: "Actamech | %s",
  },
  description:
    "Acta Mechanica et Imperium is a peer review electronic journal published 4 times per year. ",
  keywords: ["mechanics", "space", "flights", "spaceship"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* <ScrollToTop /> */}
        <Header />
        <PageFiller />
        <BaseInformation />
        <MathJaxProvider>{children}</MathJaxProvider>
        <Footer />
      </body>
    </html>
  );
}
