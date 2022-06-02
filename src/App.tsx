import CreateTodo from "./components/create-todo";
import TodosList from "./components/todos-list";
import { Provider } from "./todo-context";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Provider>
        <CreateTodo />
        <TodosList />
      </Provider>
    </div>
  );
}

export default App;
