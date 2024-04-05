import { toast } from "sonner"

import styles from "./index.module.css"
import PokemonAbilities from "./PokemonAbilities"
import PokemonRecord from "./PokemonRecord"
import PokemonStats from "./PokemonStats"
import PokemonTypes from "./PokemonTypes"
import { useContext } from "react"
import { PokemonDisplayContext } from "../../context/PokemonDisplayContext"

export const typeColors = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
}

export default function PokemonCard({ pokemon }) {
  const { showDots, showIndex, showName, showImage, showShiny } = useContext(PokemonDisplayContext)
  const { id, name, sprites: { front_default, front_shiny }, types, stats, weight, height, abilities } = pokemon
  const image = showShiny ? front_shiny : front_default

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
      {showImage ? (
        <img className={styles.image} alt="" src={image ?? `${process.env.PUBLIC_URL}/missing.png`} />
      ) : ""}
      <div>
        <PokemonRecord 
          id={showIndex ? id : ""} 
          name={showName ? name : ""} 
        />
      </div>
      {showDots ? (
        <div className="flex gap-1 absolute top-0 right-0 m-2">
          {types.map(typeEntry => {
            const typeName = typeEntry.type.name
            const typeColor = typeColors[typeName]
            return <div key={typeName} className="p-1 rounded-2xl" style={{ backgroundColor: typeColor }}></div>
          })}
        </div>
      ) : ""}
    </div>
  )
}