import Link from 'next/link'
import type { Artist } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function ArtistCard({ artist }: { artist: Artist }) {
  const name = getMetafieldValue(artist.metadata?.name) || artist.title
  const genre = getMetafieldValue(artist.metadata?.genre)
  const location = getMetafieldValue(artist.metadata?.location)
  const imageUrl = artist.metadata?.profile_image?.imgix_url

  return (
    <Link href={`/artistes/${artist.slug}`} className="group">
      <div className="glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:vinyl-shadow">
        <div className="aspect-square overflow-hidden bg-gradient-to-br from-brand-900 to-black">
          {imageUrl ? (
            <img
              src={`${imageUrl}?w=800&h=800&fit=crop&auto=format,compress`}
              alt={name}
              width={400}
              height={400}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-6xl">🎤</div>
          )}
        </div>
        <div className="p-5">
          <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:gradient-text transition-all">
            {name}
          </h3>
          {genre && (
            <p className="text-brand-300 text-sm font-medium">{genre}</p>
          )}
          {location && (
            <p className="text-white/50 text-xs mt-1">📍 {location}</p>
          )}
        </div>
      </div>
    </Link>
  )
}