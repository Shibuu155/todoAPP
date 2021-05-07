import React from "react";

function TodoList(props) {
  return (
    <>
      <div className="todo_style">
        <i
          className="fa fa-times"
          onClick={() => {
            props.onSelect(props.id);
          }}
        />
        <li>{props.item}</li>
      </div>
    </>
  );
}

export default TodoList;
