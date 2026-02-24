// function Mergesort(list) {
//     let ans=[]
//   if (list.length <= 1) return list;
//   let half = Math.floor(list.length / 2);
//   let left = list.slice(0, half);
//   let right = list.slice(half, list.length);
//   if (left[0] < right[0]) {
//     [left, right] = [right, left];
//     ans.push(right[0])
//     console.log(ans)
//   }
//   return [...Mergesort(left), ...Mergesort(right)];
// }
// let list = [1, 7, 2, 3, 4, 5, 6];
// console.log(Mergesort(list));

function Mergesort(list) {
  if (list.length <= 1) return list;

  let half = Math.floor(list.length / 2);
  let left = Mergesort(list.slice(0, half));
  let right = Mergesort(list.slice(half));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  } return result.concat(left.slice(i)).concat(right.slice(j));
}

let list = [1, 7, 2, 3, 4, 5, 6];
console.log(Mergesort(list));