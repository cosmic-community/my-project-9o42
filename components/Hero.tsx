import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(217,70,239,0.15),transparent_70%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-brand-300 font-semibold uppercase tracking-widest text-sm mb-4">
              🎶 Plateforme participative
            </p>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold leading-tight mb-6">
              <span className="text-white">Musique </span>
              <span className="gradient-text">pour tous</span>
            </h1>
            <p className="text-xl text-white/70 mb-8 max-w-xl">
              Une rencontre entre artistes et passionnés. Une plateforme gratuite, ouverte à tous,
              où chacun peut partager, découvrir et vibrer ensemble.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/musiques"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-brand-500 to-pink-500 text-white font-semibold hover:opacity-90 transition-opacity text-lg"
              >
                Découvrir la musique
              </Link>
              <Link
                href="/artistes"
                className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors text-lg"
              >
                Voir les artistes
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-500 via-pink-500 to-orange-500 animate-pulse opacity-20 blur-3xl" />
              <div className="relative aspect-square rounded-full bg-gradient-to-br from-gray-900 to-black border-8 border-gray-800 flex items-center justify-center vinyl-shadow">
                <div className="absolute inset-8 rounded-full border border-gray-700/50" />
                <div className="absolute inset-16 rounded-full border border-gray-700/50" />
                <div className="absolute inset-24 rounded-full border border-gray-700/50" />
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-500 to-pink-500 flex items-center justify-center text-4xl">
                  🎵
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}