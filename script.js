function access() {

 var codename = document.getElementById("codename").value;
 var password = document.getElementById("password").value;

 if(codename=="icecream" && password=="nationalgarden") {
   window.open("main/index.html","_self")
 } else {
  window.open("index.html","_self")
 }

}
