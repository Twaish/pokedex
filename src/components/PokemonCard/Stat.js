import styles from "./index.module.css"

const abbreviations = {
  "hp": "HP",
  "attack": "Atk",
  "defense": "Def",
  "special-attack": "Sp.Atk",
  "special-defense": "Sp.Def",
  "speed": "Speed"
}

export default function Stat({ name, value }) {
  return (
    <div className={styles.stat}>
      {abbreviations[name] ?? name}{value ? `: ${value}` : ""}
    </div>
  )
}