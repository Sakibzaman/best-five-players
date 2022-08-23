// function makeDisable(){
//     const btnDisable = document.getElementById('renato');
//     btnDisable.disabled = true;
//     btnDisable.style.setProperty('background-color', 'grey');
//     btnDisable.innerHTML = 'SELECTED';
// }

// const selectedPlayers = [];
// function displaySelectedPlayers(player){
//     console.log(player);
//     const tableBody = document.getElementById("selected-player");
//     tableBody.innerHTML = "";
// }

// for(let i=0; i<selectedPlayers.length; i++ ){
//     const name = selectedPlayers[i].name
// }

// // * function to parse per player price
// function parsePlayerPrice(){
//     const playerPrice = document.getElementById('player-price');
//     const priceAmount = parseFloat(playerPrice.value);
//     return priceAmount;
// } 

// * function to calculate player expenses



// ***************************************
// function to select players
const playerArray = [];
const totalPlayers = playerArray.length;

function display(playerList){
    if(playerArray.length>5){
        return alert('You can add maximum 5 players');        
    }

    console.log(playerList);    
    const displayPlayerList = document.getElementById("player-list");
    displayPlayerList.innerHTML = "";

    for(let i=0; i<playerArray.length; i++){
        
        console.log(playerArray[i].playerName);

        const tr = document.createElement("tr");

        tr.innerHTML = `
        <td>${i+1}.${playerArray[i].playerName}</td>`;
        displayPlayerList.appendChild(tr);
    }
}

function addToSelected(element){
    
    element.parentNode.children[2]. setAttribute ('disabled', true);
    const playerName = element.parentNode.children[0].innerText;

    const playerObj = {
        playerName: playerName
    }

    playerArray.push(playerObj);
    console.log(playerArray.length);
    
    display(playerArray);
}


