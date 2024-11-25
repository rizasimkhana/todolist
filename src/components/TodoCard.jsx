function TodoCard(props){
    const {children,deletetodos,index,edittodos}=props
    return(
        <>
        <li className="todoItem">
            {children}
            <div className="actionsContainer">
         <button
         onClick={()=>{
            edittodos(index)
         }}
         >
         <i className="fa-regular fa-pen-to-square"></i>
         </button>
    <button>
    <i className="fa-regular fa-trash-can"
            onClick={
                ()=>{
                    deletetodos(index)
                }
            }
            ></i>
    </button>
           </div>
           
        </li>
        </>
    )
}
export default TodoCard