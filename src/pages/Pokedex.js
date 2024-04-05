import { useContext, useEffect, useState } from "react"
import { Toaster } from "sonner"
import axios from "axios"

import { PaginationContext } from "../context/PaginationContext"
import PaginationBar from "../components/PaginationBar"
import PokemonCard from "../components/PokemonCard"
import Grid from "../components/Grid"
import { PokemonDisplayProvider } from "../context/PokemonDisplayContext"
import DisplaySettingsButton from "../components/DisplaySettingsButton"

const pageSize = 20
// const savedPokemon = {}

export default function Pokedex() {
  const { page, setPageCount } = useContext(PaginationContext)
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(false)
  const abortController = new AbortController()

  useEffect(() => {
    return () => abortController.abort()
  }, [])

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`, {
        params: {
          limit: pageSize,
          offset: pageSize * (page - 1)
        },
        signal: abortController.signal
      })
      const { results, count } = response.data
      setPageCount(Math.ceil(count/pageSize))

      const promises = results.map(async (result) => {
        // const _pokemon = savedPokemon[result.name]
        // if (_pokemon) {
        //   return _pokemon
        // }
        const pokemon = await axios.get(result.url, {
          signal: abortController.signal
        })
        // savedPokemon[pokemon.data.name] = pokemon.data
        return pokemon.data
      })
      const pokemon = await Promise.all(promises)
      setPokemon(pokemon)
    } catch(err) {
      if (axios.isCancel(err)) return
      console.error(err)
    }
    setLoading(false)
  }
  useEffect(() => {
    fetchData()
    return () => {
      abortController.abort()
    }
  }, [page])

  return (
    <PokemonDisplayProvider>
      <div className="flex flex-col gap-2">
        <DisplaySettingsButton />
        <Grid cols={4}>
          {loading ? (
            <div>Loading...</div>
          ) : pokemon?.map(pokemon => 
            <PokemonCard key={pokemon.name} pokemon={pokemon}/>
          )}
        </Grid>
        <PaginationBar />
        <Toaster position="bottom-right" />
      </div>
    </PokemonDisplayProvider>
  )
}