// app/actualites/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPost, getMetafieldValue } from '@/lib/cosmic'

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) notFound()

  const title = getMetafieldValue(post.metadata?.title) || post.title
  const excerpt = getMetafieldValue(post.metadata?.excerpt)
  const content = getMetafieldValue(post.metadata?.content)
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
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/actualites" className="text-orange-300 hover:text-orange-200 text-sm mb-6 inline-block">
        ← Toutes les actualités
      </Link>

      <header className="mb-10">
        {formattedDate && (
          <p className="text-brand-300 text-sm font-medium uppercase tracking-widest mb-4">
            {formattedDate}
          </p>
        )}
        <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-6 leading-tight">
          {title}
        </h1>
        {excerpt && (
          <p className="text-xl text-white/70 leading-relaxed">{excerpt}</p>
        )}
      </header>

      {imageUrl && (
        <div className="rounded-3xl overflow-hidden mb-10 vinyl-shadow">
          <img
            src={`${imageUrl}?w=1600&h=900&fit=crop&auto=format,compress`}
            alt={title}
            width={1200}
            height={675}
            className="w-full h-auto"
          />
        </div>
      )}

      {content && (
        <div
          className="prose prose-lg prose-invert max-w-none text-white/80 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}

      <div className="mt-16 pt-8 border-t border-white/10 text-center">
        <p className="text-white/60 mb-4">Vous avez apprécié cet article ?</p>
        <a
          href="https://www.facebook.com/profile.php?id=61580692265651"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-brand-500 to-pink-500 text-white font-semibold hover:opacity-90 transition-opacity"
        >
          Rejoignez la communauté →
        </a>
      </div>
    </article>
  )
}