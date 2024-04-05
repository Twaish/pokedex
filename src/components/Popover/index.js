import { useEffect, useRef, useState } from "react";
import styles from "./index.module.css"

export default function Popover({ className, children, margin = 5, trigger, side = "bottom", anchor }) {
  const [open, setOpen] = useState(false)
  const position = {x: 0, y: 0}
  const popoverRef = useRef(null)
  let rect
  let triggerRect

  function updatePosition() {
    updateRects()
    const centerX = triggerRect.left + triggerRect.width/2 - rect.width/2
    const centerY = triggerRect.top + triggerRect.height/2 - rect.height/2
    let xOrigin = "center"
    let yOrigin = "center"
    if (side === "top") {
      position.x = centerX
      position.y = triggerRect.top - rect.height - margin
      yOrigin = "bottom"
    } else if (side === "bottom") {
      position.x = centerX
      position.y = triggerRect.bottom + margin
      yOrigin = "top"
    } else if (side === "right") {
      position.x = triggerRect.right + margin
      position.y = centerY
      xOrigin = "left"
    } else if (side === "left") {
      position.x = triggerRect.left - rect.width - margin
      position.y = centerY
      xOrigin = "right"
    }
    
    if (side === "top" || side === "bottom") {
      if (anchor === "left") {
        position.x = triggerRect.left
        xOrigin = "left"
      } else if (anchor === "right") {
        position.x = triggerRect.right - rect.width
        xOrigin = "right"
      }
    } else if (side === "left" || side === "right") {
      if (anchor === "top") {
        position.y = triggerRect.top
        yOrigin = "top"
      } else if (anchor === "bottom") {
        position.y = triggerRect.bottom - rect.height
        yOrigin = "bottom"
      }
    }

    const popover = popoverRef.current
    popover.style.setProperty("--x", position.x + "px")
    popover.style.setProperty("--y", position.y + "px")
    popover.style.setProperty("--x-origin", xOrigin)
    popover.style.setProperty("--y-origin", yOrigin)
  }
  
  function updateRects() {
    rect = popoverRef.current.getBoundingClientRect()
    triggerRect = trigger.current.getBoundingClientRect()
  }

  function onClick(e) {
    if (!trigger?.current) return

    updatePosition()

    const isTriggerChild = trigger.current.contains(e.target)
    const isPopoverChild = popoverRef.current.contains(e.target)

    if (isTriggerChild) {
      setOpen(open => !open)
    } else if (!isPopoverChild){
      setOpen(false)
    }
  }

  useEffect(() => {
    updatePosition()
    window.addEventListener("click", onClick)
    window.addEventListener("resize", updatePosition)
    return () => {
      window.removeEventListener("click", onClick)
      window.removeEventListener("resize", updatePosition)
    }
  }, [])

  return (
    <div 
      ref={popoverRef}
      className={`${className} ${styles.popover} ${open ? styles.active : ""}`
    }>
      {children}
    </div>
  )
}