import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const johnDeereLoaderVariants = cva(
  "relative inline-flex items-center justify-center",
  {
    variants: {
      size: {
        sm: "h-6 w-6",
        md: "h-8 w-8",
        lg: "h-12 w-12",
        xl: "h-16 w-16",
        "2xl": "h-20 w-20",
      },
      variant: {
        default: "text-jdgreen",
        primary: "text-primary",
        secondary: "text-secondary",
        white: "text-white",
        muted: "text-muted-foreground",
      }
    },
    defaultVariants: {
      size: "lg",
      variant: "default",
    },
  }
)

// John Deere Tractor-inspired Loader
const JohnDeereLoader = React.forwardRef(({
  className,
  size,
  variant,
  label = "Loading...",
  showText = false,
  text = "Φόρτωση...",
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col items-center justify-center space-y-3",
        className
      )}
      role="status"
      aria-label={label}
      {...props}
    >
      {/* Loading Text */}
      {showText && (
        <div className="text-center">
          <p className="text-sm font-medium text-current animate-pulse-soft">
            {text}
          </p>
          <div className="flex items-center justify-center space-x-1 mt-2">
            <div className="w-1 h-1 bg-current rounded-full animate-bounce-soft"
              style={{ animationDelay: '0s' }} />
            <div className="w-1 h-1 bg-current rounded-full animate-bounce-soft"
              style={{ animationDelay: '0.1s' }} />
            <div className="w-1 h-1 bg-current rounded-full animate-bounce-soft"
              style={{ animationDelay: '0.2s' }} />
          </div>
        </div>
      )}

      <span className="sr-only">{label}</span>
    </div>
  )
})

JohnDeereLoader.displayName = "JohnDeereLoader"

// Full Page Loader with John Deere Branding
const JohnDeerePageLoader = React.forwardRef(({
  className,
  size = "2xl",
  variant = "default",
  label = "Loading page...",
  showBranding = true,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "min-h-screen w-full flex flex-col items-center justify-center",
        "bg-gradient-to-br from-background to-muted/20",
        className
      )}
      {...props}
    >
      {/* Main Loader */}
      <JohnDeereLoader
        size={size}
        variant={variant}
        label={label}
        showText={true}
        text="Loading..."
      />

      {/* Loading Progress Indicator */}
      <div className="mt-8 w-48 h-1 bg-muted rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-jdgreen to-jdyellow rounded-full animate-pulse-soft"
          style={{ width: '60%' }} />
      </div>
    </div>
  )
})

JohnDeerePageLoader.displayName = "JohnDeerePageLoader"

// Section Loader for Content Areas
const JohnDeereSectionLoader = React.forwardRef(({
  className,
  size = "lg",
  variant = "default",
  label = "Loading section...",
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col items-center justify-center min-h-[200px] py-8",
        "bg-card/50 backdrop-blur-sm rounded-lg border",
        className
      )}
      {...props}
    >
      <JohnDeereLoader
        size={size}
        variant={variant}
        label={label}
        showText={true}
        text="Φόρτωση περιεχομένου..."
      />
    </div>
  )
})

JohnDeereSectionLoader.displayName = "JohnDeereSectionLoader"

// Button Loader for Interactive Elements
const JohnDeereButtonLoader = React.forwardRef(({
  className,
  size = "sm",
  variant = "default",
  label = "Loading...",
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center",
        className
      )}
      {...props}
    >
      <JohnDeereLoader
        size={size}
        variant={variant}
        label={label}
      />
    </div>
  )
})

JohnDeereButtonLoader.displayName = "JohnDeereButtonLoader"

// Predefined size variants for common use cases
const JohnDeereLoaderSizes = {
  button: "sm",
  inline: "md",
  section: "lg",
  page: "xl",
  hero: "2xl"
}

// Predefined variants for different contexts
const JohnDeereLoaderVariants = {
  primary: "primary",
  secondary: "secondary",
  muted: "muted",
  white: "white",
  default: "default"
}

export {
  JohnDeereLoader,
  JohnDeerePageLoader,
  JohnDeereSectionLoader,
  JohnDeereButtonLoader,
  JohnDeereLoaderSizes,
  JohnDeereLoaderVariants,
  johnDeereLoaderVariants
}
