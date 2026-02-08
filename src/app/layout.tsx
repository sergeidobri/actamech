import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import "@/styles/global.css";
import BaseInformation from "@/components/layout/BaseInformation";
import PageFiller from "@/components/layout/PageFiller";
import { Metadata } from "next";
import ScrollToTop from "@/components/layout/ScrollToTop";

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
        <ScrollToTop /> {/* TODO: разобраться со скроллами */}
        <Header />
        <PageFiller />
        <BaseInformation />
        <main className="flex-grow container mx-auto mb-16 mt-8 flex flex-col gap-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
