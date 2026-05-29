import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Rahul Rajeev',
  description: 'Explore the selected works and projects of Rahul Rajeev.',
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
