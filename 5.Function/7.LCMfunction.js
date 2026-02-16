function LCM(firstNumber,secondNumber) {
    for (let i=1;i<=Infinity;i++) {
        ans=firstNumber*i
        ans2=1
        for (let j=1; ans2<= ans;j++) {
            ans2=secondNumber*j
            if (ans2===ans) {
                console.log(ans)
            if (ans2===ans)
                break
            }        
        }if (ans2===ans)
                break
    }
}
LCM(20,1)