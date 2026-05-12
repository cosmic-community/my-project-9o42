import Link from 'next/link'
import Hero from '@/components/Hero'
import ArtistCard from '@/components/ArtistCard'
import TrackCard from '@/components/TrackCard'
import PostCard from '@/components/PostCard'
import { getArtists, getTracks, getPosts } from '@/lib/cosmic'

export default async function HomePage() {
  const [artists, tracks, posts] = await Promise.all([
    getArtists(),
    getTracks(),
    getPosts(),
  ])

  const featuredArtists = artists.slice(0, 4)
  const featuredTracks = tracks.slice(0, 6)
  const featuredPosts = posts.slice(0, 3)

  return (
    <>
      <Hero />

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-card rounded-2xl p-8">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-display font-bold text-white mb-2">Libre et accessible</h3>
            <p className="text-white/60 text-sm">
              Chaque artiste, débutant ou confirmé, peut partager ses morceaux et créations.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-8">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-display font-bold text-white mb-2">Échange et découverte</h3>
            <p className="text-white/60 text-sm">
              Un lieu où la musique ne se consomme pas seulement, mais où elle se partage.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-8">
            <div className="text-4xl mb-4">🎧</div>
            <h3 className="text-xl font-display font-bold text-white mb-2">Vibrer ensemble</h3>
            <p className="text-white/60 text-sm">
              Une communauté en construction, une aventure humaine et artistique.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Artists */}
      {featuredArtists.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-brand-300 font-semibold uppercase tracking-widest text-sm mb-2">
                🎤 Artistes
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
                Découvrez nos artistes
              </h2>
            </div>
            <Link href="/artistes" className="hidden md:block text-brand-300 hover:text-brand-200 font-medium">
              Voir tous →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredArtists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        </section>
      )}

      {/* Featured Tracks */}
      {featuredTracks.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-pink-300 font-semibold uppercase tracking-widest text-sm mb-2">
                🎵 Musiques
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
                Derniers morceaux
              </h2>
            </div>
            <Link href="/musiques" className="hidden md:block text-pink-300 hover:text-pink-200 font-medium">
              Voir tous →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {featuredTracks.map((track) => (
              <TrackCard key={track.id} track={track} />
            ))}
          </div>
        </section>
      )}

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-orange-300 font-semibold uppercase tracking-widest text-sm mb-2">
                📰 Actualités
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
                Dernières nouvelles
              </h2>
            </div>
            <Link href="/actualites" className="hidden md:block text-orange-300 hover:text-orange-200 font-medium">
              Voir tous →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="glass-card rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg opacity-10" />
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Rejoignez la communauté
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Échangez, collaborez, inspirez-vous les uns les autres. La musique appartient à tout le monde.
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=61580692265651"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-brand-500 to-pink-500 text-white font-semibold hover:opacity-90 transition-opacity text-lg"
            >
              Rejoindre sur Facebook
            </a>
          </div>
        </div>
      </section>
    </>
  )
}