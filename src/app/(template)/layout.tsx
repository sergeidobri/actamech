import MainContainer from "@/components/layout/MainContainer";
import "@/styles/global.css";

export default function TemplateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainContainer>{children}</MainContainer>;
}
