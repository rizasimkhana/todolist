import { useState } from "react"

function TodoInput(props){
  const {addnewtodos,todoValue,setTodosValue}=props
    return(
        <>
      <header>
        <input  value={todoValue} placeholder="Enter todo list" onChange={
          (e)=>{
            setTodosValue(e.target.value)
          }
        } />
        {/* using addnewtodos function */}
        <button id="update" onClick={
          ()=>(
            addnewtodos(todoValue),
            setTodosValue(''),
            document.getElementById("update").textContent="add"
          )
       
        }>Add</button>
        <button
        onClick={
          ()=>{
           setTodosValue('')
          }
        }>reset</button>
       </header>
        </>
    )
}
export default TodoInput