import React from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [newTask, setNewTask] = React.useState({text : "", category : "Code"})

  const spec = categories.filter((cat)=> cat !== "All")

  function changeHandler(e){
    setNewTask({...newTask, category:e.target.value})
  }

  function textHandler(e){
    setNewTask({...newTask, text: e.target.value})
  }

  function submitHandler(e){
    e.preventDefault()
    onTaskFormSubmit(newTask)
  }

  const allOptions = spec.map((cat)=>{
    return <option key={cat} value={cat}>{cat}</option>
  })

  return (
    <form onSubmit={submitHandler} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" value={newTask.text} onChange={textHandler}/>
      </label>
      <label>
        Category
        <select value={newTask.category} onChange={changeHandler} name="category">
          {allOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
