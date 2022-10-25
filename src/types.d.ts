interface Todo {
  id: string;
  complete: boolean;
  description: string;
}

type ToogleTodo = (selectTodo: Todo) => void;
