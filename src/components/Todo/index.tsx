import React from "react";
import Task from "../Task";
import { TaskInput } from "../TaskInput";

import { TaskItem } from "./Todo.types";
import styles from "./Todo.css";

// Задача:
// 1. Написать логику хранения и обработки списка задач list - Добавление/Удаление
// 2. Вывести список добавленных задач. Использовать компонент Task в src/components/Task

export function Todo() {
  const list: Array<TaskItem> = [];

  return (
    <div className={styles.App}>
      <div className={styles.Header}>Мои задачи</div>

      <div className={styles.TaskInputWrapper}>
        <TaskInput />
      </div>
    </div>
  );
}
