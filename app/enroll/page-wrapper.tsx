import { getTermsContent } from '@/lib/terms-content';
import EnrollPage from './page';

export default async function EnrollPageWrapper() {
  const mdxSource = await getTermsContent();
  
  return <EnrollPage mdxSource={mdxSource} />;
}
