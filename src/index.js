import {createStore} from 'redux';
const Plus = document.getElementById("plus");
const Minus = document.getElementById("minus");
const number = document.querySelector('span');

// Plus&Minus define
const Pluscase = "plus";
const Minuscase = "minus";

const countModifier = (count = 0, action) => {
  switch(action.type){
    case Pluscase:
      return count + 1;
    case Minuscase:
      return count - 1;
    default:
      return count;  
  }
}

const countStore = createStore(countModifier);

const onChange = () => number.innerHTML = countStore.getState();

countStore.subscribe(onChange);

Plus.addEventListener('click', () => countStore.dispatch({ type : Pluscase}));
Minus.addEventListener('click', () =>countStore.dispatch({ type : Minuscase}));

