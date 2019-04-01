const postReducer = (state =[], action) => {
    console.log("reduce", action);
    switch(action.type) {
        case 'ADD_NewEmp':
            return state.concat([action.data]);
        default: 
            return state;
    }
}
export default postReducer;