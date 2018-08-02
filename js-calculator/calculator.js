
/*getvalue from the input field set =  inserted num  */
function insert(num) {
  document.getElementById('ans').value = document.getElementById('ans').value + num
}

/*execute eval total total*/
function equal() {
  var exp = document.getElementById('ans').value;

  if (exp) {
    document.getElementById('ans').value = eval(exp)
  }
}


/* set too string*/
function clean()  {

  document.calculator.ans.value = "";

}

/* less one*/
function back() {

  var exp = document.getElementById('ans').value;

  document.getElementById('ans').value = exp.substring(0, exp.length - 1);
  
}
