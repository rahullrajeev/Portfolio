import { TransitionLink as Link } from "@/components/ui/transition-link";
import { PageTransition } from "@/components/layout/page-transition";

export default function NotFound() {
  return (
    <PageTransition>
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-display text-6xl font-bold tracking-tighter mb-4">404</h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-md font-display font-light">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="px-6 py-3 rounded-full bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-950 font-medium text-sm hover:opacity-90 transition-opacity"
        >
          Return Home
        </Link>
      </div>
    </PageTransition>
  );
}
