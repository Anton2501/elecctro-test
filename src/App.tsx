import React from "react";
import logo from "./logo.svg";

import Checkbox from "./ui/checkbox";
import Label from "./ui/label";
import Input from "./ui/input";
import Button from "./ui/button";
import CreateTodo from "./components/create-todo";
import TodoItem from "./components/todo-item";
import TodosList from "./components/todos-list";

import { Provider } from './todo-context';

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
