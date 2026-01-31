let input = "Rohith";
let countUpper = 0;
let countLower = 0;
for (let i of input) {
  if (/^[A-Z]$/.test(i)) {
    countUpper++;
  } else if (/^[a-z]$/.test(i)) {
    countLower++;
  }
}
console.log(`Lower case=${countLower} and Upper case=${countUpper}.`);
