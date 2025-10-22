'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'

export default function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)

  return (
    <div className="flex flex-col items-center space-y-4 rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
        Counter
      </h2>
      <p className="text-6xl font-bold text-blue-600 dark:text-blue-400">
        {count}
      </p>
      <div className="flex space-x-4">
        <Button onClick={decrement} variant="secondary">
          Decrement
        </Button>
        <Button onClick={reset} variant="outline">
          Reset
        </Button>
        <Button onClick={increment}>
          Increment
        </Button>
      </div>
    </div>
  )
}