let inputOne=1234
let inputTwo=1234444
let Max=Math.max(inputOne,inputTwo)
for (let i=Max; i>0;i--){
    if (inputOne%i==0 && inputTwo%i==0){
        console.log(i)
        break
    }
}