const operators = ['+', "-", "*", "/", "%", "=", "clear"];
let mathExpres = [];

const updateDisplay = () => {
  const display = document.getElementById('calc-display');
  const str = mathExpres.join('');
  display.innerText = '';
  display.innerText = str;
}

const getValues = (keyValue) => {
  if(keyValue === "clear"){
    mathExpres = [];
  }
  else mathExpres.push(keyValue);
  updateDisplay();
}

const calcResult = () => {
  const display = document.getElementById('calc-display');
  display.innerText = '';
  const res = eval(mathExpres.join(''))
  display.innerText = res;
  mathExpres=[res];
}

const drawKeys = () => {
  const keysContainer = document.querySelector('#calc-digits');
  const operatorsContainer = document.getElementById('calc-operators');
  const fragment = document.createDocumentFragment();
  const fragment1 = document.createDocumentFragment();

  for (let i = 1; i < 10; i++) {
    const btn = document.createElement('button');
    btn.innerText = i;
    btn.onclick = () => {
      getValues(i)
    }
    fragment.append(btn);
  }
  const btn = document.createElement('button');
  btn.innerText = 0;
  btn.className = "big-button"
  btn.onclick = () => {
    getValues(0)
  }
  fragment.append(btn);

  keysContainer.append(fragment);

  operators.forEach(operator => {
    const btn = document.createElement('button');
    btn.innerText = operator;
    btn.onclick = () => {
      operator === "=" ? calcResult() : getValues(operator);
    }
    fragment1.append(btn);
  })
  operatorsContainer.append(fragment1);
};

drawKeys();
