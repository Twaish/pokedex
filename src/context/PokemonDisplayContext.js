import { createContext, useState } from "react";
import storage from "../utils/Storage";

export const PokemonDisplayContext = createContext()

function useToggle(key, initialValue) {
  const [value, setValue] = useState(storage.getBool(key, initialValue))
  function toggleValue() {
    const newValue = !value
    storage.setBool(key, newValue)
    setValue(newValue)
  }
  return [value, toggleValue]
}

const SHOW_INDEX_KEY = "POKEDEX_SHOW_INDEX"
const SHOW_NAME_KEY = "POKEDEX_SHOW_NAME"
const SHOW_IMAGE_KEY = "POKEDEX_SHOW_IMAGE"
const SHOW_DOTS_KEY = "POKEDEX_SHOW_TYPE_DOTS"
const SHOW_SHINY_KEY = "POKEDEX_SHOW_AS_SHINY"

export function PokemonDisplayProvider({ children }) {
  const [showIndex, toggleIndex] = useToggle(SHOW_INDEX_KEY, true)
  const [showName, toggleName] = useToggle(SHOW_NAME_KEY, true)
  const [showImage, toggleImage] = useToggle(SHOW_IMAGE_KEY, true)
  const [showDots, toggleDots] = useToggle(SHOW_DOTS_KEY, true)
  const [showShiny, toggleShiny] = useToggle(SHOW_SHINY_KEY, false)

  return (
    <PokemonDisplayContext.Provider value={{
      showIndex, toggleIndex,
      showName, toggleName,
      showImage, toggleImage,
      showDots, toggleDots, 
      showShiny, toggleShiny
    }}>
      {children}
    </PokemonDisplayContext.Provider>
  )
}