import { clsx } from "clsx"
import { Slot } from "@radix-ui/react-slot"
import { ReactNode } from "react"

export interface ButtonProps {
  asChild?: boolean
  children: ReactNode
}

export function Button({ asChild = false, children }: ButtonProps) {
  const Component = asChild ? Slot : "button"

  return (
    <Slot>
      <Component
        className={clsx(
          "py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white"
        )}
      >
        {children}
      </Component>
    </Slot>
  )
}
