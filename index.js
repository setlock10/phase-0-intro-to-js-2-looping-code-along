// Code your solutions in this file

for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    
  }


const gifts =["teddy bear","drone","doll"];

function wrapGifts(gifts) {
    for (let i=0;i<gifts.length;i++){
        console.log(`Wrapped ${gifts[i]} and add a bow!`);
       
    }
    return gifts;
}
//wrapGifts(gifts);

//const names=['Guadalupe', 'Ollie', 'Aki'];

function writeCards(names,event){
    var messages=new Array(names.length);
    for (let i=0;i<names.length;i++){
        console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
        messages[i]=`Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        debugger;
    }
    return messages;
}
writeCards([ 'Guadalupe', 'Ollie', 'Aki' ],"surprise");

function countDown(count){
   // let i=count;`
    while (count>=0){
        console.log(count);
        count--;
    }

}
//countDown(10);
