const input=47654345654345434545
let Numbers=input
let count
for (var i=1;Numbers>0;i++){
    Numbers=Math.floor(Numbers/10)
    // console.log(i)
    count=i
}
console.log(count)