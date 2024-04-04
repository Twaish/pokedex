import styles from "./home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img className={styles.logo} src="pokedex/logo.png" />
        <div className="">Pokédex</div>
      </div>
    </div>
  )
}