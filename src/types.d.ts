interface Todo {
  id: string;
  complete: boolean;
  description: string;
}

type ToogleTodo = (selectTodo: Todo) => void;
type AddTodo = (description: string) => void;
