import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32 container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-sage-light leading-tight">
              Where Words Find Their Rhythm
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 font-light">
              A curated space for contemporary poetry, where every pause is intentional and every word carries weight.
            </p>
            <div className="flex justify-center gap-4">
              <Button
                asChild
                variant="outline"
                className="border-neutral-700 hover:border-sage-light text-neutral-300 hover:text-sage-light"
              >
                <Link href="/poems">Browse Collection</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-neutral-900/50">
          <div className="container">
            <h2 className="text-2xl font-serif text-sage-light mb-8">Featured Poems</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <article key={i} className="space-y-3">
                  <h3 className="text-xl font-serif text-neutral-200">The Art of Silence</h3>
                  <p className="text-neutral-400 line-clamp-3">
                    In the depths of night, where shadows dance and whispers echo through empty corridors...
                  </p>
                  <Link href="#" className="text-sage hover:text-sage-light text-sm inline-flex items-center gap-2">
                    Read more →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

