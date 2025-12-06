import { useState, useEffect, useRef } from 'react'
import './Eye.css'

interface EyeProps {
  mouseX: number
  mouseY: number
}

const Eye = ({ mouseX, mouseY }: EyeProps) => {
  const eyeRef = useRef<HTMLDivElement>(null)
  const [pupilPosition, setPupilPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!eyeRef.current) return

    const eye = eyeRef.current
    const rect = eye.getBoundingClientRect()
    const eyeCenterX = rect.left + rect.width / 2
    const eyeCenterY = rect.top + rect.height / 2

    const deltaX = mouseX - eyeCenterX
    const deltaY = mouseY - eyeCenterY
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
    const maxDistance = 15 // Maximum distance the pupil can move from center

    let x = 0
    let y = 0

    if (distance > maxDistance) {
      const angle = Math.atan2(deltaY, deltaX)
      x = Math.cos(angle) * maxDistance
      y = Math.sin(angle) * maxDistance
    } else {
      x = deltaX
      y = deltaY
    }

    setPupilPosition({ x, y })
  }, [mouseX, mouseY])

  return (
    <div ref={eyeRef} className="eye">
      <div 
        className="pupil" 
        style={{
          transform: `translate(${pupilPosition.x}px, ${pupilPosition.y}px)`
        }}
      />
    </div>
  )
}

export default Eye

