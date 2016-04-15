function sum(n1, n2) {
  console.log('\"The sum of ' + n1 + ' and ' + n2 + ' is ' + (n1 + n2) + '.\"');
}

function multiply(n1, n2) {
  console.log('\"The product of ' + n1 + ' and ' + n2 + ' is ' + (n1 * n2) + '.\"');
}

function sumAndMultiply(n1, n2) {
  console.log('\"The sum of ' + n1 + ' and ' + n2 + ' is ' + (n1 + n2) + '.\"');
  console.log('\"The numbers ' + n1 + ' and ' + n2 + ' have a product of ' + (n1 + n2) + '.\"');
}

function sumArray(n) {
  var size = n.length;
  var sum = 0;
  for (var i = 0; i < size; i++) {
    sum += n[i];
  }
  console.log(n.join(" and ") + ' were passed in as an array of number, and ' + sum + ' is their sum.');
}

function multiplyArray(n) {
  var size = n.length;
  var product = 1;
  for (var i = 0; i < size; i++) {
    product *= n[i];
  }
  console.log(n.join(" and ") + ' were passed in as an array of number, and ' + product + ' is their product.');
}
