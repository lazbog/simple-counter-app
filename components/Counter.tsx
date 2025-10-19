'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'

export default function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-8">
      <div className="bg-card rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8 text-foreground">
          Simple Counter
        </h1>
        
        <div className="text-6xl font-bold text-center mb-8 text-primary">
          {count}
        </div>
        
        <div className="flex gap-4 justify-center mb-6">
          <Button
            onClick={decrement}
            variant="outline"
            size="lg"
            className="text-xl"
          >
            -
          </Button>
          
          <Button
            onClick={increment}
            variant="default"
            size="lg"
            className="text-xl"
          >
            +
          </Button>
        </div>
        
        <div className="flex justify-center">
          <Button
            onClick={reset}
            variant="secondary"
            size="sm"
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  )
}