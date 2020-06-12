import {createStore} from 'redux';
import { createElement } from 'react';

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = text => {
  return {
    type: ADD_TODO,   
    text
  }
}

const deleteToDo = id => {
  return {
    type: DELETE_TODO,
    id
  }
}

const paintingToDo = () => {
  const toDos = store.getState();
  ul.innerText = "";
  toDos.forEach(toDo => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    li.innerText = toDo.text;
    li.id = toDo.id;
    btn.innerText = "DEL";
    btn.addEventListener('click', dispatchDeleteToDo);
    li.appendChild(btn);
    ul.appendChild(li)
  })

}
const reducer = (state =[], action) => {
  switch (action.type){
    case ADD_TODO :
      return [{text: action.text, id: Date.now() }, ...state ];
    case DELETE_TODO :
      return state.filter(toDo => toDo.id !== action.id);
    default:
      return state; 
    }
}
// redux 설정
const store = createStore(reducer);
// subscribe 설정
store.subscribe(()=> console.log(store.getState()));
store.subscribe(paintingToDo);
const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
}

const dispatchAddToDo = text => {
  store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = e => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
}

form.addEventListener("submit", onSubmit)