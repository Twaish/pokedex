import { useNavigate } from "react-router-dom"
import styles from "./index.module.css"

export default function NavigationBar() {
  const navigate = useNavigate()
  return (
    <div className={styles.navigation}>
      {/* <div className={styles.item} onClick={() => navigate("/")} >HOME</div> */}
      <div className={styles.item} onClick={() => navigate("/pokedex")} >POKEDEX</div>
      <div className={styles.item} onClick={() => navigate("/about")}>ABOUT</div>
    </div>
  )
}