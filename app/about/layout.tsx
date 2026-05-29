import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Rahul Rajeev',
  description: 'Learn more about Rahul Rajeev, bridging the gap between Computer Science and Digital Marketing.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
