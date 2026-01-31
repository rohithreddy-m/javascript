let input=1234
let Numbers=input
let Digit
let sum=0
let a=0
for (let i =1;Numbers>0;){
    Digit=Numbers%10
    Numbers=Math.floor(Numbers/10)
    sum+=Digit
    // console.log(sum)
}console.log(sum)