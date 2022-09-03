import React from "react";
const Todo = ({ dispatch, state }) => {
  return (

            {state.map((item) => {
              return (
                <div className="todo"> 
                
                  <div id={item.id} key={item.id} className="todo-title">
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
  );
};

export { Todo };
