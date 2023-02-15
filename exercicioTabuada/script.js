function tabuada() {
  let valor = document.getElementById("txtTab");
  let tabu = document.getElementById("selTab");
  let res = document.getElementById("res");

  if (valor.value.length == 0) {
    window.alert("Por favor, digite um número.");
  } else {
    let n = Number(valor.value);
    let c = 1;
    tabu.innerHTML = "";
    for (c = 0; c <= 10; c++) {
      let item = document.createElement("Option");
      item.text = `${n} * ${c} = ${n * c}`; //conteudo texto
      item.value = `tabu${c}`;
      tabu.appendChild(item); //add um elemento filho
    }
  }
}
