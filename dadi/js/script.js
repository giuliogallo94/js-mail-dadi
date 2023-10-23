const userDice = Math.floor(Math.random() * 12) + 1;
const pcDice = Math.floor(Math.random() * 12) + 1;
console.log(userDice, pcDice);

let result = "";
if (userDice > pcDice) {
  result = `L'utente vince con un punteggio di ${userDice} contro ${pcDice} del PC`;
} else if (userDice === pcDice) {
  result = `Utente e PC pareggiano con un punteggio di ${userDice}`;
} else if (userDice < pcDice) {
  result = `PC vince con un punteggio di ${pcDice} contro ${userDice} dell'utente`;
}
console.log(result);
