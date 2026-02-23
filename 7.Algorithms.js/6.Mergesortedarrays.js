function Mergesortedarrays(listOne,listTwo) {
    listOne.sort((a,b)=>a-b)
    let lenOne=listOne.length
    listTwo.sort((a,b)=>a-b)
    let lenTwo=listTwo.length   
    let ans=[]
    let i
    let j
    for (i=0,j=0;i<listOne.length;i++) {
        for (j=0;j<listTwo.length;j++) {
            if (listOne[i]<listTwo[j]) {
                ans.push(listOne[i])
                break;
            } else {
                ans.push(listTwo[j])
                listTwo.splice(j,1)
                // break
            }
        }
    } ans.push(...listOne.slice(i-1,listOne.length))
    ans.push(...listTwo.slice(j-1,listTwo.length))
    console.log(ans)
}
let listOne=[1,2,3,5,8,10]
let listTwo=[4,6,7,9]
Mergesortedarrays(listOne,listTwo)
// function Mergesortedarrays(listOne,listTwo) {
//   listOne.sort((a, b) => a - b);
//   let lenOne = listOne.length;
//   listTwo.sort((a, b) => a - b);
//   let lenTwo = listTwo.length;
//   let ans = [];
//   let i
//   let j
//   for (i = 0, j = 0; i < lenOne && j< lenTwo;) {
// //   for (i = 0, j = 0; i + j < listOne.length + listTwo.length;) {
//     if (listOne[i] < listTwo[j]) {
//       ans.push(listOne[i]);
//       i++;
//     } else {
//       ans.push(listTwo[j]);
//       j++;
//     }
//   } ans.push(...listOne.slice(i,lenOne.length))
//    ans.push(...listTwo.slice(j,lenTwo.length))
//   console.log(ans);
// }
// let listOne = [1, 2, 3, 5, 7,8,9,10];
// let listTwo = [4, 6];
// Mergesortedarrays(listOne, listTwo);
