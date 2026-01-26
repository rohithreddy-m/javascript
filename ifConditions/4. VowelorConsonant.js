let input="4";
if ("abcdefghijklmnopqrstuvwxyz".includes(input)){
    if (/^a-zA-Z$/.includes(input)){
    console.log("vowelor");
    } else {
    console.log("consonant");
    }
} else {
    console.log("input is not the Alphabet");
}