import LanguageDetector from "@/components/ui/language-detector";

export default function RuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <LanguageDetector />
      {children}
    </div>
  );
}
