import AOSInitializer from "@/components/AOSInitializer";
import { getTermsContent } from '@/lib';

import Header from "@/components/ui/header";
import FooterWrapper from "@/components/ui/footer-wrapper";

export default async function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const mdxSource = await getTermsContent();

  return (
    <>
      <AOSInitializer />
      <Header />

      <main className="grow">{children}</main>

      <FooterWrapper border={true} mdxSource={mdxSource} />
    </>
  );
}
