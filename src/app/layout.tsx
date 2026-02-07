import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import "@/styles/global.css";
import BaseInformation from "@/components/layout/BaseInformation";
import PageFiller from "@/components/layout/PageFiller";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
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
