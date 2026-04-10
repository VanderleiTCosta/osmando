import * as React from "react"

export function useComposition<T extends HTMLElement>({
  onKeyDown,
  onCompositionStart,
  onCompositionEnd,
}: {
  onKeyDown?: React.KeyboardEventHandler<T>
  onCompositionStart?: React.CompositionEventHandler<T>
  onCompositionEnd?: React.CompositionEventHandler<T>
} = {}) {
  const isComposing = React.useRef(false)

  const handleCompositionStart = React.useCallback(
    (e: React.CompositionEvent<T>) => {
      isComposing.current = true
      onCompositionStart?.(e)
    },
    [onCompositionStart]
  )

  const handleCompositionEnd = React.useCallback(
    (e: React.CompositionEvent<T>) => {
      isComposing.current = false
      onCompositionEnd?.(e)
    },
    [onCompositionEnd]
  )

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<T>) => {
      // Repassa o estado de composição para o evento nativo
      // para que possa ser lido pelo componente Input que o consome
      if (isComposing.current) {
        ;(e.nativeEvent as any).isComposing = true
      }
      onKeyDown?.(e)
    },
    [onKeyDown]
  )

  return {
    onCompositionStart: handleCompositionStart,
    onCompositionEnd: handleCompositionEnd,
    onKeyDown: handleKeyDown,
  }
}