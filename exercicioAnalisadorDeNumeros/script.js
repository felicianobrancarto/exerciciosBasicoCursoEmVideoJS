let valor = document.getElementById("txtAdd");
let tabela = document.getElementById("selAdd");
let resultado = document.getElementById("resultado");
let valores = []; //criar um vetor para analisar os dados.

function isnumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function naLista(n, l) { //codigo para evitar de o numero duplicar, ou diferente entre 1 e 100.
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isnumero(valor.value) && !naLista(valor.value, valores)) {
    valores.push(Number(valor.value));
    let item = document.createElement("option");//as linhas no selector
    item.text = `valor ${valor.value} adicionado`; //mostra o texto que deseja que apareça
    tabela.appendChild(item); // faz aparecer na lista
    resultado.innerHTML = ''
  } else {
    window.alert("Valor invalido ou já encontrado na lista");
  }
  valor.value = '' // limpa o input apos utiliza-lo.
  valor.focus(); //colocar o cursor do mouse fiscando novamente no input utilizado.
}

function finalizar(){
  if(valores.length == 0){
    window.alert("Adicione valores antes de finalizar.")

  }else{
    let totalElement = valores.length //contagem de elementos
    let maiorVal = Math.max.apply(null, valores)
    let menorVal = Math.min.apply(null, valores)
    let soma = valores.reduce((accumulator, value) => accumulator + value, 0)
    let media = soma / totalElement
    //let media = media(valores)
  
    resultado.innerHTML = ''
    resultado.innerHTML += `<p>Ao todo temos ${totalElement} números cadastrados.</p>`
    resultado.innerHTML += `<p> O maior valor informado foi ${maiorVal}</p>`
    resultado.innerHTML += `<p> O menor valor informado foi ${menorVal}</p>`
    resultado.innerHTML += `<p> Somados todos os valores temos ${soma}</p>`
    resultado.innerHTML += `<p> A média dos valores digitados é ${media}`
  }
}
