function sum(n1, n2) {
  var s = n1 + n2;

  console.log('\"The sum of ' + n1 + ' and ' + n2 + ' is ' + s + '.\"');

  var sumDisplay = document.getElementById('sumText');
  sumDisplay.textContent = '\"The sum of ' + n1 + ' and ' + n2 + ' is ' + s + '.\"';

  return s;
}

function multiply(n1, n2) {
  var product = n1 * n2;

  console.log('\"The product of ' + n1 + ' and ' + n2 + ' is ' + product + '.\"');

  var productDisplay = document.getElementById('productText');
  productDisplay.textContent = '\"The product of ' + n1 + ' and ' + n2 + ' is ' + product + '.\"';

  return product;
}

function sumAndMultiply(n1, n2, n3) {
  var s = sum(sum(n1, n2), n3);
  var product = multiply((n1, n2), n3);

  console.log('\"The sum of ' + n1 + ' and ' + n2 + ' and ' + n3 + ' is ' + s + '.\"');
  console.log('\"The numbers' + n1 + ' and ' + n2 + ' and ' + n3 + ' have a product of ' + product + '.\"');

  var samSumDisplay = document.getElementById('samSumText');
  samSumDisplay.textContent = '\"The sum of ' + n1 + ' and ' + n2 + ' and ' + n3 + ' is ' + s + '.\"';

  var samProductDisplay = document.getElementById('samProductText');
  samProductDisplay.textContent = '\"The numbers' + n1 + ' and ' + n2 + ' and ' + n3 + ' have a product of ' + product + '.\"';
}

function sumArray(n) {
  var size = n.length;
  var s = 0;
  for (var i = 0; i < size; i++) {
    s += n[i];
  }

  console.table(n);
  console.log(n.join(" and ") + ' were passed in as an array of number, and ' + s + ' is their sum.');

  var sumArrayDisplay = document.getElementById('sumArrayText');
  sumArrayDisplay.textContent = n.join(" and ") + ' were passed in as an array of number, and ' + s + ' is their sum.';
}

function multiplyArray(n) {
  var size = n.length;
  var product = 1;
  for (var i = 0; i < size; i++) {
    product *= n[i];
  }

  console.table(n);
  console.log(n.join(" and ") + ' were passed in as an array of number, and ' + product + ' is their product.');

  var multiplyArrayDisplay = document.getElementById('multiplyArrayText');
  multiplyArrayDisplay.textContent = n.join(" and ") + ' were passed in as an array of number, and ' + product + ' is their product.';
}
//Thanks for all the help with the code today!
