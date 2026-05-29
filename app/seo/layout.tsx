import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Expertise | Rahul Rajeev',
  description: 'Technical SEO skills and experience record of Rahul Rajeev.',
};

export default function SEOLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
