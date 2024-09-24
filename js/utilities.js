function getInputValueById(id){
   const getInputValue = parseFloat(document.getElementById(id).value)
   return getInputValue;
}

function getTotalBalanceById(id){
    const balance = parseFloat(document.getElementById(id).innerText)
    return balance;
}