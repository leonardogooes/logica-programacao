// estrutura de decisão 
// switch/case/break/default
let fruta = "banana"

switch (fruta){
    case "laranja":
        console.log("suco de laranja")
    break
    case "banana":
        console.log("vitamina de banana")
    break
    case "maçã":
        console.log("suco de maçã")
    break

    default:
        console.log("suco genérico") // então o default é uma mensagem q quando ele não cair em nehuma das outras situações, ele irá cair nessa, muito semelhante ao else, caso a informação não corresponda a nenhum case ele vai executar o q tem dentro de default.
}
// exemplos testes: "onde está a camiseta ?"
let camiseta = "azul"

switch(camiseta){
    case "vermelha":
        console.log("A camiseta " + camiseta + " está na gaveta 1")
    break
    case "azul":
        console.log("A camiseta " + camiseta + " está na gaveta 2")
    break
    case "amarela":
        console.log("A camiseta " + camiseta + " está na gaveta 3")
    break
    case "preta":
        console.log("A camiseta " + camiseta + " está na gaveta 4")
    break
    default:
        console.log("A camiseta " + camiseta + " não está dentro de nenhuma gaveta")
}

// exemplos testes : "Qual estação do ano estamos ?"
let nomeMes = "Dezembro"

switch (nomeMes){
    case "Janeiro":
    case "Fevereiro":
    case "Março":
        console.log("O mês de " + nomeMes +" é Verão!")
    break
    case "Abril":
    case "Maio":
    case "Junho":
        console.log("O mês de " + nomeMes +" é Outono!")
    break
    case "Julho":
    case "Agosto":
    case "Setembro":
        console.log("O mês de " + nomeMes +" é Inverno!")
    break
    case "Outubro":
    case "Novembro":
    case "Dezembro":
        console.log("O mês de " + nomeMes +" é Primavera!")
    break
    default:
        console.log("Mês inexistente")
}

// exemplos testes: "Customizando mensagem de boas vindas"
let nomeUsuario = "Ana"
let sexo = "Feminino"

switch (sexo){
    case "Feminino":
    case "feminino":
        console.log("Seja bem vinda " + nomeUsuario)
    break
    default:
        console.log("Seja bem vindo " + nomeUsuario)
}

// exemplos testes: "Quero encotrar um produto, em qual prateleira está ?" utilezei o switch/case/break/default/ if e else
let produto = "Bolacha"
let valorDoProduto = 4
let valorEmConta = 2

switch (produto){
    case "Refrigerante":
    case "Água":
    case "Sorvete":
        console.log("O produto " + produto + " está no setor de Frios")
    break
    case "Café":
    case "Bolacha":
    case "Açúcar":
    case "Macarrão":
    case "Farinha":
        console.log("O produto " + produto + " está prateleira 2")
    break
    case "Arroz":
    case "Feijão":
    case "Leite":
    case "Ovos":
    case "Pipoca":
        console.log("O produto " + produto + " está na prateleira 1")
    break
    default:
        console.log("O produto " + produto + " está na prateleira 3 ou 4")        
}
// aqui eu resolvi adcionar o if e else para testar mais opções
if (valorEmConta >= valorDoProduto){
    console.log("Você pode comprar " + produto)
}
else {
    console.log("Você não tem saldo o suficiente")
}