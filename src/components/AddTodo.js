import React,{useState} from "react";


const AddTodo = ({ dispatch }) => {

    const [inputVal,setInputVal] =useState("");
    const [DateId,setId] = useState("");

    function submitHandler (e) {
        e.preventDefault();  
        setId( new Date().getTime().toString()) ;
        dispatch({type:"ADD",payload:{id:DateId,taskValue:inputVal}}); 
    }

    function inputFun(e) {
        setInputVal(e.target.value);
    }

    return (
        <>
        <form onSubmit={submitHandler}>
            <input type="textarea" required onChange={inputFun}/>
            <input type="submit"/>
        </form>
        </>
    )
}

export { AddTodo }