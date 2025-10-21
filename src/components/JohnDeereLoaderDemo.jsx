import React, { useState } from 'react'
import { 
  JohnDeereLoader, 
  JohnDeerePageLoader, 
  JohnDeereSectionLoader, 
  JohnDeereButtonLoader,
  JohnDeereLoaderSizes,
  JohnDeereLoaderVariants 
} from './ui/john-deere-loader'

const JohnDeereLoaderDemo = () => {
  const [loading, setLoading] = useState(false)

  const handleLoading = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 3000)
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-jdgreen mb-4">
            John Deere Loader System
          </h1>
          <p className="text-muted-foreground text-lg">
            Επαγγελματικός, μοντέρνος loader με iOS 18 style και John Deere branding
          </p>
        </div>

        {/* Size Variants */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Μεγέθη Loader</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {Object.entries(JohnDeereLoaderSizes).map(([name, size]) => (
              <div key={name} className="flex flex-col items-center space-y-2 p-4 border rounded-lg bg-card">
                <JohnDeereLoader size={size} variant="default" />
                <span className="text-sm text-muted-foreground capitalize">{name}</span>
                <code className="text-xs bg-muted px-2 py-1 rounded">{size}</code>
              </div>
            ))}
          </div>
        </section>

        {/* Color Variants */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Χρώματα Loader</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {Object.entries(JohnDeereLoaderVariants).map(([name, variant]) => (
              <div key={name} className="flex flex-col items-center space-y-2 p-4 border rounded-lg bg-card">
                <JohnDeereLoader size="lg" variant={variant} />
                <span className="text-sm text-muted-foreground capitalize">{name}</span>
                <code className="text-xs bg-muted px-2 py-1 rounded">{variant}</code>
              </div>
            ))}
          </div>
        </section>

        {/* Page Loader Examples */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Page Loader Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4 bg-card">
              <h3 className="text-lg font-medium mb-4">Full Page Loader (με Branding)</h3>
              <div className="h-48 border rounded-lg overflow-hidden">
                <JohnDeerePageLoader 
                  size="xl" 
                  label="Loading page..." 
                  showBranding={true}
                />
              </div>
            </div>
            <div className="border rounded-lg p-4 bg-card">
              <h3 className="text-lg font-medium mb-4">Page Loader (χωρίς Branding)</h3>
              <div className="h-48 border rounded-lg overflow-hidden">
                <JohnDeerePageLoader 
                  size="lg" 
                  label="Loading section..." 
                  showBranding={false}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section Loader Examples */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Section Loader Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4 bg-card">
              <h3 className="text-lg font-medium mb-4">Content Section</h3>
              <JohnDeereSectionLoader 
                size="lg" 
                label="Loading content..." 
              />
            </div>
            <div className="border rounded-lg p-4 bg-card">
              <h3 className="text-lg font-medium mb-4">Data Section</h3>
              <JohnDeereSectionLoader 
                size="md" 
                label="Loading data..." 
                variant="primary"
              />
            </div>
          </div>
        </section>

        {/* Interactive Examples */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Interactive Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4 bg-card">
              <h3 className="text-lg font-medium mb-4">Button με Loader</h3>
              <div className="space-y-4">
                <button
                  onClick={handleLoading}
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-jdgreen text-white rounded-md hover:bg-jdgreen/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {loading && <JohnDeereButtonLoader size="sm" variant="white" />}
                  <span>{loading ? 'Αποθήκευση...' : 'Αποθήκευση'}</span>
                </button>
                
                <button
                  onClick={handleLoading}
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-jdyellow text-foreground rounded-md hover:bg-jdyellow/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {loading && <JohnDeereButtonLoader size="sm" variant="default" />}
                  <span>{loading ? 'Επεξεργασία...' : 'Επεξεργασία'}</span>
                </button>
              </div>
            </div>
            
            <div className="border rounded-lg p-4 bg-card">
              <h3 className="text-lg font-medium mb-4">Inline Loaders</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <JohnDeereButtonLoader size="sm" />
                  <span className="text-sm">Μικρός inline loader</span>
                </div>
                <div className="flex items-center gap-2">
                  <JohnDeereButtonLoader size="md" />
                  <span className="text-sm">Μεσαίος inline loader</span>
                </div>
                <div className="flex items-center gap-2">
                  <JohnDeereButtonLoader size="lg" />
                  <span className="text-sm">Μεγάλος inline loader</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Branding Showcase */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">John Deere Branding</h2>
          <div className="border rounded-lg p-8 bg-gradient-to-br from-jdgreen/5 to-jdyellow/5">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-jdgreen rounded-full flex items-center justify-center mr-4">
                  <div className="w-6 h-6 bg-white rounded-full" />
                </div>
                <h3 className="text-3xl font-bold text-jdgreen">John Deere</h3>
              </div>
              <p className="text-muted-foreground">
                Excellence in Agriculture & Construction
              </p>
              <JohnDeereLoader size="2xl" variant="default" showText={true} text="Φόρτωση..." />
            </div>
          </div>
        </section>

        {/* Technical Features */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Τεχνικά Χαρακτηριστικά</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4 bg-card">
              <h3 className="text-lg font-medium mb-4">iOS 18 Style Features</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✅ Smooth cubic-bezier animations</li>
                <li>✅ Multi-layer tractor wheel design</li>
                <li>✅ Subtle pulse and bounce effects</li>
                <li>✅ Professional color gradients</li>
                <li>✅ Hardware-accelerated transforms</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4 bg-card">
              <h3 className="text-lg font-medium mb-4">Accessibility Features</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✅ Screen reader support</li>
                <li>✅ Reduced motion respect</li>
                <li>✅ High contrast mode</li>
                <li>✅ Focus management</li>
                <li>✅ Greek language support</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default JohnDeereLoaderDemo
