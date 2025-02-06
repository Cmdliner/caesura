import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-neutral-800">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-neutral-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Caesura. All rights reserved.
          </p>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="text-neutral-400 hover:text-sage-light transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/poems" className="text-neutral-400 hover:text-sage-light transition-colors">
                  Poems
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-sage-light transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

