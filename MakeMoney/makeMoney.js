



(function() {

const makeMoneyButton = document.getElementById('button');
// console.log(makeMoneyButton);
makeMoneyButton.addEventListener('click', () => {
    const totalCoins = document.getElementById('howManyInput').value;
        console.log(totalCoins);
    let whichCoinsInput = document.getElementById('whichCoinsSelection').value;
    // console.log(whichCoinsInput);
        if (whichCoinsInput === 'penny') {
            const pennies = document.getElementById('penny').value;
            console.log(pennies);
        } else if (whichCoinsInput === 'nickel') {
            const nickels = document.getElementById('nickel').value;
            console.log(nickels);
        } else if (whichCoinsInput === 'dime') {
            const dimes = document.getElementById('dime').value;
            console.log(dimes);
        } else if (whichCoinsInput === 'quarter') { 
            const quarters = document.getElementById('quarter').value;
            console.log(quarters);
        } else {
            alert("Invalid selection!  Please choose a coin type.");
        }
            //The above logs as it should - right now.

})


}())