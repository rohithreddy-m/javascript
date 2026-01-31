let input="Rohith"
let count=0
for (let i of input) {
    if (/^[A-z]$/.test(i.toUpperCase())) {
        count++
    }
} if (count==input.length) {
        console.log(`${input} is canteen only alphabets.`)
    } else {
        console.log(`${input} is canteen Not only alphabets.`)
    }