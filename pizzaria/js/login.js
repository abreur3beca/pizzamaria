//criamos um função que será chamada a partir do clique
//no botao login
//essa função irá verificar se os dados são verdadeiros
function verificaLogin(){
    //criamos uma variável email que receberá o valor
    //do input email que está no login.html
    //o documento é um objeto pelo qual podemos acessar tudo
    //que contém no nosso html,inclusive os ID, ou classes 
    //o método getElementById pega o id no html passado
    //por parâmetro
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value

    if(email == "luiz" && senha == "lulu"){
        window.location.href = "homepage.html";
    }
}
