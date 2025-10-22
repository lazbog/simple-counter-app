import Counter from '@/components/Counter'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Simple Counter App
        </h1>
        <Counter />
      </div>
    </main>
  )
}