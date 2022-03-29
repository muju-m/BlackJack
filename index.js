let startGame = document.getElementById("start")
let sum = document.getElementById("sum")
let content = document.getElementById("content")
let cards = document.getElementById("cards");
let message = "" ;
let newCard = document.getElementById("new");

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let first = arr1[Math.floor(Math.random()*arr1.length)];
let second = arr2[Math.floor(Math.random()*arr2.length)];
let total = first + second; 
let totalArr = [first,second]

startGame.addEventListener("click", gameStart)
let count = 0;

function gamePlay(){
    cards.innerText = "Cards: "  
    for(let i = 0; i < totalArr.length ; i++){
        cards.textContent += totalArr[i] + " ";
    }
    sum.innerText = "Sum: " + " " + total; 
    if(total <= 20){
            message = "Do you want to draw new cards"
        }
        else if(total === 21){
            message = "Congrats! You're the BLACKJACK"
            return results()
        }
        else{
            message = "Bad luck! You're out of the game"   
            return results()
        }

        content.innerText = message;
}

function gameStart(){
    count = count+1;
    if(count === 1){
        gamePlay();
    }
    else{
        alert("Click on new card");
    }
}

let arr3 = [1,2,3,4,5,6,7,8,9,10,11]
let third = arr3[Math.floor(Math.random()*arr3.length)]

newCard.addEventListener("click", (e)=>{
    if(count >= 1){
    total += third;
    totalArr.push(third)
    gamePlay();
    }
    else{
        alert("Please click on Start Game first")
    }
})

function results(){
    content.innerText = message + " Please refresh the page and play again"
    startGame.disabled = true;
    newCard.disabled = true;
}