let inputOne=12345
let inputTwo=1234
for (let i=inputOne;i>0;i++){
    if (i%inputOne==0 && i%inputTwo==0){
        console.log(i)
        break
    }
}