import { useNavigate } from "react-router-dom"
import styles from "./index.module.css"

export default function NavigationBar() {
  const navigate = useNavigate()
  return (
    <div className="flex justify-center gap-4 p-4 mb-4">
      {/* <div className={styles.item} onClick={() => navigate("/")} >HOME</div> */}
      <div className={styles.item} onClick={() => navigate("/")} >POKEDEX</div>
      <div className={styles.item} onClick={() => navigate("/about")}>ABOUT</div>
    </div>
  )
}