import React,{useState} from "react";


const AddTodo = ({ dispatch }) => {

    const [inputVal,setInputVal] =useState("");
    const [DateId,setId] = useState("");

    function submitHandler (e) {
        e.preventDefault();  
        setId( new Date().getTime().toString()) ;
        dispatch({type:"ADD",payload:{id:DateId,taskValue:inputVal}}); 
        document.querySelector('input').value="";
    }

    function inputFun(e) {
        setInputVal(e.target.value);
    }

    return (
        <>
        <form id="todo-form" onSubmit={submitHandler}>
            <input id="todo-input" type="textarea" required onChange={inputFun} value={inputVal}/>
            <button type="submit">ADD</button>
        </form>
        </>
    )
}

export { AddTodo }