import { Button } from "@/components/ui/primitives";

export default function NotFound() {
  return (
    <section className="container-x py-28 text-center">
      <p className="text-gradient text-6xl font-bold">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight">This request wasn’t routed anywhere.</h1>
      <p className="mx-auto mt-3 max-w-md text-muted">The page you’re looking for doesn’t exist or has moved. Try the sitemap or head home.</p>
      <div className="mt-8 flex flex-col justify-center gap-3 min-[420px]:flex-row">
        <Button href="/">Home</Button>
        <Button href="/sitemap" variant="secondary">Sitemap</Button>
      </div>
    </section>
  );
}
