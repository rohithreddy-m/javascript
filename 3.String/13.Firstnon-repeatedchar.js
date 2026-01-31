const string = "RohithROhithl";
for (let I in string) {
  const i = Number(I);
//   console.log(I,i)
  let Hi = true;
  let end = string.length;
  for (let j = 0; j < end; j++) {
    // console.log(string[i],string[j])
    if (string[i].toLowerCase() === string[j].toLowerCase() && i !== j) {
      Hi = false;
      //  console.log(string[i],string[j])
      break;
    }
  }
  if (Hi) {
    console.log(string[i]);
    break;
  }
}
