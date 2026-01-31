let Numbers = 321
let numbers=Numbers
let str = numbers.toString()
let Ans=0
let Num
for (let i = 1; i <= str.length; i++) {
  Num = numbers % 10
  numbers = Math.floor(numbers / 10)
  Ans = Ans * 10 + Num
  console.log(Ans)
}
