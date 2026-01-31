let input=100
let firstNumber=0
let secondeNumber=1
let ans=0
for (let o=1;ans<=input;){
    ans=firstNumber+secondeNumber
    firstNumber=secondeNumber
    secondeNumber=ans
    if (ans<input){
    console.log(ans)
    }
}