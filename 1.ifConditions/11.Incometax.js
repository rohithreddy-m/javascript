let income=250100
if (income <=250000 ){
    console.log(`Your income is ${income} and you  dono't want to pay.`)
}else if (income <= 500000){
    console.log(`Your income is ${income} and you want to pay only ${((income-250000)*10)/100}`)
}else{
    console.log(`Your income is ${income} and you want to pay only ${(((income-500000)*20)/100)+((250000*10)/100)}`)
}