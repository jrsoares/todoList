import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./NewTaskForm.module.css";
import { IoIosAddCircleOutline } from "react-icons/io";

interface PropsNewTodo {
  addTodo: AddTodo;
}

export function NewTaskForm({ addTodo }: PropsNewTodo) {
  const [description, setDescription] = useState("");

  const handleInputTask = (event: ChangeEvent<HTMLInputElement>) => {
    const inputTask = event.target.value;
    setDescription(inputTask);
  };

  const handleSubmitAdd = (event: FormEvent) => {
    event.preventDefault();
    addTodo(description);
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmitAdd}>
      <div className={styles.FormWrapper}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Adicone uma nova tarefa"
          onChange={handleInputTask}
          value={description}
        />
        <button type="submit">
          Criar <IoIosAddCircleOutline size="16px" fontWeight="bold" />
        </button>
      </div>
    </form>
  );
}
