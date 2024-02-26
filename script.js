function printa(valor) {
  document.getElementById("formula").innerText += valor;
}

function calcula() {
  var formula = document.getElementById("formula").innerText;

  try {
    var resultado = eval(formula);
    document.getElementById("resultado").innerText = resultado;
  } catch (error) {
    document.getElementById("resultado").innerText = "Erro";
  }
}

function apaga() {
  document.getElementById("formula").innerText = "";
  document.getElementById("resultado").innerText = "";
}
