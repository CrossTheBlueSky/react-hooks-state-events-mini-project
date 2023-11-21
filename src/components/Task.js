import React from "react";

function Task(props) {


  function deleteHandler(){
    const deleteItem = {
      text : props.text,
      category : props.category
    }
    props.onDelete(deleteItem)
  }

  return (
    <div className="task">
      <div className="label">{props.category}</div>
      <div className="text">{props.text}</div>
      <button className="delete" onClick={deleteHandler}>X</button>
    </div>
  );
}

export default Task;
