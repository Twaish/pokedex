import styles from "./index.module.css"
import NavigationBar from "../components/NavigationBar"

export default function Layout({ children }) {

  return (
    <div className={styles.layout}>
      <NavigationBar />
      {children}
    </div>
  )
}