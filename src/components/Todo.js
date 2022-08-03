import React from "react";
const Todo = ({ dispatch, state }) => {
  return (
    <div className="todo">
      <div className="todo-title">
        {
          <ul>
            {state.map((item) => {
              return (
                <li id={item.id} key={item.id}>
                  {item.taskValue}
                  <button
                    onClick={() =>
                      dispatch({ type: "DELETE", payload:{id:item.id,taskValue:item.taskValue} })
                    }
                    className="todo-delete"
                  >
                    DELETE
                  </button>
                </li>
              );
            })}
          </ul>
        }
      </div>
    </div>
  );
};

export { Todo };
