function GCDfunction(firstNumber,secondNumber){
    let ans=0
    for (let i =1; i<= firstNumber;i++) {
        if (firstNumber%i===0 && secondNumber%i===0){
            ans=i
        }
    }console.log(ans) 
}
GCDfunction(1234567890, 9876543210)
