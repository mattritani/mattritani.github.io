
/*used javascript selector to grab the value from the input field and set it
equal to the num that is inserted */
function insert(num) {
  document.getElementById('ans').value = document.getElementById('ans').value + num
}

/*used javascript selector to grab the value from the input field and used the eval()
function to execute the total*/
function equal() {
  var exp = document.getElementById('ans').value;
  if (exp) {
    document.getElementById('ans').value = eval(exp)
  }
}

/*used javascript selector to grab the value from the input field set it equal to an empty
string*/
function clean() {
  document.calculator.ans.value = "";
}

/*used the substring method, extracted the characters from the string
in the input field and returned a new substring - subtracted 1 off the
length*/
function back() {
  var exp = document.getElementById('ans').value;
  document.getElementById('ans').value = exp.substring(0, exp.length - 1);
}
