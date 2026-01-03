function togglePlano(botao) {
  const detalhes = botao.nextElementSibling;

  if (detalhes.style.display === "block") {
    detalhes.style.display = "none";
    botao.innerText = "Ver mais";
  } else {
    detalhes.style.display = "block";
    botao.innerText = "Ver menos";
  }
}
