function Primecheck(input) {
    let count=false
    if (input < 2) {
        console.log(`${input} is Not Valid Number for Prime Number.`)
        return
    }
    for (let i =2 ; i <input;i++) {
        if (input%i===0) {
            count=true
            break
        } 
    }   
    if (count)
        console.log(`${input}=Not PrimeNumber`) 
    else 
        console.log(`${input}=PrimeNumber`)  
}
const input=1
Primecheck(input)