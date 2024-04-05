import Stat from "./Stat"
import InfoGroup from "./InfoGroup"

export default function PokemonAbilities({ abilities }) {
  const addedAbilities = []
  return (
    <InfoGroup name={"Abilities"}>
      {abilities.map(abilityEntry => {
        const abilityName = abilityEntry.ability.name
        if (addedAbilities.indexOf(abilityName) !== -1) return null 
        addedAbilities.push(abilityName)
        return <Stat key={abilityName} name={abilityName} />
      })}
    </InfoGroup>
  )
}