import Link from "next/link"

export function Header() {
  return (
    <header className="border-b border-neutral-800 bg-black/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-serif text-sage-light hover:text-sage transition-colors">
          Caesura
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-neutral-400 hover:text-sage-light transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/poems" className="text-neutral-400 hover:text-sage-light transition-colors duration-200">
                Poems
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

