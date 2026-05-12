import PostCard from '@/components/PostCard'
import { getPosts } from '@/lib/cosmic'

export default async function PostsPage() {
  const posts = await getPosts()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-12 text-center">
        <p className="text-orange-300 font-semibold uppercase tracking-widest text-sm mb-3">
          📰 Le fil d'actualités
        </p>
        <h1 className="text-5xl md:text-6xl font-display font-extrabold text-white mb-4">
          <span className="gradient-text">Actualités</span>
        </h1>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">
          Les dernières nouvelles de la communauté Musique Pour Tous.
        </p>
      </header>

      {posts.length === 0 ? (
        <div className="text-center py-20 text-white/40">
          <p className="text-2xl mb-2">📰</p>
          <p>Aucun article pour le moment.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}