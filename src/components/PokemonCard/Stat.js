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
    <div className="text-xs p-1">
      {abbreviations[name] ?? name}{(value !== null && value !== undefined) ? `: ${value}` : ""}
    </div>
  )
}