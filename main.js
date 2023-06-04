let initial = 1;
let velocidade = 2000;
let tempoEspera = 3000;
let position = document.getElementById("caixa").style;
let btns = document.getElementById("btns");
let imagens = document.querySelectorAll(".imgs");

imagens.forEach((item, index) => {
  if (index == 0) {
    btns.innerHTML += "<button class='btn btn-colored'></button>";
  } else {
    btns.innerHTML += "<button class='btn'></button>";
  }
});

let botoes = document.querySelectorAll(".btn");

botoes.forEach((item) => {
  item.addEventListener("click", (e) => {
    let meusBotoes = Array.from(botoes);
    initial = meusBotoes.indexOf(e.target);
    go();
    clearInterval(meuIntervalo);
    setTimeout(() => {
      meuIntervalo = setInterval(() => go(), velocidade);
    }, tempoEspera);
  });
});

function go() {
  botoes.forEach((item) => item.classList.remove("btn-colored"));
  if (initial !== imagens.length) {
    botoes[initial].classList.add("btn-colored");
    position.transform = `translateX(-${initial * 100}%)`;
    initial += 1;
  } else {
    position.transform = `translateX(0)`;
    initial = 1;
    botoes[0].classList.add("btn-colored");
  }
}

let meuIntervalo = setInterval(() => go(), velocidade);
