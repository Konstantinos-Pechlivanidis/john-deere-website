import React, { useState } from 'react'
import { Spinner, SpinnerContainer, SpinnerButton } from './ui/spinner'

const SpinnerTest = () => {
  const [loading, setLoading] = useState(false)

  const handleTest = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 3000)
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          Spinner Test
        </h1>
        
        {/* Test different sizes */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Size Test</h2>
          <div className="flex items-center justify-center gap-4">
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
            <Spinner size="xl" />
            <Spinner size="2xl" />
          </div>
        </div>

        {/* Test different variants */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Variant Test</h2>
          <div className="flex items-center justify-center gap-4">
            <Spinner variant="default" />
            <Spinner variant="primary" />
            <Spinner variant="secondary" />
            <Spinner variant="muted" />
          </div>
        </div>

        {/* Test different speeds */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Speed Test</h2>
          <div className="flex items-center justify-center gap-4">
            <Spinner speed="slow" />
            <Spinner speed="normal" />
            <Spinner speed="fast" />
          </div>
        </div>

        {/* Test button */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Button Test</h2>
          <SpinnerButton 
            loading={loading}
            loadingText="Processing..."
            onClick={handleTest}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 rounded-md"
          >
            Test Loading
          </SpinnerButton>
        </div>

        {/* Test container */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Container Test</h2>
          <div className="h-32 border rounded-lg">
            <SpinnerContainer size="lg" label="Loading section...">
              <p className="text-sm text-muted-foreground">This is a section spinner</p>
            </SpinnerContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpinnerTest
