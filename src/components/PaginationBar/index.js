import { useContext, useEffect, useRef } from "react"
import { PaginationContext } from "../../contexts/PaginationContext"
import Button from "../Button"
import styles from "./index.module.css"

export default function PaginationBar() {
  const { page, setPage, pageCount } = useContext(PaginationContext)
  const inputRef = useRef(null)

  const previousPage = () => setPage(page - 1)
  const nextPage = () => setPage(page + 1)
  const firstPage = () => setPage(1)
  const lastPage = () => setPage(pageCount)
  const onChange = () => setPage(inputRef.current.value)

  const onKeyDown = (e) => {
    const LEFT = e.key === "ArrowLeft"
    const RIGHT = e.key === "ArrowRight"

    if (LEFT) {
      previousPage()
    }
    if (RIGHT) {
      nextPage()
    }
  }
  useEffect(() => {
    window.addEventListener("keydown", onKeyDown)
    return () => {
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [onKeyDown])

  return (
    <div className="flex justify-between align-center">
      <div className={`${styles.group} ${page === 1 ? styles.disabled : ""}`}>
        <Button onClick={firstPage}>
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11 17-5-5 5-5"></path><path d="m18 17-5-5 5-5"></path></svg>
        </Button>
        <Button onClick={previousPage}>
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
        </Button>
      </div>
      <div className={`flex gap-1 ${styles.wrapper}`}>
        <input
          className={styles.input}
          ref={inputRef} 
          type="number"
          onChange={onChange} 
          min={1} 
          max={pageCount} 
          value={page} 
        />/{pageCount}
      </div>
      <div className={`${styles.group} ${page === pageCount ? styles.disabled : ""}`}>
        <Button onClick={nextPage}>
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
        </Button>      
        <Button onClick={lastPage}>
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m13 17 5-5-5-5"></path><path d="m6 17 5-5-5-5"></path></svg>
        </Button>
      </div>
    </div>
  )
}