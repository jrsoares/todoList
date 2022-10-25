import { useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import "./global.css";
import { v4 as uuidv4 } from "uuid";
import { TaskListItems } from "./components/TaskListItems";

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

  return (
    <>
      <Header />
      <Tasks todos={tasks} toogleTodo={toogleTodo} />
    </>
  );
}
export default App;
