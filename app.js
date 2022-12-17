let pScoreEl1 = document.getElementById("score-el1")
let eScoreEl2 = document.getElementById("score-el2")
let pScores = 0
let eScores = 0

function pAdd1(){
    pScores += 1
    pScoreEl1.innerText = pScores
}
function pAdd2(){
    pScores += 2
    pScoreEl1.innerText = pScores
}
function pAdd3(){
    pScores += 3
    pScoreEl1.innerText = pScores
}

function eAdd1(){
    eScores += 1
    eScoreEl2.innerText = eScores
}
function eAdd2(){
    eScores += 2
    eScoreEl2.innerText = eScores
}
function eAdd3(){
    eScores += 3
    eScoreEl2.innerText = eScores
}

function reset(){
    pScores = 0
    eScores = 0
    pScoreEl1.innerText = pScores
    eScoreEl2.innerText = eScores
}