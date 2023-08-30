const lista = document.getElementById('lista');
const form = document.getElementById('form_add');

//array da nossa lista
const listaDeClientes = ['Kaian' , 'Julia' , 'Lucas'];

//função que exibirá nossa lista
const exibirLista = () => {
   lista.innerHTML = " ";
   listaDeClientes.forEach(itemDaLista => {
    lista.innerHTML += `<div class= "lista"> ${itemDaLista}</div>`;
   })
}
const cadastrarItem = () =>{
   lista.style.display = 'none';
   form.style.display = 'block';
   const input = document.getElementById('input').value
   listaDeClientes.push(input);
   exibirLista();
   
}
const exibirFormulario = () =>{
   lista.style.display = 'none';
   form.style.display = 'block';
}
const excluirItem = posicaoitemAserExcluido => {
   listaDeClientes.splice(posicaoitemAserExcluido, 1);
   exibirLista();
}
   
exibirLista()