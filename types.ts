export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
  thumbnail?: string;
}

export interface Artist extends CosmicObject {
  type: 'artists';
  metadata: {
    name?: string;
    bio?: string;
    profile_image?: {
      url: string;
      imgix_url: string;
    };
    genre?: string;
    location?: string;
    website?: string;
  };
}

export interface Track extends CosmicObject {
  type: 'tracks';
  metadata: {
    title?: string;
    description?: string;
    cover_art?: {
      url: string;
      imgix_url: string;
    };
    artist?: Artist;
    genre?: string;
    duration?: string;
    release_date?: string;
  };
}

export interface Post extends CosmicObject {
  type: 'posts';
  metadata: {
    title?: string;
    excerpt?: string;
    content?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    published_date?: string;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}