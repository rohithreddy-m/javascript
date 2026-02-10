const input = [9, 8, 7, 6, 5, 4];
// 0-3
// 1-4
// 2-0
// 3-1
// 4-2
const rotate = 3;
const ans=[]
for (let i = rotate ; i < input.length;i++) {
    ans.push(input[i])
} ans.push(...input.slice(0,rotate))
console.log(ans)


const res = [];
for (let i = 0; i < input.length; i++) {
  if (i < rotate) {
    res[input.length - rotate + i] = input[i];
  } else {
    res[i - rotate] = input[i];
  }
}
console.log(res);
