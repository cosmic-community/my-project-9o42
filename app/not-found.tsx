import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-8xl mb-4">🎵</p>
        <h1 className="text-5xl font-display font-bold gradient-text mb-4">404</h1>
        <p className="text-xl text-white/60 mb-8">
          Cette page semble s'être perdue dans la mélodie...
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-brand-500 to-pink-500 text-white font-semibold hover:opacity-90 transition-opacity"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  )
}