let Numbers=10
// if (Number % 3== 0 && Number % 5 == 0){
//     console.log("Yes it is Divisible by the 3 and 5")
// }
if (Number.isFinite(Numbers)){
if (Numbers % 3 ==0){
    if (Numbers%5==0){
        console.log("it is divisible by both 3 and 5")
    }else{
    console.log("it is divisible by only 3")
    }}
else if (Numbers % 5 ==0){
    console.log("it is divisible by only 5")
    }
else {
    console.log("It is Not Divisible by 3 and 5")
}}