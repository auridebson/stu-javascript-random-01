
const btnCard01 = document.querySelector("#btnCard01")
const btnCard02 = document.querySelector("#btnCard02")
const btnCard03 = document.querySelector("#btnCard03")

const cardRes01 = document.querySelector("#cardRes01")
const cardRes02 = document.querySelector("#cardRes02")
const cardRes03 = document.querySelector("#cardRes03")

const numInicio = document.querySelector("#numInicio")
const numFim = document.querySelector("#numFim")





function verifica() {
    let numRand = Math.floor(Math.random()*10)

    console.log(numRand)

    cardRes01.innerHTML = numRand
}


btnCard01.addEventListener("click", verifica)