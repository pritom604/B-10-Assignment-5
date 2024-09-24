function getInputValueById(id){
   const getInputValue = parseFloat(document.getElementById(id).value)
   return getInputValue;
}

function getTotalBalanceById(id){
    const balance = parseFloat(document.getElementById(id).innerText)
    return balance;
}

function closeButtonById(id){
    document.getElementById(id).classList.add('hidden')

}

const closeBtn = document.getElementById('closeBtn').addEventListener('click',function(){
    closeButtonById('pop1');
})
const closeBtn1 = document.getElementById('closeBtn1').addEventListener('click',function(){
    closeButtonById('pop2');
})
const closeBtn2 = document.getElementById('closeBtn2').addEventListener('click',function(){
    closeButtonById('pop3');
})

