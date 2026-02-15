import SerialFormatting from "@/components/common/SerialFormatting";

export default function MainProceedingVolumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

interface ProceedingVolumeLayoutProps {
  title: string;
  volume_number: string;
  children: React.ReactNode;
}

export function ProceedingVolumeLayout({
  title,
  volume_number,
  children,
}: ProceedingVolumeLayoutProps) {
  return (
    <>
      <div className="border-y-accent border-b-2">
        <div className="container mx-auto py-4">
          <h1 className="sm:text-3xl text-2xl">
            Proceedings, Volume {volume_number},{" "}
            <SerialFormatting str={title} wrapper="span" />
          </h1>
        </div>
      </div>
      {children}
    </>
  );
}
