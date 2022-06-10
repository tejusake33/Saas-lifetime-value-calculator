function calc() {
  var arpa = document.getElementById("arpa").value;
  var arpa = parseInt(arpa,10);
  var gross = document.getElementById("gross").value;
  var gross = parseInt(gross,10);
  var churn = document.getElementById("churn").value;
  var churn = parseInt(churn,10);
  
  var num = arpa*gross;
  var deno = churn;
  var ltv = num/deno;

  document.getElementById("ltv").value = ltv;
}