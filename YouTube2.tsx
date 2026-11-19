import styles from "./styles.module.css"

export default function YouTube2({ slots = [] }: { slots?: string[] }) {
  return (
      <article className={styles["article"]}>
        <div className={styles["iframe"]} />
      </article>
  )
}
