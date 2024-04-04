import { createContext, useState } from "react";

const PAGE_KEY = "POKEDEX_LAST_PAGE"
export const PaginationContext = createContext()

export function PaginationProvider({ children }) {
  const storedPage = parseInt(localStorage.getItem(PAGE_KEY))
  const [page, setPageState] = useState(isNaN(storedPage) ? 1 : storedPage)
  const [pageCount, setPageCount] = useState(1)
  function setPage(newPage) {
    try {
      newPage = parseInt(newPage)
      newPage = Math.min(Math.max(newPage, 1), pageCount)
      localStorage.setItem(PAGE_KEY, newPage)
      setPageState(newPage)
    } catch(err) {
      console.error(err)
    }
  }
  return (
    <PaginationContext.Provider value={{page, setPage, pageCount, setPageCount}}>
      {children}
    </PaginationContext.Provider>
  )
}