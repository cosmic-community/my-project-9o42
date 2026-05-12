import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-black/70 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-2xl font-display font-bold gradient-text">
          🎶 Musique Pour Tous
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="text-white/80 hover:text-white transition-colors">
            Accueil
          </Link>
          <Link href="/artistes" className="text-white/80 hover:text-white transition-colors">
            Artistes
          </Link>
          <Link href="/musiques" className="text-white/80 hover:text-white transition-colors">
            Musiques
          </Link>
          <Link href="/actualites" className="text-white/80 hover:text-white transition-colors">
            Actualités
          </Link>
          <Link
            href="/artistes"
            className="px-4 py-2 rounded-full bg-gradient-to-r from-brand-500 to-pink-500 text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Découvrir
          </Link>
        </div>
      </nav>
    </header>
  )
}