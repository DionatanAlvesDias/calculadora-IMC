function calcImc(){
    let altura = document.getElementById("altura").value
    let peso = document.getElementById("peso").value

    let imc = peso / (altura * altura)

    if(imc < 18.5){
        alert("Você está abaixo do peso ...")
    }else if (imc >= 18.5 && imc < 25){
        alert("Você está com peso normal ...")
    }else if(imc >= 25 && imc < 30){
        alert("Você está com soprepeso ...")
    }else if (imc >= 30 && imc < 40){
        alert("Você está com obesidade ...")
    }else if(imc >= 40){
        alert("Você está com obesidade grave ...")
    }
}