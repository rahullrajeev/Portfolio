import type { Metadata } from 'next';
import { Playfair_Display, Space_Mono } from "next/font/google";
import './globals.css';
import { Navigation } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { TransitionProvider } from "@/components/layout/transition-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { HapticFeedback } from "@/components/ui/haptic-feedback";

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  style: ['normal', 'italic']
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Rahul Rajeev',
    default: 'Rahul Rajeev | Generative AI Developer & SEO Specialist',
  },
  description: 'Building AI-powered digital experiences with modern frontend technologies and strategic SEO expertise.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rahulrajeev.com',
    siteName: 'Rahul Rajeev',
    title: 'Rahul Rajeev | Generative AI Developer & SEO Specialist',
    description: 'Building AI-powered digital experiences with modern frontend technologies and strategic SEO expertise.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rahul Rajeev | Generative AI Developer & SEO Specialist',
    description: 'Building AI-powered digital experiences with modern frontend technologies and strategic SEO expertise.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${playfair.variable} ${spaceMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (!localStorage.getItem('theme') && window.innerWidth < 768) {
                  localStorage.setItem('theme', 'light');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="antialiased bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SmoothScroll>
          <HapticFeedback />
          <CustomCursor />
          <Navigation />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `{
                "@context": "https://schema.org/",
                "@type": "Person",
                "name": "Rahul Rajeev",
                "url": "https://rahulrajeev.com",
                "jobTitle": "AI Developer & SEO Specialist",
                "sameAs": [
                  "https://github.com/rahullrajeev",
                  "https://linkedin.com/in/rahullrajeev",
                  "https://instagram.com/r4hull_"
                ]
              }`,
            }}
          />
          <TransitionProvider>
            <main className="min-h-screen pt-24">{children}</main>
          </TransitionProvider>
          <Footer />
        </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
