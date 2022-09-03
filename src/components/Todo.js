import React from "react";
const Todo = ({ dispatch, state }) => {

  return (

          <>
            {state.map((item,id) => {
              
              return (
                <div className="todo" key={id+item}> 
                
                  <div id={item.id} className="todo-title">
                  {item}
                  <button
                    onClick={() =>
                      dispatch({ type: "DELETE",payload:{title:item.title,id:item.id} })
                    }
                    className="todo-delete"
                  >
                    DELETE
                  </button>
                </div>
                
                </div>
              );
            })}
            </>
  );
};

export { Todo };
