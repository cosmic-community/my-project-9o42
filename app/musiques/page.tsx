import TrackCard from '@/components/TrackCard'
import { getTracks } from '@/lib/cosmic'

export default async function TracksPage() {
  const tracks = await getTracks()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-12 text-center">
        <p className="text-pink-300 font-semibold uppercase tracking-widest text-sm mb-3">
          🎵 Catalogue musical
        </p>
        <h1 className="text-5xl md:text-6xl font-display font-extrabold text-white mb-4">
          Les <span className="gradient-text">Musiques</span>
        </h1>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">
          Explorez les morceaux partagés par notre communauté d'artistes.
        </p>
      </header>

      {tracks.length === 0 ? (
        <div className="text-center py-20 text-white/40">
          <p className="text-2xl mb-2">🎵</p>
          <p>Aucun morceau pour le moment.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tracks.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>
      )}
    </div>
  )
}