# Musique Pour Tous 🎶

![App Preview](https://imgix.cosmicjs.com/368f70d0-4e26-11f1-9690-df5854985cf2-autopilot-photo-1501386761578-eac5c94b800a-1778606145621.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A participatory music sharing platform connecting artists and music lovers, built with Next.js and powered by [Cosmic](https://www.cosmicjs.com).

## Features

- 🎤 Artist profiles with bios, genres, and locations
- 🎵 Track catalog with cover art and artist connections
- 📰 News/blog section for community updates
- 🌐 French-language interface
- 📱 Fully responsive modern design
- ⚡ Server-side rendering with Next.js 16

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a035ff5b4bc78a77bbd86fd&clone_repository=6a0360e0b4bc78a77bbd8746)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for: Musique pour tous !"

### Code Generation Prompt

> "Musique pour tous !"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Cosmic CMS SDK
- Imgix for image optimization

## Getting Started

### Prerequisites
- Bun installed
- Cosmic account with bucket configured

### Installation

```bash
bun install
bun run dev
```

## Cosmic SDK Examples

```typescript
// Fetch all artists
const { objects: artists } = await cosmic.objects
  .find({ type: 'artists' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Fetch tracks with artist data
const { objects: tracks } = await cosmic.objects
  .find({ type: 'tracks' })
  .depth(1)
```

## Cosmic CMS Integration

The app uses three content types: `artists`, `tracks`, and `posts`. Tracks reference artists via object relationships.

## Deployment

Deploy easily to Vercel or Netlify with the required environment variables.

<!-- README_END -->