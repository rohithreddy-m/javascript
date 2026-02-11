const input=[-1,-1,-34,-34]
let firstSmallNumber=Infinity
let secondSmallNumber=Infinity
for (let i of input) {
    if (i < firstSmallNumber) {
        //  console.log(i)
        secondSmallNumber=firstSmallNumber
        firstSmallNumber=i
        // console.log(firstSmallNumber,secondSmallNumber,i)
    } else if (i < secondSmallNumber && i !=firstSmallNumber) {
         secondSmallNumber = i
    }
}
console.log(secondSmallNumber)