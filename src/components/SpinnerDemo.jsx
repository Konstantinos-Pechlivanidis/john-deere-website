import React, { useState } from 'react'
import { 
  Spinner, 
  SpinnerContainer, 
  SpinnerInline, 
  SpinnerButton,
  SpinnerSizes,
  SpinnerVariants 
} from './ui/spinner'

const SpinnerDemo = () => {
  const [loading, setLoading] = useState(false)

  const handleLoading = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 3000)
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Spinner Component Demo
          </h1>
          <p className="text-muted-foreground text-lg">
            iOS 18 inspired loading spinners with Tailwind + Shadcn design system
          </p>
        </div>

        {/* Size Variants */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Size Variants</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {Object.entries(SpinnerSizes).map(([name, size]) => (
              <div key={name} className="flex flex-col items-center space-y-2 p-4 border rounded-lg">
                <Spinner size={size} variant="default" />
                <span className="text-sm text-muted-foreground capitalize">{name}</span>
                <code className="text-xs bg-muted px-2 py-1 rounded">{size}</code>
              </div>
            ))}
          </div>
        </section>

        {/* Color Variants */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Color Variants</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {Object.entries(SpinnerVariants).map(([name, variant]) => (
              <div key={name} className="flex flex-col items-center space-y-2 p-4 border rounded-lg">
                <Spinner size="lg" variant={variant} />
                <span className="text-sm text-muted-foreground capitalize">{name}</span>
                <code className="text-xs bg-muted px-2 py-1 rounded">{variant}</code>
              </div>
            ))}
          </div>
        </section>

        {/* Speed Variants */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Speed Variants</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['slow', 'normal', 'fast'].map((speed) => (
              <div key={speed} className="flex flex-col items-center space-y-2 p-4 border rounded-lg">
                <Spinner size="lg" variant="default" speed={speed} />
                <span className="text-sm text-muted-foreground capitalize">{speed}</span>
                <code className="text-xs bg-muted px-2 py-1 rounded">{speed}</code>
              </div>
            ))}
          </div>
        </section>

        {/* Container Examples */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Container Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-4">Page Loading</h3>
              <SpinnerContainer size="xl" label="Loading page...">
                <p className="text-sm text-muted-foreground">This is a page-level spinner</p>
              </SpinnerContainer>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-4">Section Loading</h3>
              <SpinnerContainer size="lg" label="Loading section...">
                <p className="text-sm text-muted-foreground">This is a section-level spinner</p>
              </SpinnerContainer>
            </div>
          </div>
        </section>

        {/* Interactive Examples */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Interactive Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-4">Button with Spinner</h3>
              <div className="space-y-4">
                <SpinnerButton 
                  loading={loading}
                  loadingText="Processing..."
                  onClick={handleLoading}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Click to Load
                </SpinnerButton>
                <SpinnerButton 
                  loading={loading}
                  variant="secondary"
                  onClick={handleLoading}
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/80"
                >
                  Secondary Button
                </SpinnerButton>
              </div>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-4">Inline Spinners</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <SpinnerInline size="sm" />
                  <span className="text-sm">Small inline spinner</span>
                </div>
                <div className="flex items-center gap-2">
                  <SpinnerInline size="md" />
                  <span className="text-sm">Medium inline spinner</span>
                </div>
                <div className="flex items-center gap-2">
                  <SpinnerInline size="lg" />
                  <span className="text-sm">Large inline spinner</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Responsive Test */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Responsive Test</h2>
          <div className="border rounded-lg p-4">
            <p className="text-sm text-muted-foreground mb-4">
              Resize your browser window to see how spinners adapt to different screen sizes
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {['sm', 'md', 'lg', 'xl'].map((size) => (
                <div key={size} className="flex flex-col items-center space-y-2 p-4 bg-muted/50 rounded-lg">
                  <Spinner size={size} variant="default" />
                  <span className="text-xs text-muted-foreground">{size}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Accessibility Test */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Accessibility Features</h2>
          <div className="border rounded-lg p-4">
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✅ <code>role="status"</code> attribute for screen readers</li>
              <li>✅ <code>aria-label</code> for descriptive loading states</li>
              <li>✅ <code>sr-only</code> text for screen reader users</li>
              <li>✅ Respects <code>prefers-reduced-motion</code> settings</li>
              <li>✅ High contrast mode support</li>
              <li>✅ Focus management for interactive elements</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}

export default SpinnerDemo
