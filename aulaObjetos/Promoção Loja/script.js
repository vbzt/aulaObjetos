function comprar(){
    var produto = document.getElementById("produto").value
    var produtoQnt = parseInt(document.getElementById("quantidade").value)
    var produtoVal = parseFloat(document.getElementById("preco").value)
    check(produto, produtoQnt, produtoVal)
    if(produtoQnt == 2 && (produtoVal * 2) % 2 != 0){
        promo(produto, produtoVal)
        return
    }
    saida.innerHTML = `Medicamento: ${produto} <br>Preço: R$${produtoVal * produtoQnt}`
    
    
}

function check(prod,prodQnt,prodVal){
    if (!prod || !prodQnt || !prodVal){
        alert("Preencha todos os campos antes de fazer a compra!")
        return
    }
}

function promo(nome,valor){
    let saida = document.getElementById("saida")
    saida.innerHTML = `Medicamento: ${nome} <br>Preço: R$${valor} <br>Promoção leve 2 por apenas R$${Math.floor(valor * 2)}`
}