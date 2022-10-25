import styles from "./NewTaskForm.module.css";
import { IoIosAddCircleOutline } from "react-icons/io";

export function NewTaskForm() {
  return (
    <form>
      <div className={styles.FormWrapper}>
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
