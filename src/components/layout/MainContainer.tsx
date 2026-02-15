interface MainContainerProps {
  children: React.ReactNode;
}

export default function MainContainer({ children }: MainContainerProps) {
  return (
    <main className="flex-grow container mx-auto mb-16 mt-8 flex flex-col sm:gap-8 gap-4">
      {children}
    </main>
  );
}
