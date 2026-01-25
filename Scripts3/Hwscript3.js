// Setting the value for generated div container

const numbersdivs = document.getElementById("numberspan");

// Creating a new div

for (let numbercounter = 1; numbercounter < 101; numbercounter++) {

    let nextdiv = document.createElement("div");
    nextdiv.id = "numberdiv" + numbercounter;

    if (numbercounter % 3 !== 0 && numbercounter % 5 !== 0) {
        nextdiv.className = "neither";
        nextdiv.innerHTML += "<p>Number: " + numbercounter + " (none!)</p>";
        numbersdivs.appendChild(nextdiv);
    }

    else if (numbercounter % 3 === 0 && numbercounter % 5 !== 0) {
        nextdiv.className = "fizz";
        nextdiv.innerHTML += "<p>Number: " + numbercounter + " (fizz!)</p>";
        numbersdivs.appendChild(nextdiv);
    }

    else if (numbercounter % 3 !== 0 && numbercounter % 5 === 0) {
        nextdiv.className = "buzz" ;
        nextdiv.innerHTML += "<p>Number: " + numbercounter + " (buzz!)</p>";
        numbersdivs.appendChild(nextdiv);
    }

    else if (numbercounter % 3 === 0 && numbercounter % 5 === 0) {
        nextdiv.className = "both";
        nextdiv.innerHTML += "<p>Number: " + numbercounter + " (fizzbuzz!)</p>";
        numbersdivs.appendChild(nextdiv);
    }

    else {
        nextdiv.style.display = "none";
    }
    
}