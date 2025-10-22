'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

export default function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Counter
        </h2>
        <div className="text-6xl font-bold text-blue-600">
          {count}
        </div>
      </div>
      
      <div className="flex gap-2 justify-center">
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
          aria-label="Decrement counter"
        >
          -
        </button>
        
        <button
          onClick={reset}
          className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium"
          aria-label="Reset counter"
        >
          Reset
        </button>
        
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
          aria-label="Increment counter"
        >
          +
        </button>
      </div>
      
      <div className="mt-6 text-sm text-gray-500">
        Click the buttons to change the counter value
      </div>
    </div>
  )
}