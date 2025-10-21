import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const spinnerVariants = cva(
  "inline-block rounded-full border-solid",
  {
    variants: {
      size: {
        sm: "h-4 w-4 border-2",
        md: "h-6 w-6 border-2", 
        lg: "h-8 w-8 border-2",
        xl: "h-12 w-12 border-3",
        "2xl": "h-16 w-16 border-4",
      },
      variant: {
        default: "border-jdgreen/30 border-t-jdgreen border-r-jdgreen/60",
        primary: "border-primary/30 border-t-primary border-r-primary/60",
        secondary: "border-secondary/30 border-t-secondary border-r-secondary/60",
        muted: "border-muted-foreground/30 border-t-muted-foreground border-r-muted-foreground/60",
        white: "border-white/30 border-t-white border-r-white/60",
        ghost: "border-foreground/30 border-t-foreground border-r-foreground/60",
      },
      speed: {
        slow: "animate-spin-slow",
        normal: "animate-spin-smooth",
        fast: "animate-spin-fast",
      }
    },
    defaultVariants: {
      size: "md",
      variant: "default",
      speed: "normal",
    },
  }
)

const Spinner = React.forwardRef(({ 
  className, 
  size, 
  variant, 
  speed,
  label = "Loading...",
  ...props 
}, ref) => {
  return (
    <div 
      ref={ref}
      className={cn(
        "flex items-center justify-center",
        className
      )}
      role="status"
      aria-label={label}
      {...props}
    >
      <div 
        className={cn(
          spinnerVariants({ size, variant, speed }),
          // iOS 18 inspired smooth easing
          "spinner-transition",
          // Subtle shadow for depth
          "shadow-sm",
          // High contrast mode support
          "contrast-more:border-2 contrast-more:border-t-4",
          // Enhanced styling
          "spinner-enhanced"
        )}
      />
      <span className="sr-only">{label}</span>
    </div>
  )
})

Spinner.displayName = "Spinner"

// Predefined size variants for common use cases
const SpinnerSizes = {
  button: "sm",
  inline: "md", 
  section: "lg",
  page: "xl",
  hero: "2xl"
}

// Predefined variants for different contexts
const SpinnerVariants = {
  primary: "primary",
  secondary: "secondary", 
  muted: "muted",
  white: "white",
  ghost: "ghost",
  default: "default"
}

// Container component for full-page loading
const SpinnerContainer = React.forwardRef(({ 
  className,
  children,
  size = "lg",
  variant = "default",
  label = "Loading...",
  fullPage = false,
  ...props 
}, ref) => {
  return (
    <div 
      ref={ref}
      className={cn(
        "flex flex-col items-center justify-center",
        fullPage ? "min-h-screen w-full" : "min-h-[200px] py-8",
        className
      )}
      {...props}
    >
      <Spinner size={size} variant={variant} label={label} />
      {children && (
        <div className="mt-4 text-sm text-muted-foreground">
          {children}
        </div>
      )}
    </div>
  )
})

SpinnerContainer.displayName = "SpinnerContainer"

// Inline spinner for buttons and small components
const SpinnerInline = React.forwardRef(({ 
  className,
  size = "sm",
  variant = "default",
  label = "Loading...",
  ...props 
}, ref) => {
  return (
    <Spinner 
      ref={ref}
      className={cn("inline-flex", className)}
      size={size}
      variant={variant}
      label={label}
      {...props}
    />
  )
})

SpinnerInline.displayName = "SpinnerInline"

// Button with integrated spinner
const SpinnerButton = React.forwardRef(({ 
  className,
  children,
  loading = false,
  loadingText,
  size = "sm",
  variant = "default",
  ...props 
}, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md",
        "spinner-transition",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "spinner-button",
        className
      )}
      disabled={loading}
      {...props}
    >
      {loading && (
        <SpinnerInline 
          size={size} 
          variant={variant}
          label="Loading..."
        />
      )}
      <span className={cn(loading && "opacity-75")}>
        {loading ? (loadingText || "Loading...") : children}
      </span>
    </button>
  )
})

SpinnerButton.displayName = "SpinnerButton"

export { 
  Spinner, 
  SpinnerContainer, 
  SpinnerInline, 
  SpinnerButton,
  SpinnerSizes,
  SpinnerVariants,
  spinnerVariants 
}
