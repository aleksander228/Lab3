function insert(num) {
document.form.textview.value = document.form.textview.value + num;
}
function clean() {
document.form.textview.value = "";
}
function back1(){
	var exp = document.form.textview.value;	
	var leng = exp.lenght
	document.form.textview.value = exp.substring(0,leng-1);
}
function equal() {
	var exp = document.form.textview.value;	
	if(exp) {
		document.form.textview.value = eval(exp);
	}
}