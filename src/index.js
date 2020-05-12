import {createStore} from 'redux';
const Plus = document.getElementById("plus");
const Minus = document.getElementById("minus");
const number = document.querySelector('span');

const countModifier = (count = 0, action) => {
  console.log(count, action)
  if(action.type === "plus"){
    return count + 1;
  } else if(action.type === 'minus'){
    return count - 1;
  } else {
    return count;
  }
}

const countStore = createStore(countModifier);

countStore.dispatch({ type : "plus"});
countStore.dispatch({ type : "plus"});
countStore.dispatch({ type : "plus"});
countStore.dispatch({ type : "minus"});
countStore.dispatch({ type : "minus"});
