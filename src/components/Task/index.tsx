import React from "react";
import styles from "./Task.css";

export default function Task({ text }: any) {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Text}>{text}</div>

      <button className={styles.Delete}>Удалить</button>
    </div>
  );
}
