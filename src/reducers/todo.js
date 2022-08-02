const todoReducer = (state, action) => {
    switch (action.type) {
        case"ADD":return[...state,action.payload];
        case"DELETE" :
        return state.filter((item)=>{
            if(item.id!=action.payload){
                return state;
            }
        });
        default:return state;
    }
}

export { todoReducer }