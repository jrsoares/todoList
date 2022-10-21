import styles from './Tasks.module.css';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useState } from 'react';

interface Task {
  id: string;
  description: string;
}

interface TaskProps {
  data: Task[];
}

export function Tasks({ data }: TaskProps) {
  const [tasks, setTasks] = useState(data);

  function deleteTask(TaskId: string) {
    const tasksDeleted = tasks.filter((task) => {
      return task.id !== TaskId;
    });
    setTasks(tasksDeleted);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <p className={styles.taskCount}>
          Tarefas criadas <small>5</small>
        </p>
        <p className={styles.taskDone}>
          Tarefas concluídas <small>2 de 5</small>
        </p>
      </div>

      {tasks.map((task) => {
        return (
          <div className={styles.listTasks} key={task.id}>
            <div className={styles.tasks}>
              <input
                className={styles.taskCheck}
                type="checkbox"
                name=""
                id=""
              />
              <p className={styles.taskDescription}>{task.description}</p>
              <a
                className={styles.taskDelete}
                onClick={() => {
                  deleteTask(task.id);
                }}
              >
                <RiDeleteBin6Line />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
