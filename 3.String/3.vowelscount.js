const input="aeiou AEIOU RHTHRDDY"
// for (let i =0; i<input.length;i++){
for (let i of input){
    // if ("aeiou ".includes(input[i]) || "AEIOU".includes(input[i])){
    if ("aeiou ".includes(i) || "AEIOU".includes(i)){
        console.log(i)
    }
}