function calculer(){
var s=+document.getElementById("s").value;
var d=+document.getElementById("d").value;
var h=+document.getElementById("h").value;
var q=Math.sqrt(2*d*s/h).toFixed(2);
var n=Math.abs(d/q).toFixed(2);
document.getElementById("q").value=q;
document.getElementById("n").value=n;
}