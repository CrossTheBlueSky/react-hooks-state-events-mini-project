import React from "react";

function CategoryFilter({categories, onFilter}) {

  const [current, setCurrent] = React.useState()

  function clickHandler(e){
    if(current){
      current.className = ""
    }
    e.target.className = "selected"
    onFilter(e.target.name)
    setCurrent(e.target)

  }

  const allButtons = categories.map((cat)=>{
    return <button className= "" key={cat} name={cat} type="btn" onClick={clickHandler}>{cat}</button>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {allButtons}
    </div>
  );
}

export default CategoryFilter;
