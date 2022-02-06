import { useState, useEffect } from 'react'

function useClock(): string {
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return time
}

export default useClock
