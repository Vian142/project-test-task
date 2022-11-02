import React from "react";
import Schedule from "../Schedule/Index";
import { Todo } from "../Todo";

import styles from "./Application.css";

export function Application() {
  return (
    <div className={styles.App}>
      <div className={styles.Container}>
        <div className={styles.Block}>
          <Schedule />
        </div>

        {/* <div className={styles.Block}>
          <Todo />
        </div> */}
      </div>
    </div>
  );
}
