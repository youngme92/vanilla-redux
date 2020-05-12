const Plus = document.getElementById("plus");
const Minus = document.getElementById("minus");
const number = document.querySelector('span');

let count = 0;
 
number.innerHTML = count;

const handleCount = () => {
  number.innerHTML = count;
}



const handlePlus = () =>{
  count++;
  handleCount();
}
const handleMinus = () => {
  count--;
  handleCount();
}

Plus.addEventListener('click', handlePlus);
Minus.addEventListener('click', handleMinus);


