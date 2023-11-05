
const btnCard01 = document.querySelector("#btnCard01")
const btnCard02 = document.querySelector("#btnCard02")
const btnCard03 = document.querySelector("#btnCard03")

const cardRes01 = document.querySelector("#cardRes01")
const cardRes02 = document.querySelector("#cardRes02")
const cardRes03 = document.querySelector("#cardRes03")

const numInicio = document.querySelector("#numInicio")
const numFim = document.querySelector("#numFim")





function verifica() {
    let min = parseInt(numInicio.value)
    let max = parseInt(numFim.value)

    let numRand = Math.floor(Math.random()*(max-min+1))+min

    console.log(numRand)

    cardRes01.innerHTML = numRand
}

// const min = 1; // Valor mínimo
// const max = 10; // Vlor máximo
// const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(numeroAleatorio); // Exibirá um número aleatório entre 1 e 10 (inclusive)


btnCard01.addEventListener("click", verifica)