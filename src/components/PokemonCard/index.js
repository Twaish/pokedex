import { toast } from "sonner"

import styles from "./index.module.css"
import PokemonAbilities from "./PokemonAbilities"
import PokemonRecord from "./PokemonRecord"
import PokemonStats from "./PokemonStats"
import PokemonTypes from "./PokemonTypes"

export default function PokemonCard({ pokemon }) {
  const { id, name, sprites: { front_default: image }, types, stats, weight, height, abilities } = pokemon
  
  function onClick() {
    toast.custom((t) => (
      <div className={styles.toast}>
        <PokemonRecord id={id} name={name} />
        <PokemonTypes types={types} />
        <PokemonStats stats={stats} weight={weight} height={height} />
        <PokemonAbilities abilities={abilities} />
      </div>
    ), { duration: 2000 });
  }

  return (
    <div className={styles.card} onClick={onClick}>
      <img className={styles.image} alt="" src={image ?? "pokedex/missing.png"} />
      <div>
        <PokemonRecord id={id} name={name} />
      </div>
    </div>
  )
}