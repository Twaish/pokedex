import styles from "./index.module.css"

export default function Grid({ children, cols }) {

  const style = {
    "--size": cols
  }
  return (
    <div className={styles.grid} style={style}>
      {children}
    </div>
  )
}