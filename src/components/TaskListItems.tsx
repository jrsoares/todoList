import styles from "./TaskListItems.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";

interface PropsListTodo {
  todo: Todo;
  toogleTodo: ToogleTodo;
  deleteTodo: DeleteTodo;
}
export function TaskListItems({ todo, toogleTodo, deleteTodo }: PropsListTodo) {
  return (
    <div className={styles.listTasks}>
      <div className={styles.tasks}>
        <input
          className={styles.taskCheck}
          defaultChecked={todo.complete}
          type="checkbox"
          onClick={() => {
            toogleTodo(todo);
          }}
        />
        <p
          style={{ textDecoration: todo.complete ? "line-through" : undefined }}
          className={styles.taskDescription}
        >
          {todo.description}
        </p>
        <a
          className={styles.taskDelete}
          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          <RiDeleteBin6Line />
        </a>
      </div>
    </div>
  );
}
