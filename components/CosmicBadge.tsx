'use client'

import { useState, useEffect } from 'react'

export default function CosmicBadge({ bucketSlug }: { bucketSlug: string }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const isDismissed = localStorage.getItem('cosmic-badge-dismissed')
    if (!isDismissed) {
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    localStorage.setItem('cosmic-badge-dismissed', 'true')
  }

  if (!isVisible) return null

  return (
    <a
      href={`https://www.cosmicjs.com?utm_source=bucket_${bucketSlug}&utm_medium=referral&utm_campaign=app_badge&utm_content=built_with_cosmic`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-white text-sm font-medium no-underline transition-colors duration-200"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 50,
        backgroundColor: '#11171A',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        padding: '12px 16px',
        width: '180px',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1a2326')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#11171A')}
    >
      <button
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          handleDismiss()
        }}
        style={{
          position: 'absolute',
          top: '-8px',
          right: '-8px',
          width: '24px',
          height: '24px',
          backgroundColor: '#6b7280',
          color: 'white',
          borderRadius: '9999px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '14px',
          fontWeight: 'bold',
          border: 'none',
          cursor: 'pointer',
        }}
        aria-label="Dismiss badge"
      >
        ×
      </button>
      <img
        src="https://cdn.cosmicjs.com/b67de7d0-c810-11ed-b01d-23d7b265c299-logo508x500.svg"
        alt="Cosmic Logo"
        style={{ width: '20px', height: '20px' }}
      />
      Built with Cosmic
    </a>
  )
}