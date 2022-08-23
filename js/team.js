// function to select players
const playerArray = [];
const totalPlayers = playerArray.length;

function display(){
    if(playerArray.length>5){
        // playerArray.length=5;
        playerArray.pop;
        return alert('You can add maximum 5 players');        
    }

    // console.log(playerList);    
    const displayPlayerList = document.getElementById("player-list");
    displayPlayerList.innerHTML = "";

    for(let i=0; i<playerArray.length; i++){
        
        // console.log(playerArray[i].playerName);

        const tr = document.createElement("tr");

        tr.innerHTML = `
        <td>${i+1}.${playerArray[i].playerName}</td>`;
        displayPlayerList.appendChild(tr);
    }
    const selectedPlayers = playerArray.length;
    return selectedPlayers;
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

// * function to parse per player price
// function parsePlayerPrice(){
//     const playerPrice = document.getElementById('player-price');
//     const priceAmount = parseFloat(playerPrice.value);
//     return priceAmount;
// } 

function calculatePlayerPrice (){
    const numberOfPlayers = display();
    const playerPrice = document.getElementById('player-price');
    const totalPlayerPrice = parseFloat(playerPrice.value*numberOfPlayers);
    console.log(totalPlayerPrice);
    // console.log('hello');
    // return totalPlayerPrice;
    const playerExpensesValue = document.getElementById('player-expenses');
    playerExpensesValue.innerHTML = totalPlayerPrice;
    return totalPlayerPrice;
}

function calculateTotalExpenses(){
    // console.log('hello');
    const managerInput = document.getElementById('manager-price');
    const coachInput = document.getElementById('coach-price');

    const managerInputValue = parseFloat(managerInput.value);
    const coachInputValue = parseFloat(coachInput.value);
    const getTotalPlayerPrice = calculatePlayerPrice();

    const totalExpenses = managerInputValue + coachInputValue + getTotalPlayerPrice;
    const totalExpensesValue = document.getElementById('total-expenses');
    totalExpensesValue.innerText = totalExpenses;

}

// * function to calculate player expenses