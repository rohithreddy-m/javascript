function Fibonaccifunction (input) {
    let firstNumber=0
    let secondNumber=1
    let ans=0
    for (let i =0 ; ans <= 200; i++) {
        ans=firstNumber+secondNumber
        // if (i ===0) {
        //     console.log(0)
        //     console.log(1)
        // } 
        if (ans <= 200) {
        firstNumber=secondNumber
        secondNumber=ans
        if (ans > 50 && ans < 200)
        console.log(ans)
        }
    }
}
Fibonaccifunction(input=10)