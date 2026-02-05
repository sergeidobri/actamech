import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import "@/styles/global.css";
import BaseInformation from "@/components/layout/baseInformation/BaseInformation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <BaseInformation />
        <main className="flex-grow container mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
