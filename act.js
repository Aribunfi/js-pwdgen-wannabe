var nome = document.modulo.nome.value;
var cognome = document.modulo.cognome.value;
var nickname = document.modulo.colore.value;

if ((nome == "") || (nome == "undefined")) {
    alert("Il campo Nome è obbligatorio.");
    document.modulo.nome.focus();
    return false;
}


if ((cognome == "") || (cognome == "undefined")) {
    alert("Il campo cognome è obbligatorio.");
    document.modulo.cognome.focus();
    return false;
}


if ((colore == "") || (colore == "undefined")) {
    alert("Il campo colore preferito è obbligatorio.");
    document.modulo.colore.focus();
    return false;
}


