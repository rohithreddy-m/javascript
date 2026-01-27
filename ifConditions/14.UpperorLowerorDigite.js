let input=0
if (/^[A-Z]$/.test(input)){
    console.log(`${input} is the Uppper Case.`)
}else if (/^[a-z]$/.test(input)){
    console.log(`${input} is the Lower Case.`)
}else if ( Number.isFinite(Number(input))){
    console.log(`${input} is the Digit.`)
}