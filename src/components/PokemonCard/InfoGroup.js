import styles from "./index.module.css"

export default function InfoGroup({ children, name }) {
  return (
    <>
      <hr />
      <p>{name}</p>
      <div className={styles.group}>
        {children}
      </div>
    </>
  )
}