import { useState, useEffect } from 'react'
import Eye from './Eye'
import './EyeCard.css'

const EyeCard = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="eye-card-container">
      <div className="eye-card">
        <div className="card-content">
          <div className="color-swatch">
            <div className="eyes-container">
              <Eye 
                mouseX={mousePosition.x} 
                mouseY={mousePosition.y}
              />
              <Eye 
                mouseX={mousePosition.x} 
                mouseY={mousePosition.y}
              />
            </div>
          </div>
          <div className="card-body">
            <div className="color-code">#0263AD</div>
            <h2 className="card-title">Dogleg Cookie Monster</h2>
            <p className="card-description">
              C is for cookie, that's good enough for Dogleg!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EyeCard

