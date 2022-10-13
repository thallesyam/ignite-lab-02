import { clsx } from "clsx"
import { Slot } from "@radix-ui/react-slot"
import { ReactNode } from "react"

export interface TextProps {
  size?: "sm" | "md" | "lg"
  asChild?: boolean
  children: ReactNode
}

export function Text({ size = "md", asChild = false, children }: TextProps) {
  const Component = asChild ? Slot : "span"

  return (
    <Slot>
      <Component
        className={clsx("text-gray-100 font-sans", {
          "text-xs": size === "sm",
          "text-sm": size === "md",
          "text-md": size === "lg",
        })}
      >
        {children}
      </Component>
    </Slot>
  )
}
