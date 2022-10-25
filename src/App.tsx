import { useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import "./global.css";
import { v4 as uuidv4 } from "uuid";
import { NewTaskForm } from "./components/NewTaskForm";

const initialTodos: Todo[] = [
  {
    complete: true,
    id: uuidv4(),
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    complete: false,
    id: uuidv4(),
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    complete: false,
    id: uuidv4(),
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    complete: false,
    id: uuidv4(),
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    complete: false,
    id: uuidv4(),
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    complete: false,
    id: uuidv4(),
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
];

function App() {
  const [tasks, setTasks] = useState(initialTodos);

  const toogleTodo = (selectTodo: Todo) => {
    const newTodoList = tasks.map((task) => {
      if (task === selectTodo) {
        return {
          ...task,
          complete: !task.complete,
        };
      }
      return task;
    });
    setTasks(newTodoList);
  };

  const addTodo: AddTodo = (description: string) => {
    const newTodo = {
      id: uuidv4(),
      complete: false,
      description,
    };
    setTasks([...tasks, newTodo]);
  };

  const deleteTodo: DeleteTodo = (id: string) => {
    const newTodosWichDeleted = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(newTodosWichDeleted);
  };

  return (
    <>
      <Header />
      <Tasks
        todos={tasks}
        toogleTodo={toogleTodo}
        addTodo={addTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
}
export default App;
