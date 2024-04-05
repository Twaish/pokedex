import styles from "./index.module.css"
import { typeColors } from "."

export default function Type({ name }) {
  const color = typeColors[name]
  return color ? (
    <div 
      style={{ "--type-color": color }}
      className={styles.type}
    >{name}</div>
  ) : <></>
}