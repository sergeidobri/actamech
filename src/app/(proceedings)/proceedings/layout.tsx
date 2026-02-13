import "@/styles/global.css";
import { getProceedingById } from "@/api/api";
import { notFound } from "next/navigation";

export default async function ProceedingLayout({
  params,
  children,
}: {
  params: Promise<{ proceedingId: string }>;
  children: React.ReactNode;
}) {
  const { proceedingId } = await params;
  // const { data } = await getProceedingById(proceedingId);
  const { data } = await getProceedingById("advances-in-mechanics-and-control");

  if (!data) {
    notFound();
  }
  const { title } = data;

  return (
    <>
      <div className="border-y-accent border-y-2 mt-8">
        <div className="container mx-auto py-8">
          <h1 className="text-4xl uppercase">{title}</h1>
        </div>
      </div>
      {children}
    </>
  );
}
