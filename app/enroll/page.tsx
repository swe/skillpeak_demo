import { Suspense } from 'react';
import { getTermsContent } from '@/lib/terms-content';
import EnrollmentContent from './enroll-content';

export default async function EnrollPageWrapper() {
  const mdxSource = await getTermsContent();
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EnrollmentContent mdxSource={mdxSource} />
    </Suspense>
  );
}
