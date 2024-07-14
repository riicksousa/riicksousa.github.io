function armazenarValor(){
    
    //Amazena o comentário que o usuário digtou no campo.
    var userInput = document.getElementById("userInput").value;
    
    //exibe o comentário que foi armazenado
    console.log("O valor da variável é: " + userInput);
    
    //atualiza o conteúdo com a frase + o valor do campo que o usuário comentou
    document.getElementById("comentarioInserido").innerText = "Obrigado pelo feedback! \n\n Seu comentario foi: " + userInput;
    }
 var nome = henrique
 console.log(nome)