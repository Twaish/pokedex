import { useContext, useEffect, useState } from "react"
import { Toaster } from "sonner"
import axios from "axios"

import { PaginationContext } from "../contexts/PaginationContext"
import PaginationBar from "../components/PaginationBar"
import PokemonCard from "../components/PokemonCard"
import Grid from "../components/Grid"

const pageSize = 20

export default function Home() {
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
        const pokemon = await axios.get(result.url, {
          signal: abortController.signal
        })
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
    <div className="flex flex-col gap-2">
      <Grid cols={4}>
        {loading ? (
          <div>Loading...</div>
        ) : pokemon?.map(pokemon => 
          <PokemonCard 
            key={pokemon.name} 
            pokemon={pokemon} 
            abortSignal={abortController.signal} 
          />
        )}
      </Grid>
      <PaginationBar />
      <Toaster position="bottom-right" />
    </div>
  )
}