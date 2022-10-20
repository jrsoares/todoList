import styles from './Tasks.module.css';
import { RiDeleteBin6Line } from 'react-icons/ri';

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
      <div className={styles.listTasks}>
        <div className={styles.tasks}>
          <input className={styles.taskCheck} type="checkbox" name="" id="" />
          <p className={styles.taskDescription}>
            Integer urna interdum massa libero auctor neque turpis turpis
            semper. Duis vel sed fames integer.
          </p>
          <a className={styles.taskDelete} href="#">
            <RiDeleteBin6Line />
          </a>
        </div>
      </div>
      <div className={styles.listTasks}>
        <div className={styles.tasks}>
          <input className={styles.taskCheck} type="checkbox" name="" id="" />
          <p className={styles.taskDescriptionDone}>
            Integer urna interdum massa libero auctor neque turpis turpis
            semper. Duis vel sed fames integer.
          </p>
          <a className={styles.taskDelete} href="#">
            <RiDeleteBin6Line />
          </a>
        </div>
      </div>
    </div>
  );
}
