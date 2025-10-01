import React from 'react'

type Alignment = 'left' | 'center' | 'right'

type Props = {
  tagline?: string
  title: React.ReactNode
  description?: React.ReactNode
  alignment?: Alignment
  // Accept any Tailwind text color class or a token like 'text-hero-cta'
  taglineColor?: string
}

// SectionTitle - Reusable section heading
export default function SectionTitle({
  tagline,
  title,
  description,
  alignment = 'center',
  taglineColor = 'text-hero-cta',
}: Props) {
  const alignmentClasses: Record<Alignment, string> = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
  }

  // Convert a text color class like 'text-indigo-600' -> 'bg-indigo-600' safely
  const toBg = (textClass: string) => {
    return textClass.replace(/^text-/, 'bg-')
  }

  return (
    <div className={`flex flex-col w-full max-w-3xl mx-auto ${alignmentClasses[alignment]}`}>
      {tagline && (
        <span className={`text-sm font-bold tracking-widest uppercase ${taglineColor}`}>
          {tagline}
        </span>
      )}

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-card-text sm:text-4xl md:text-5xl">
        {title}
      </h2>

      <div className={`mt-4 h-1 w-20 rounded-full bg-gray-200 ${alignment === 'center' ? 'mx-auto' : ''} ${alignment === 'right' ? 'ml-auto' : ''}`}>
        <div className={`h-1 w-10 rounded-full ${toBg(taglineColor)}`}></div>
      </div>

      {description && (
        <p className="mt-6 text-lg leading-8 text-card-text/80">
          {description}
        </p>
      )}
    </div>
  )
}
