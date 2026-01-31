let inputOne="h"
let inputTwo=3
if (Number.isFinite(inputOne) && Number.isFinite(inputTwo)){
    if (inputOne % inputTwo==0){
        console.log(`${inputOne} is Divisible by ${inputTwo}.`)
    }else if (inputTwo % inputOne ==0){
        console.log(`${inputTwo} is Divisible by ${inputOne}.`)
    }else {
        console.log(`Both are not Divisible by each other.`)
    }
}else{
    console.log(`input is not the Number.`)
}