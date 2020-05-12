import {createStore} from 'redux';
const Plus = document.getElementById("plus");
const Minus = document.getElementById("minus");
const number = document.querySelector('span');

const reducer = (state = 0) => {
  console.log(state);
  return state;
}

const countModify = createStore(reducer);

console.log(countModify);