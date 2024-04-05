import Type from "./TypeChip"

export default function PokemonTypes({ types }) {
  return (
    <div className="flex absolute top-0 right-0 m-4">
      {types.map(typeEntry => {
        const type = typeEntry.type.name
        return <Type key={type} name={type} />
      })}
    </div>
  )
}