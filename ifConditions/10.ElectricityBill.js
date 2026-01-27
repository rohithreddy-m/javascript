let Units=751
if (Units <= 250){
    console.log("Your Bill is Less then 250 Units You Not Need to Pay")
}else if (Units <= 500){
    let youWantPay=(Units-250)*7
    console.log(`Your Used Units is ${Units} and you want to pay the only ${youWantPay}.`)
}else if (Units <= 750){
    let youWantPay=((Units-500)*10)+(250*7)
    console.log(`Your Used Units is ${Units} and you want to pay the only ${youWantPay}.`)
}else {
    let youWantPay=((Units-750)*12)+(250*10)+(250*7)
    console.log(`Your Used Units is ${Units} and You want to Pay the only ${youWantPay}`)
}