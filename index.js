/* function vowelsAndConsonants(s) {
    const vowel = 'aeiou';
    let consonants = '';
    for(let i=0; i<s.length; i++)
    {
       if(vowel.includes(s[i])){
           console.log(s[i]);
       }
       else{
           consonants = consonants + s[i] +'\n';
       }
       
    }
    console.log(consonants);
    
}

vowelsAndConsonants('aeioujfhghgh'); */



/* function getLetter(s) {
    let letter;
    let set1 = 'aeiou';
    let set2 = 'bcdfg';
    let set3 = 'hjklm';
    let set4 = 'nprstvwxyz';
    // Write your code here
    let firstLetter = s[0];
    switch (true)
    {
        case(set1.includes(firstLetter)) :
        {
            return letter = 'A';
            break;
        }
        case (set2.includes(s[0])):
        {
            return letter = 'B';
        }
        case(set3.includes(s[0])):
        {
            return letter ='C';
        }
        case(set4.includes(s[0])):
        {
            return letter = 'D';
        }
    }
    return letter;
}

console.log(getLetter('a'));
 */

/* let s ='abcde';
let ss = s.split(1,3);
console.log(ss) */;
//let jj=ss.join('');
//console.log(jj);


/* let circle ={
    radius :1,
    location :{
        x:1, y:1
    },
    draw : function() {
        console.log('Draw circle');
    }
};

circle.draw();
function isPositive(a) {
    let sign = Math.sign(a);
    switch(sign){
        case -1:
        {
            throw new Error ('Negative Error');
            break;
        }
        case 0:
        {
            throw new Error ('Zero Error');
            break;
        }
        return "YES";
    }
    } */


    function createCircle(radius){
        return{
            radius,
            draw : function(){
                console.log('draw a circle');
            }
        };
    }
    const circle = createCircle(1);

class Car {
    constructor(brand){
        this.carname=brand;
    }
}
mycar = new Car('Ford');

