import styles from './Tasks.module.css';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { v4 as uuidv4 } from 'uuid';

const tasks = [
  {
    id: uuidv4(),
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  },
  {
    id: uuidv4(),
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  },
  {
    id: uuidv4(),
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  },
  {
    id: uuidv4(),
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  },
  {
    id: uuidv4(),
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  },
  {
    id: uuidv4(),
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  },
];

const deleteTask = () => {};

export function Tasks() {
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
              <a className={styles.taskDelete} href="#">
                <RiDeleteBin6Line />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
