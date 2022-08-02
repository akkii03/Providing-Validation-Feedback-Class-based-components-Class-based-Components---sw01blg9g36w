import React from 'react';
const Todo = ({dispatch,state}) => {
    return (
        <ul>  
            {
                state.map((item)=>{
                    return(
                        <li id={item.id} key={item.id}>{item.taskValue}<button onClick={()=>dispatch({type:"DELETE",payload:item.id})}>DELETE</button></li>
                    )
                })
            }
        </ul>
    )
}


export { Todo }

