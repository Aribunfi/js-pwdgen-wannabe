//chiedi nome

const userName = prompt('Qual è il tuo nome?')
console.log('Qual è il tuo nome?' + userName);

//chiedi cognome

const userSurname = prompt('Qual è il tuo cognome?')
console.log('Qual è il tuo cognome?' + userSurname);


//chiedi colore preferito

const favColor = prompt('Qual è il tuo colore preferito?')
console.log('Qual è il tuo colore preferito?' + favColor);


//restituisci: nome+cognome+colore+23

const userPsw = userName + userSurname + favColor + "23"

console.log('Password utente' , userPsw);

const risposta = "Grazie, ecco la tua password" + userPsw;

document.getElementById('risposta')