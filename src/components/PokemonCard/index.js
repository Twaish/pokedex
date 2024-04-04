import styles from "./index.module.css"
import { toast } from "sonner"
import Stat from "./Stat"
import Type from "./TypeAtom"
import InfoGroup from "./InfoGroup"

export default function PokemonCard({ pokemon }) {
  const { id, name, sprites, types, stats, weight, height, abilities } = pokemon
  const image = sprites.front_default
  
  const addedAbilities = []
  function onClick() {
    toast.custom((t) => (
      <div className={styles.toast}>
        <div className={styles.index}>#{id}</div>
        <div className={styles.name}>{name}</div>
        <div className={styles.types}>
          {types.map(typeEntry => {
            const type = typeEntry.type.name
            return <Type key={name+type} name={type} />
          })}
        </div>
        <InfoGroup name={"Stats"}>
          {stats.map(statEntry => {
            const statName = statEntry.stat.name
            const statValue = statEntry.base_stat
            return <Stat key={name+statName} name={statName} value={statValue} />
          })}
          <Stat name={"Weight"} value={weight} />
          <Stat name={"Height"} value={height} />
        </InfoGroup>
        <InfoGroup name={"Abilities"}>
          {abilities.map(abilityEntry => {
            const abilityName = abilityEntry.ability.name
            if (addedAbilities.indexOf(abilityName) === -1) {
              addedAbilities.push(abilityName)
              return <Stat key={name+abilityName} name={abilityName} />
            }

          })}
        </InfoGroup>
      </div>
    ), { duration: 2000 });
  }

  return (
    <div className={styles.card} onClick={onClick}>
      <img className={styles.image} src={image ?? "pokedex/missing.png"} />
      <div>
        <div className={styles.index}>#{id}</div>
        <div className={styles.name}>{name}</div>
      </div>
    </div>
  )
}