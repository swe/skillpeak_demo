import { getTermsContent } from '../../lib/terms-content';
import EnrollmentContent from './enroll-content';

export default async function EnrollPageWrapper() {
  const mdxSource = await getTermsContent();
  
  return <EnrollmentContent mdxSource={mdxSource} />;
}
