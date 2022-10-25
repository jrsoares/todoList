import styles from "./Tasks.module.css";
import { ChangeEvent, FormEvent, useState } from "react";
import { TaskListItems } from "./TaskListItems";
import { NewTaskForm } from "./NewTaskForm";

interface PropsTasks {
  todos: Todo[];
  toogleTodo: ToogleTodo;
  addTodo: AddTodo;
  deleteTodo: DeleteTodo;
}

export function Tasks({ todos, toogleTodo, addTodo, deleteTodo }: PropsTasks) {
  const CounterCompleted = todos.filter((todo) => {
    return todo.complete !== false;
  });

  return (
    <>
      <NewTaskForm addTodo={addTodo} />
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <p className={styles.taskCount}>
            Tarefas criadas <small>{todos.length}</small>
          </p>
          <p className={styles.taskDone}>
            Tarefas concluídas{" "}
            <small>
              {CounterCompleted.length} de {todos.length}
            </small>
          </p>
        </div>
        {todos.map((task) => (
          <TaskListItems
            key={task.id}
            todo={task}
            toogleTodo={toogleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </>
  );
}
