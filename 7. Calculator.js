let inputOne=99;
let inputTwo=11;
let operator= "+"
if (Number.isFinite(inputOne)&& Number.isFinite(inputTwo)){
   if (operator=="+"){
    console.log(inputOne+inputTwo)
   }else if (operator=="-"){
    if (inputOne > inputTwo){
    console.log(inputOne-inputTwo)
   }else{
    console.log(inputTwo-inputOne)
   }}
   else if (operator =="*"){
    console.log(inputOne*inputTwo)
   }else if (operator=="/"){
    if (inputOne>inputTwo){
    console.log(inputOne/inputTwo)
   }else {
    console.log(inputTwo/inputOne)
   }}}
else {
    console.log("input is not valid.")
}