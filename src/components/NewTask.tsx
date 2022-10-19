import styles from './NewTask.module.css';
import { IoIosAddCircleOutline } from 'react-icons/io';

export function NewTask() {
  return (
    <form>
      <div className={styles.wrapper}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Adicone uma nova tarefa"
        />
        <button type="submit">
          Criar <IoIosAddCircleOutline size="16px" fontWeight="bold" />
        </button>
      </div>
    </form>
  );
}
