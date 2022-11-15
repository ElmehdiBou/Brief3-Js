var one = document.getElementById("num1");
var two = document.getElementById("num2");
btn.onclick = function () {
  let a = num1.value;
  let b = num2.value;
  let c = a;
  a = b;
  b = c;
  num1.value = a;
  num2.value = b;
};

// start conditions

valider.onclick = date;
function date() {
  let jour = parseInt(document.getElementById("jour").value);
  let mois = parseInt(document.getElementById("mois").value);
  let année = parseInt(document.getElementById("année").value);
  let valider = document.getElementById("valider");
  let text = document.getElementById("text");
  if (
    année > 1900 &&
    jour >= 1 &&
    (((mois == 4 || mois == 6 || mois == 9 || mois == 11) && jour <= 30) ||
      ((mois == 1 ||
        mois == 3 ||
        mois == 5 ||
        mois == 7 ||
        mois == 8 ||
        mois == 10 ||
        mois == 12) &&
        jour <= 31) ||
      (mois == 2 && jour <= 28))
  ) {
    text.innerText = `Date est: Valid`;
  } else {
    text.innerText = `Date est: Non Valid`;
  }
}

// start guess game
let randnum = Math.floor(Math.random() * 51);
let num = document.getElementById("numGuess");
let send = document.getElementById("envoyer");
let guessRslt = document.getElementById("guessRslt");
let guessCount = 0;
let tentative = document.getElementById("tentative");

function guessNum() {
  guessCount++;
  tentative.innerHTML = guessCount;
  if (num.value == "") {
    alert("S'il vous plaît, saisir un nombre!");
  } else if (counter == 10) {
    send.disabled = true;
    guessRslt.innerHTML = "Jeux tèrminer";
  } else if (num.value == randnum) {
    guessRslt.innerHTML =
      "félicitation, tu as gagné après " + guessCount + " " + "tentatives";
    guessCount = 0;
  } else if (num.value < randnum) {
    guessRslt.innerHTML =
      "Le nombre est plus grand que " +
      "  " +
      num.value +
      "  " +
      " , Réesseyez encore !";
  } else if (num.value > randnum) {
    guessRslt.innerHTML =
      "Le nombre est plus petit que " +
      "  " +
      num.value +
      "  " +
      " , Réesseyez encore !";
  }
}
// table de multi
function generate() {
  rslt = parseInt(document.getElementById("numtable").value);
  document.getElementById("tableresult").innerHTML = "";
  for (let i = 1; i <= 10; i++) {
    document.getElementById("tableresult").innerHTML +=
      rslt + " x " + i + " = " + rslt * i + "<br>";
  }
}

// voyelle dans une chaine
function countingvoyel() {
  let voyelphrase = document.getElementById("txtvoyel").value;
  let counting = 0;
  let result = voyelphrase.match(/[aeoiyuAEYUIO]/g);
  for (let i = 0; i < result.length; i++) counting++;
  document.getElementById(
    "voyelresult"
  ).innerHTML = ` La phrase que vous avez saisi contient ${counting} voyelles`;
}

// rechercher un mot et suprimmer

var phrase = document.getElementById("phrasesaisi");
var word = document.getElementById("motsaisi");
var outputphrase = document.getElementById("outputphrase");

function recherchermot() {
  let inptmot = word.value;
  let inptext = phrase.value;
  if (inptext.match(inptmot)) {
    outputphrase.innerHTML = "le mot que vous chercher existe";
  } else {
    outputphrase.innerHTML = "le mot que vous chercher n'existe pas";
  }
}

function suprimermot() {
  let inptmot = word.value;
  let inptext = phrase.value;
  while (inptext.match(inptmot)) {
    inptext = inptext.replace(inptmot, "");
  }
  outputphrase.innerHTML = inptext;
}
