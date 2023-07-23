// letters  ادخال الحروف 
const letters ="abcdefghijklmnopqrstuvwxyz";
//Get Array from lettersعمل مصفوفه من جميع الحروف 
let lettersArray=Array.from(letters);
//Select letters container تحديد الديف الخاص بالحروف 

let lettersContainer =document.querySelector(".letters");

// Generate letters

lettersArray.forEach(letter=> {

    //Creat Span
    let span=document.createElement("span");
//creat letters Text node 
 let theletter =document.createTextNode(letter)

//append the letters to span 

span.appendChild(theletter)

//add class name on span
span.className="letter-box"

//append span to the letters container
lettersContainer.appendChild(span)

});


//object of words + catagories



