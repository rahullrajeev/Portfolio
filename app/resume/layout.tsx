import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume | Rahul Rajeev',
  description: 'Professional experience and technical skills of Rahul Rajeev.',
};

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
