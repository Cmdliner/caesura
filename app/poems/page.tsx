"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { LayoutGrid, List } from "lucide-react"
import Link from "next/link"

const poems = [
  { id: 1, title: "The Road Not Taken", author: "Robert Frost", excerpt: "Two roads diverged in a yellow wood..." },
  { id: 2, title: "Sonnet 18", author: "William Shakespeare", excerpt: "Shall I compare thee to a summer's day..." },
  { id: 3, title: "Still I Rise", author: "Maya Angelou", excerpt: "You may write me down in history..." },
  { id: 4, title: "The Raven", author: "Edgar Allan Poe", excerpt: "Once upon a midnight dreary..." },
  { id: 5, title: "Ozymandias", author: "Percy Bysshe Shelley", excerpt: "I met a traveller from an antique land..." },
  {
    id: 6,
    title: "Hope is the thing with feathers",
    author: "Emily Dickinson",
    excerpt: "Hope is the thing with feathers...",
  },
]

export default function PoemsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-serif text-sage-light">Poems</h1>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setViewMode("grid")}
              className={`border-neutral-700 hover:border-sage-light ${viewMode === "grid" ? "bg-neutral-800" : ""}`}
            >
              <LayoutGrid className="h-4 w-4 text-neutral-400" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setViewMode("list")}
              className={`border-neutral-700 hover:border-sage-light ${viewMode === "list" ? "bg-neutral-800" : ""}`}
            >
              <List className="h-4 w-4 text-neutral-400" />
            </Button>
          </div>
        </div>
        <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
          {poems.map((poem, index) => (
            <Card
              key={poem.id}
              className="bg-neutral-900/50 border-neutral-800 hover:border-neutral-700 transition-colors"
            >
              <CardHeader>
                <CardTitle className="font-serif text-sage-light">{poem.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-400 text-sm mb-2">By {poem.author}</p>
                <p className="text-neutral-300 line-clamp-2">{poem.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="outline"
                  className="text-neutral-400 hover:text-sage-light border-neutral-700 hover:border-sage-light"
                >
                  <Link href={`/poems/${poem.id}`}>Read Poem</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

