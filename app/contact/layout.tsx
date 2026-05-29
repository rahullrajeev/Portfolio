import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Rahul Rajeev',
  description: 'Get in touch with Rahul Rajeev for collaborations and inquiries.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
