import React from "react";
const Todo = ({ dispatch, state }) => {
  return (
    <div className="todo">
      <div className="todo-title">
        {
          <ul>
            {state.map((item) => {
              return (
                <div id={item.id} key={item.id} className="todo-title">
                  {item.taskValue}
                  <button
                    onClick={() =>
                      dispatch({ type: "DELETE",payload:{title:item.title,id:item.id} })
                    }
                    className="todo-delete"
                  >
                    DELETE
                  </button>
                </div>
              );
            })}
          </ul>
        }
      </div>
    </div>
  );
};

export { Todo };
