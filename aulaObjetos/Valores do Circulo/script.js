
let saida = document.getElementById("saida")
function calcCirc(){
    saida.innerHTML = ""
    var raio = parseFloat(document.getElementById("raio").value)
    check(raio)
    saida.innerHTML += `Raio do Circulo: ${raio}`
    calcArea(raio)
    calcComp(raio)
    
    
}

function check(val){
    if (!val){
        alert("Preencha todos os campos antes de calcular!")
        return
    }
}

function calcArea(raioVal){
    let area = Math.PI * Math.pow(raioVal, 2)
    saida.innerHTML += `<br>Area do Circulo: ${area.toFixed(3)}`
}

function calcComp(raioVal){
    let comprimentoCirc = 2 * Math.PI * raioVal
    saida.innerHTML += `<br>Comprimento da Circunferencia: ${comprimentoCirc.toFixed(3)}`
}
