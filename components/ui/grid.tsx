import * as React from "react"
import { cn } from "@/lib/utils"

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-4 gap-y-8 md:gap-x-6 lg:gap-x-8",
          className
        )}
        {...props}
      />
    )
  }
)
Grid.displayName = "Grid"
