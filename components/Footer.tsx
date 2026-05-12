import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-display font-bold gradient-text mb-3">
              🎶 Musique Pour Tous
            </h3>
            <p className="text-white/60 text-sm">
              Une plateforme participative où artistes et passionnés se rencontrent autour de la musique.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Navigation</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link href="/" className="hover:text-white transition-colors">Accueil</Link></li>
              <li><Link href="/artistes" className="hover:text-white transition-colors">Artistes</Link></li>
              <li><Link href="/musiques" className="hover:text-white transition-colors">Musiques</Link></li>
              <li><Link href="/actualites" className="hover:text-white transition-colors">Actualités</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Communauté</h4>
            <p className="text-sm text-white/60 mb-3">
              Rejoignez notre communauté de passionnés de musique.
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=61580692265651"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm transition-colors"
            >
              Facebook →
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          © {new Date().getFullYear()} Musique Pour Tous. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}