import styles from "./Tasks.module.css";
import { ChangeEvent, FormEvent, useState } from "react";
import { TaskListItems } from "./TaskListItems";

interface PropsTasks {
  todos: Todo[];
  toogleTodo: ToogleTodo;
}

export function Tasks({ todos, toogleTodo }: PropsTasks) {
  // const [tasks, setTasks] = useState([]);
  // const [task, setTask] = useState({});
  //
  // function handleInputTask(event: ChangeEvent<HTMLInputElement>) {
  //   const inputTask = event.target.value;
  //   setTask(inputTask);
  // }
  //
  // function handleSubmitTask(event: FormEvent) {
  //   event.preventDefault();
  //   // setTasks(prevState => return ([...prevState, task])
  // }

  // function deleteTask(TaskId: string) {
  //   const tasksDeleted = tasks.filter((task) => {
  //     return task.id !== TaskId;
  //   });
  //   setTasks(tasksDeleted);
  // }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <p className={styles.taskCount}>
            Tarefas criadas <small>5</small>
          </p>
          <p className={styles.taskDone}>
            Tarefas concluídas <small>2 de 5</small>
          </p>
        </div>
        {todos.map((task) => (
          <TaskListItems key={task.id} todo={task} toogleTodo={toogleTodo} />
        ))}
      </div>
    </>
  );
}
