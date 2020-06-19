import {createStore} from "redux";
import {createAction, createReducer, configureStore, createSlice} from "@reduxjs/toolkit";

const toDos = createSlice({
    name: "toDosReducer",
    initialState: [],
    reducers: { 
        add: (state, action) => {
                    state.push({text: action.payload, id: Date.now()})
                },
        remove: (state, action) => state.filter(
                    toDo => toDo.id !== action.payload
                ),
    }
});

// // toDos.reducer, toDos.actions 값을 알기위한 console
// console.log(toDos.reducer)
// console.log(toDos.actions)

const store = configureStore({reducer: toDos.reducer});

export const {add, remove} = toDos.actions;
// 위에 코드는 es6로 표현된 변수
// export const add = toDos.actions.add;
// export const remove = toDos.actions.remove;

export default store;