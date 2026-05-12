// app/artistes/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import TrackCard from '@/components/TrackCard'
import { getArtist, getTracksByArtist, getMetafieldValue } from '@/lib/cosmic'

export default async function ArtistPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const artist = await getArtist(slug)

  if (!artist) notFound()

  const tracks = await getTracksByArtist(artist.id)

  const name = getMetafieldValue(artist.metadata?.name) || artist.title
  const bio = getMetafieldValue(artist.metadata?.bio)
  const genre = getMetafieldValue(artist.metadata?.genre)
  const location = getMetafieldValue(artist.metadata?.location)
  const website = getMetafieldValue(artist.metadata?.website)
  const imageUrl = artist.metadata?.profile_image?.imgix_url

  return (
    <article>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-30" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Link href="/artistes" className="text-brand-300 hover:text-brand-200 text-sm mb-6 inline-block">
            ← Tous les artistes
          </Link>
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <div className="aspect-square rounded-3xl overflow-hidden vinyl-shadow bg-gradient-to-br from-brand-900 to-black">
                {imageUrl ? (
                  <img
                    src={`${imageUrl}?w=800&h=800&fit=crop&auto=format,compress`}
                    alt={name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-9xl">🎤</div>
                )}
              </div>
            </div>
            <div className="md:col-span-2">
              <h1 className="text-5xl md:text-6xl font-display font-extrabold gradient-text mb-4">
                {name}
              </h1>
              <div className="flex flex-wrap gap-3 mb-6">
                {genre && (
                  <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium">
                    🎵 {genre}
                  </span>
                )}
                {location && (
                  <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium">
                    📍 {location}
                  </span>
                )}
              </div>
              {bio && <p className="text-lg text-white/70 leading-relaxed mb-6">{bio}</p>}
              {website && (
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-brand-500 to-pink-500 text-white font-semibold hover:opacity-90 transition-opacity"
                >
                  Site officiel →
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Tracks */}
      {tracks.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">
            🎵 Morceaux de {name}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {tracks.map((track) => (
              <TrackCard key={track.id} track={track} />
            ))}
          </div>
        </section>
      )}
    </article>
  )
}