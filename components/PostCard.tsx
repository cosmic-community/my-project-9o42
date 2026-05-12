import Link from 'next/link'
import type { Post } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function PostCard({ post }: { post: Post }) {
  const title = getMetafieldValue(post.metadata?.title) || post.title
  const excerpt = getMetafieldValue(post.metadata?.excerpt)
  const date = getMetafieldValue(post.metadata?.published_date)
  const imageUrl = post.metadata?.featured_image?.imgix_url

  const formattedDate = date
    ? new Date(date).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null

  return (
    <Link href={`/actualites/${post.slug}`} className="group">
      <article className="glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:vinyl-shadow h-full flex flex-col">
        <div className="aspect-[16/9] overflow-hidden bg-gradient-to-br from-orange-900 to-black">
          {imageUrl ? (
            <img
              src={`${imageUrl}?w=1200&h=675&fit=crop&auto=format,compress`}
              alt={title}
              width={600}
              height={338}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-6xl">📰</div>
          )}
        </div>
        <div className="p-6 flex-1 flex flex-col">
          {formattedDate && (
            <p className="text-brand-300 text-xs font-medium mb-2 uppercase tracking-wider">
              {formattedDate}
            </p>
          )}
          <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:gradient-text">
            {title}
          </h3>
          {excerpt && (
            <p className="text-white/60 text-sm line-clamp-3 flex-1">{excerpt}</p>
          )}
          <p className="mt-4 text-brand-400 text-sm font-medium">Lire plus →</p>
        </div>
      </article>
    </Link>
  )
}