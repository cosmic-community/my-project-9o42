import ArtistCard from '@/components/ArtistCard'
import { getArtists } from '@/lib/cosmic'

export default async function ArtistsPage() {
  const artists = await getArtists()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-12 text-center">
        <p className="text-brand-300 font-semibold uppercase tracking-widest text-sm mb-3">
          🎤 Tous nos artistes
        </p>
        <h1 className="text-5xl md:text-6xl font-display font-extrabold text-white mb-4">
          Les <span className="gradient-text">Artistes</span>
        </h1>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">
          Découvrez les talents qui partagent leur passion sur Musique Pour Tous.
        </p>
      </header>

      {artists.length === 0 ? (
        <div className="text-center py-20 text-white/40">
          <p className="text-2xl mb-2">🎤</p>
          <p>Aucun artiste pour le moment.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      )}
    </div>
  )
}