import { createContext, useState } from "react";
import storage from "../utils/Storage";

const PAGE_KEY = "POKEDEX_LAST_PAGE"
export const PaginationContext = createContext()

export function PaginationProvider({ children }) {
  const [page, setPageState] = useState(storage.getInt(PAGE_KEY, 1))
  const [pageCount, setPageCount] = useState(1)
  function setPage(newPage) {
    try {
      newPage = parseInt(newPage)
      newPage = Math.min(Math.max(newPage, 1), pageCount)
      storage.setInt(PAGE_KEY, newPage)
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