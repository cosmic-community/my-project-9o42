// app/musiques/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getTrack, getMetafieldValue } from '@/lib/cosmic'

export default async function TrackPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const track = await getTrack(slug)

  if (!track) notFound()

  const title = getMetafieldValue(track.metadata?.title) || track.title
  const description = getMetafieldValue(track.metadata?.description)
  const genre = getMetafieldValue(track.metadata?.genre)
  const duration = getMetafieldValue(track.metadata?.duration)
  const releaseDate = getMetafieldValue(track.metadata?.release_date)
  const imageUrl = track.metadata?.cover_art?.imgix_url
  const artist = track.metadata?.artist
  const artistName = artist ? (getMetafieldValue(artist.metadata?.name) || artist.title) : null

  const formattedDate = releaseDate
    ? new Date(releaseDate).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null

  return (
    <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/musiques" className="text-pink-300 hover:text-pink-200 text-sm mb-6 inline-block">
        ← Toutes les musiques
      </Link>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="aspect-square rounded-3xl overflow-hidden vinyl-shadow bg-gradient-to-br from-pink-900 to-black">
          {imageUrl ? (
            <img
              src={`${imageUrl}?w=1200&h=1200&fit=crop&auto=format,compress`}
              alt={title}
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-9xl">🎵</div>
          )}
        </div>

        <div>
          {artistName && artist && (
            <Link
              href={`/artistes/${artist.slug}`}
              className="text-brand-300 hover:text-brand-200 text-lg font-medium mb-3 inline-block"
            >
              {artistName}
            </Link>
          )}
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-6">
            {title}
          </h1>

          <div className="flex flex-wrap gap-3 mb-8">
            {genre && (
              <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium">
                🎵 {genre}
              </span>
            )}
            {duration && (
              <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium">
                ⏱ {duration}
              </span>
            )}
            {formattedDate && (
              <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium">
                📅 {formattedDate}
              </span>
            )}
          </div>

          {description && (
            <div className="glass-card rounded-2xl p-6">
              <h2 className="text-lg font-display font-bold text-white mb-3">À propos</h2>
              <p className="text-white/70 leading-relaxed whitespace-pre-wrap">{description}</p>
            </div>
          )}

          <button className="mt-8 w-full px-8 py-4 rounded-full bg-gradient-to-r from-brand-500 to-pink-500 text-white font-semibold hover:opacity-90 transition-opacity text-lg flex items-center justify-center gap-3">
            <span className="text-2xl">▶️</span>
            Écouter
          </button>
        </div>
      </div>
    </article>
  )
}