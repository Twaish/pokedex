import styles from "./index.module.css"

export default function PokemonRecord({ id, name }) {
  return (
    <>
      <div className={styles.index}>#{id}</div>
      <div className={styles.name}>{name}</div>
    </>
  )
}