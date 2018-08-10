function add(a,b){
  return a + b;
}

function subtract(a,b){
  return a-b
}

function multiply(a,b){
  return a * b
}

function divide(a,b){
  return a / b
}

function inc(n){
  return n++;
}

function dec(n){
  return n--
}

function makeInt(n){
  if(n == NaN){
    return 0
  }
  return Math.parseInt(n,10)
}
function preserveDecimal(n){
  if(n === NaN){
    return 0.0;
  }
  return Math.parseFloat(n)
}
