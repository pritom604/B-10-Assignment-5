
const donateNowBtn = document.getElementById('flood-donate-1-btn')
donateNowBtn.addEventListener('click',function(){

   
    
    const donateNoakhali = getInputValueById('noakhaliDonateAmount')
    const totalBalance = getTotalBalanceById('totalBalance')
    if(donateNoakhali <=0 || isNaN(donateNoakhali)|| donateNoakhali > totalBalance){
        alert('Invalid Input')
        return;
    }
    const remainingBalance = totalBalance - donateNoakhali;
    document.getElementById('totalDonationNoakhali').innerText = donateNoakhali
    document.getElementById('totalBalance').innerText = remainingBalance

    document.getElementById('pop1').classList.remove('hidden')
    document.getElementById('noakhaliDonateAmount').value =''
   
    
})

const donateNowBtn2 = document.getElementById('flood-donate-2-btn')
donateNowBtn2.addEventListener('click',function(){
   
    const donateFeni = getInputValueById('feni-donate-amount')
    const totalBalance = getTotalBalanceById('totalBalance')

    if(donateFeni <=0 || isNaN(donateFeni)|| donateFeni > totalBalance){
        alert('Invalid Input')
        return;
    }
    document.getElementById('total-donation-feni').innerText = donateFeni
    const remainingBalance = totalBalance - donateFeni;
    document.getElementById('totalBalance').innerText = remainingBalance
   
    document.getElementById('pop2').classList.remove('hidden')
    document.getElementById('feni-donate-amount').value =''

})


const qoutaDonation = document.getElementById('qouta-donate-btn')
qoutaDonation.addEventListener('click', function(){
    const donateQouta = getInputValueById('qouta-donate-amount')
    const totalBalance = getTotalBalanceById('totalBalance')
    if(donateQouta <=0 || isNaN(donateQouta)|| donateQouta > totalBalance){
        alert('Invalid Input')
        return;
    }
    document.getElementById('total-donation-qouta').innerText = donateQouta
    const remainingBalance = totalBalance - donateQouta;
    document.getElementById('totalBalance').innerText = remainingBalance

    document.getElementById('pop3').classList.remove('hidden')
    document.getElementById('qouta-donate-amount').value = ''

})


const historyTab = document.getElementById('historyBtn')
historyTab.addEventListener('click', function(){
    
    historyTab.classList.add(
        
        'bg-btn-primary', 
        'rounded-lg',
        
    )
    const donationTab = document.getElementById('donationBtn')
    donationTab.classList.remove(
        'bg-btn-primary', 
        'rounded-lg',
        
    )
    document.getElementById('bannerSection').classList.add('hidden')

    const donateNoakhali = getInputValueById('noakhaliDonateAmount')
    const donateFeni = getInputValueById('feni-donate-amount')
    const donateQouta = getInputValueById('qouta-donate-amount')
    
    document.getElementById('history-section').classList.remove('hidden')
    
    const historyItem = document.createElement('div')
    historyItem.className = 'bg-white p-3 rounded-md border-l-2 border-indigo-500'
    historyItem.innerHTML = 
    
    `
    <p class = 'text-xl text-gray-500 font-bold'> DonatION for famine-2024 at Feni, Bangladesh: ${donateFeni}</p>
    <p class = 'text-xl text-gray-500 font-bold'> DonatION for famine-2024 at Feni, Bangladesh: ${donateNoakhali}</p>
    <p class = 'text-xl text-gray-500 font-bold'> DonatION for famine-2024 at Feni, Bangladesh: ${donateQouta}</p>
    <p class = 'text-xs text-gray-500'>Date: ${new Date()}</p>
    `
    const historyContainer = document.getElementById('history-list')
    historyContainer.insertBefore(historyItem,historyContainer)
  

    
})
const donationTab = document.getElementById('donationBtn')
donationTab.addEventListener('click',function(){
    donationTab.classList.add(
        'bg-btn-primary', 
        'rounded-lg'
    )
    historyTab.classList.remove(
        'bg-btn-primary', 
        'rounded-lg',
    )
    document.getElementById('bannerSection').classList.remove('hidden')
    document.getElementById('history-section').classList.add('hidden')

    


})

