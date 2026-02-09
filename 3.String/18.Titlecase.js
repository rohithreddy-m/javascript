const input="i am rohith"
let word=input.split(" ")
let ans=" "
for (let i of word) {
   let a=i[0].toUpperCase()
   let anss=a+i.slice(1)
   ans=ans+anss+" "
}console.log(ans)
