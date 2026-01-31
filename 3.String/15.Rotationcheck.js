let input="Rohith"
let ans=""
let Rotation=2
let anss=""
for (let i =1; i <= Rotation;i ++) {
     ans=input.at(-i)+ans
} for (let j=0; j<input.length-Rotation;j++) {
    anss=anss+input[j]
} ans=ans+anss
 console.log(ans)
// ans=ans+input.slice(0,input.length-Rotation)
//      console.log(ans)
