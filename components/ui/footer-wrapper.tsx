import Footer from './footer';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export default function FooterWrapper({ 
  border = false, 
  mdxSource 
}: { 
  border?: boolean; 
  mdxSource: MDXRemoteSerializeResult;
}) {
  return <Footer border={border} mdxSource={mdxSource} />;
}
