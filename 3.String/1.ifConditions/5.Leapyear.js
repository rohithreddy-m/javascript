let Year=-5
if (Year <= 0 ){
    console.log(`${Year} is Not the Valid input.`)
} else if (Year % 4 == 0) {
    if (Year % 100 == 0){
        if (Year % 400 == 0){
            console.log(`${Year} is the Leap Year.`)        
        } else {
            console.log(`${Year} is Not the Leap Year.`)
        }
    } else {
        console.log(`${Year} is Leap Year.`)
    }
} else {
    console.log(`${Year} is Not the Leap Year.`)
}