let numbers=150
let count=0
let i
for (i=1;i<=numbers;i++){
    count=0
    for (let j=2;j<i;j++){
        if (i%j==0){
            count+=1
            break
        }
    }if (count==0){
        console.log(i)
    }
}