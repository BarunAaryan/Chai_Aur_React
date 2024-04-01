import {createSlice, nanoid} from '@reduxjs/toolkit';
//nanoid is used to generate unique id 
const initialState = {
    todos: [{id: 1, text: "Hello World"}]
}

//slice is bigger version of reducer
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        //properties and function
        addTodo: (state, action)=>{
            const todo= {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action)=>{
            state.todos= state.todos.filter((todo)=>
            todo.id !== action.payload)
//id should not match with , if id matches do not add
//filter returns true values only
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
              todo.completed = !todo.completed; // Toggle completed status
            }
          },
    }
})
//we need to export todoSlice in two parts
//exporting the functionalities
//because we will be accessing  state through these and updating the functionalities individually

export const {addTodo, removeTodo, toggleTodo} = todoSlice.actions
//awaring the store about the reducers
//whatever reducer is registered inside the store the store will update from that

export default todoSlice.reducer

