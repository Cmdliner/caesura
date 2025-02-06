import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const poem = {
  id: 1,
  title: "The Road Not Taken",
  author: "Robert Frost",
  content: `Two roads diverged in a yellow wood,
And sorry I could not travel both
And be one traveler, long I stood
And looked down one as far as I could
To where it bent in the undergrowth;

Then took the other, as just as fair,
And having perhaps the better claim,
Because it was grassy and wanted wear;
Though as for that the passing there
Had worn them really about the same,

And both that morning equally lay
In leaves no step had trodden black.
Oh, I kept the first for another day!
Yet knowing how way leads on to way,
I doubted if I should ever come back.

I shall be telling this with a sigh
Somewhere ages and ages hence:
Two roads diverged in a wood, and I—
I took the one less traveled by,
And that has made all the difference.`,
}

export default function PoemPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-12">
        <Button
          asChild
          variant="outline"
          className="mb-8 text-neutral-400 hover:text-sage-light border-neutral-700 hover:border-sage-light"
        >
          <Link href="/poems">← Back to Poems</Link>
        </Button>
        <article className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-serif text-sage-light mb-3">{poem.title}</h1>
          <p className="text-xl text-neutral-400 mb-8">By {poem.author}</p>
          <div className="prose prose-custom max-w-none">
            <div className="whitespace-pre-wrap text-lg leading-relaxed text-neutral-300">{poem.content}</div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

