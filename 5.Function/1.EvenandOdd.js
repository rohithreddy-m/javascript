function evenAreOdd(num) {
    if (num %2 === 0) {
        return (`${num} is Even`)
        // console.log(num)
    } else { 
        return (`${num} is Odd`)
    }
}
console.log(evenAreOdd(3))