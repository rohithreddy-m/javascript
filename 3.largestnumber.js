let Number1=1;
let Number2=2;
let Number3=3;
if (Number1 > Number2){
    if (Number1 > Number3){
        console.log(`${Number1} is the Largest Number.`)
    }
    else {
        console.log(`${Number3} is the Largest Number.`)
    }
}
else if (Number2 > Number1){
    if (Number2 > Number3){
        console.log(`${Number2} is the Largest Number.`)
    }
    else {
        console.log(`${Number3} is the Largest Number`)
    }
}
else {
    console.log(`${Number3} is the Largest Number.`)
}