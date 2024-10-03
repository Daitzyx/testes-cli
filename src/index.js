function log(text) {
  console.log(text);
}

function fromLocal(text) {
  console.log(text)
}

fromLocal("Funcao local!")
function fromRemote(text) {
  console.log(text)
}

fromRemote("Funcao do repo remoto!")
log("Test log");

console.log("Test simplify config");