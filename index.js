// Code your solutions in this file
function writeCards(names)
{
    let messages = [];
    for (let id=0; id<names.length; id++){
        messages.push(`Thank you, ${names[id]}, for the wonderful surprise gift!`);
    }
    return messages;
}
function countDown(n)
{
    while (n>0){
        console.log(n)
        n--;
    }
    console.log(n)
}