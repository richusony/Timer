import Timer from './components/Timer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="bg-gray-700 rounded-3xl shadow-2xl p-12">
        <h1 className="text-2xl font-bold mb-8 text-gray-200 text-center">Time Remaining Today</h1>
        <Timer />
      </div>
    </main>
  )
}

