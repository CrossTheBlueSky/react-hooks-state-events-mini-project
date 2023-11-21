import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS)


  function filterHandler(category){
    setTasks(TASKS.filter((task)=>{
    
      return task.category === category || category === "All"
    }))

    
  }

  function deleteHandler(removed){

    setTasks(tasks.filter((e)=>{return e.text !== removed.text}))

  }

  function onTaskFormSubmit(task){
    setTasks([...tasks, task])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onFilter={filterHandler} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={tasks} onDelete={deleteHandler}/>
    </div>
  );
}

export default App;
