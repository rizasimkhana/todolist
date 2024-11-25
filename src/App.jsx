import { useState,useEffect} from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App(){
     // intialize array for todo list
 const [todos,settodos]=useState([
        // 'go to study',
        // 'learn language',
        // 'learn coding'
    ])
    // setting values for editing
    const[todoValue,setTodosValue]=useState('')
    // add todos
    function addnewtodos(newtodos){
        const newtodo=[...todos,newtodos]
        persistData(newtodo)
        settodos(newtodo)
    }
    //holding the data
    function persistData(newList){
        localStorage.setItem('todos',JSON.stringify({ todos : newList}))
    }
    //delete todos
    function deletetodos(index){
     const newtodo= todos.filter((todo,todoIndex)=>{
        return todoIndex !== index
     })
     persistData(newtodo)
     settodos(newtodo)
    }
    //edit todos
    function edittodos(index){
     const update=document.getElementById('update')
     update.textContent="update"
      const editedvalue=todos[index]
      setTodosValue(editedvalue)
      deletetodos(index)
    }
    //having values after refresh 
    useEffect(()=>{
        if(!localStorage){
            return
        }
        // setting todos at local storage
        let localtodos=localStorage.getItem('todos')
        if(!localtodos){
            return
         }
         localtodos=JSON.parse(localtodos).todos
         settodos(localtodos)
    },[])
    return(
        <>
       <main>
        <TodoInput todoValue={todoValue} setTodosValue={setTodosValue} addnewtodos={addnewtodos}/>
        <TodoList edittodos={edittodos} deletetodos={deletetodos} todos={todos}/>
       </main>
        </>
    )
}
export default App