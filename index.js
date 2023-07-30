let yourBirthYear;

document.getElementById("endButton").onclick = function(){

    birthYear = document.getElementById("writeAge").value;
    const currentYear = new Date().getFullYear();
    const  yourBirthYear = currentYear - birthYear;

   // resultElement.textContent = `Your age is ${yourBirthYear} years old.`;
    document.getElementById("gg").innerHTML = "Your Age is " + yourBirthYear +" Years Old";



   /* yourBirthYear = document.getElementById("writeAge").value;
    yourBirthYear = Number(yourBirthYear);
    yourAge = 2023 - yourBirthYear;
    document.getElementById("gg").innerHTML = "Your Age is " + yourAge +" Years Old";
    */
}
