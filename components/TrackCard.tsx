import Link from 'next/link'
import type { Track } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function TrackCard({ track }: { track: Track }) {
  const title = getMetafieldValue(track.metadata?.title) || track.title
  const genre = getMetafieldValue(track.metadata?.genre)
  const duration = getMetafieldValue(track.metadata?.duration)
  const imageUrl = track.metadata?.cover_art?.imgix_url
  const artist = track.metadata?.artist
  const artistName = artist ? (getMetafieldValue(artist.metadata?.name) || artist.title) : null

  return (
    <Link href={`/musiques/${track.slug}`} className="group">
      <div className="glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:vinyl-shadow">
        <div className="aspect-square overflow-hidden bg-gradient-to-br from-pink-900 to-black relative">
          {imageUrl ? (
            <img
              src={`${imageUrl}?w=800&h=800&fit=crop&auto=format,compress`}
              alt={title}
              width={400}
              height={400}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-6xl">🎵</div>
          )}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity w-16 h-16 rounded-full bg-white flex items-center justify-center text-2xl">
              ▶️
            </div>
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-display font-bold text-white mb-1 group-hover:gradient-text truncate">
            {title}
          </h3>
          {artistName && (
            <p className="text-white/70 text-sm">{artistName}</p>
          )}
          <div className="flex items-center justify-between mt-2 text-xs text-white/50">
            {genre && <span className="px-2 py-1 rounded-full bg-white/10">{genre}</span>}
            {duration && <span>⏱ {duration}</span>}
          </div>
        </div>
      </div>
    </Link>
  )
}