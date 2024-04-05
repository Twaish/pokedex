import Stat from "./Stat"
import InfoGroup from "./InfoGroup"

export default function PokemonStats({ stats, weight, height }) {
  return (
    <InfoGroup name={"Stats"}>
      {stats.map(statEntry => {
        const statName = statEntry.stat.name
        const statValue = statEntry.base_stat
        return <Stat key={statName} name={statName} value={statValue} />
      })}
      <Stat name={"Weight"} value={weight} />
      <Stat name={"Height"} value={height} />
    </InfoGroup>
  )
}