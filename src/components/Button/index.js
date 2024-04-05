import styles from "./index.module.css"

export default function Button({ children, onClick, hidden }) {

  return (
    <div 
      onClick={onClick}
      className={`${styles.button} ${hidden ? styles.hidden : ""}`}
    >
      {children}
    </div>
  )
}