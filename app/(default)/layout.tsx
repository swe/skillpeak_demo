import AOSInitializer from "@/components/AOSInitializer";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AOSInitializer />
      <Header />

      <main className="grow">{children}</main>

      <Footer border={true} />
    </>
  );
}
