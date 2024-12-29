'use client'

import { useState, useEffect } from 'react'

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999)
      const timeDiff = endOfDay.getTime() - now.getTime()
      
      const hours = Math.floor(timeDiff / (1000 * 60 * 60))
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000)
      
      setTimeLeft({ hours, minutes, seconds })
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-64 h-64 rounded-full bg-gradient-to-b from-gray-300 to-gray-100 shadow-xl border-4 border-gray-200">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 opacity-50"></div>
      <div className="absolute inset-2 rounded-full bg-white shadow-inner"></div>
      <div className="absolute inset-4 rounded-full bg-gradient-to-b from-gray-50 to-gray-200 flex items-center justify-center">
        <div className="text-3xl font-bold text-gray-800 font-mono">
          {timeLeft.hours.toString().padStart(2, '0')}:
          {timeLeft.minutes.toString().padStart(2, '0')}:
          {timeLeft.seconds.toString().padStart(2, '0')}
        </div>
      </div>
      <div className="absolute top-0 left-1/2 w-4 h-4 bg-gray-800 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-gray-800 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
    </div>
  )
}

