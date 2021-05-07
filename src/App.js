import React, { useState } from "react";
import TodoList from "./TodoList";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setTodo(event.target.value);
  };

  const addTodos = () => {
    if (todo !== "") {
      setItems((oldItems) => {
        return [...oldItems, todo];
      });
      setTodo("");
    } else {
      alert("Add Todo");
    }
  };
  const deleteTodo = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((curEle, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="outer">
        <div className="inner">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a toDo"
            onChange={itemEvent}
            value={todo}
          />
          <button onClick={addTodos}> + </button>
          <ol>
            {items.map((itemVal, index) => {
              return (
                <TodoList
                  key={index}
                  id={index}
                  item={itemVal}
                  onSelect={deleteTodo}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
