// dark an light mode

let mode = document.getElementById("mode_icon");

mode.addEventListener("click", () => {
  let conteudo = document.getElementById("conteudo");
  let titulo = document.getElementById("titulo");
  let tudo = document.getElementById("tudo");
  let form1 = document.getElementById("form1");
  let form2 = document.getElementById("form2");
  let form3 = document.getElementById("form3");
  let button = document.getElementById("button");
  let botaoReset = document.getElementById("button2");
  let img1 = document.getElementById("img1");
  let img2 = document.getElementById("img2");

  if (mode.classList.contains("fa-moon")) {
    mode.classList.remove("fa-moon");
    mode.classList.add("fa-sun");

    tudo.classList.add("dark");
    titulo.classList.add("dark");
    mode.classList.add("dark");
    conteudo.classList.add("dark");
    form1.classList.add("dark");
    form2.classList.add("dark");
    form3.classList.add("dark");
    button.classList.add("dark");
    botaoReset.classList.add("dark");
    img1.classList.add("dark");
    img2.classList.add("dark");
    return;
  }
  mode.classList.remove("fa-sun");
  mode.classList.add("fa-moon");

  tudo.classList.remove("dark");
  titulo.classList.remove("dark");
  mode.classList.remove("dark");
  conteudo.classList.remove("dark");
  form1.classList.remove("dark");
  form2.classList.remove("dark");
  form3.classList.remove("dark");
  button.classList.remove("dark");
  botaoReset.classList.remove("dark");
  img1.classList.remove("dark");
  img2.classList.remove("dark");
});

// calculadora de notas
let span = document.getElementById("result");

// botão enviar

function enviar() {
  let nota1 = document.getElementById("form1").value;
  let nota2 = document.getElementById("form2").value;
  let nota3 = document.getElementById("form3").value;

  if (!nota1 || !nota2 || !nota3) {
    alert("Ops, Você Esqueceu de Preencher as Notas!");
  } else {
    let resultado = (Number(nota1) + Number(nota2) + Number(nota3)) / 3;
    final(resultado);
    span.innerText = 'Sua media final foi: ' + resultado.toFixed(1);
  }
}

// Função para esconder os inputs
function final(resultado) {
  let form1 = document.getElementById("form1");
  let form2 = document.getElementById("form2");
  let form3 = document.getElementById("form3");

  if (resultado) {
    form1.classList.add("esconder");
    form2.classList.add("esconder");
    form3.classList.add("esconder");
  }
}

// botão reset (fas os inputs retornarem e remove o display none que esta sendo add no HTML)

let botaoReset = document.getElementById("button2");

function reset() {
  let form1 = document.getElementById("form1");
  let form2 = document.getElementById("form2");
  let form3 = document.getElementById("form3");
  let span = document.getElementById("result");

  form1.classList.remove("esconder");
  form2.classList.remove("esconder");
  form3.classList.remove("esconder");

  // limpando o valor dos inputs e do span
  form1.value = ''
  form2.value = ''
  form3.value = ''
  span.textContent = ''
}
