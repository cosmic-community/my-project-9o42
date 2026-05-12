import { createBucketClient } from '@cosmicjs/sdk'
import type { Artist, Track, Post } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return ''
  if (typeof field === 'string') return field
  if (typeof field === 'number' || typeof field === 'boolean') return String(field)
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value)
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key)
  }
  return ''
}

export async function getArtists(): Promise<Artist[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'artists' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return response.objects as Artist[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch artists')
  }
}

export async function getArtist(slug: string): Promise<Artist | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'artists', slug })
      .depth(1)
    return response.object as Artist
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null
    throw new Error('Failed to fetch artist')
  }
}

export async function getTracks(): Promise<Track[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'tracks' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    const tracks = response.objects as Track[]
    return tracks.sort((a, b) => {
      const dateA = new Date(a.metadata?.release_date || a.created_at).getTime()
      const dateB = new Date(b.metadata?.release_date || b.created_at).getTime()
      return dateB - dateA
    })
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch tracks')
  }
}

export async function getTrack(slug: string): Promise<Track | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'tracks', slug })
      .depth(1)
    return response.object as Track
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null
    throw new Error('Failed to fetch track')
  }
}

export async function getTracksByArtist(artistId: string): Promise<Track[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'tracks', 'metadata.artist': artistId })
      .depth(1)
    return response.objects as Track[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch tracks for artist')
  }
}

export async function getPosts(): Promise<Post[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'posts' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    const posts = response.objects as Post[]
    return posts.sort((a, b) => {
      const dateA = new Date(a.metadata?.published_date || a.created_at).getTime()
      const dateB = new Date(b.metadata?.published_date || b.created_at).getTime()
      return dateB - dateA
    })
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch posts')
  }
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'posts', slug })
      .depth(1)
    return response.object as Post
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null
    throw new Error('Failed to fetch post')
  }
}