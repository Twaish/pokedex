import { useState } from "react"
import styles from "./index.module.css"

export default function Switch({ className, onChange, switched, label }) {
  const [isSwitched, setIsSwitched] = useState(switched)
  function toggle() {
    onChange?.(!isSwitched)
    setIsSwitched(!isSwitched)
  }

  return (
    <span className={`flex items-center gap-2 cursor-pointer text-sm ${className}`} onClick={toggle}>
      {label ? <div>{label}</div> : ""}
      <div className={`${styles.switch} ${isSwitched ? styles.active : ""}`} onClick={toggle}>
        <div className={styles.handle}></div>
      </div>
    </span>
  )
}