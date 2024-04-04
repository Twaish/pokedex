import { createContext, useState } from "react";

const PAGE_KEY = "POKEDEX_LAST_PAGE"
export const PaginationContext = createContext()

export function PaginationProvider({ children }) {
  const [page, setPageState] = useState(parseInt(localStorage.getItem(PAGE_KEY)) ?? 1)
  const [pageCount, setPageCount] = useState(1)
  function setPage(newPage) {
    try {
      newPage = parseInt(newPage)
      localStorage.setItem(PAGE_KEY, newPage)
      setPageState(Math.min(Math.max(newPage, 1), pageCount))
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