import { Suspense } from 'react';
import EnrollContent from "@/components/enroll-content-ru";
import { getTermsContent } from '@/lib';

export default async function EnrollPage() {
  const mdxSource = await getTermsContent();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EnrollContent mdxSource={mdxSource} />
    </Suspense>
  );
}
