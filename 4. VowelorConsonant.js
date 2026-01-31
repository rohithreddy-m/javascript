let input="a";
if (/^[A-Za-z]$/.test(input)){
    if ("aeiou".includes(input)){
    console.log("vowelor");
    } else {
    console.log("consonant");
    }
} else {
    console.log("input is not the Alphabet");
}