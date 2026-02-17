function Compoundinterest(Amount,years,interest) {
    let ans=Amount
    for (let i =1; i<=years;i++) {
    ans=((interest*ans)/100)+ans
    } console.log(ans) 
}
let Amount=1000
let years=2
let interest=10
Compoundinterest(Amount,years,interest)