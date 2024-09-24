let count = 0;
const donateNowBtn = document.getElementById('flood-donate-1-btn')
donateNowBtn.addEventListener('click',function(){

   
    
    const donateNoakhali = getInputValueById('noakhaliDonateAmount').toFixed(2)
    const totalBalance = getTotalBalanceById('totalBalance').toFixed(2)
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
   
    const donateFeni = getInputValueById('feni-donate-amount').toFixed(2)
    const totalBalance = getTotalBalanceById('totalBalance').toFixed(2)

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
    const donateQouta = getInputValueById('qouta-donate-amount').toFixed(2)
    const totalBalance = getTotalBalanceById('totalBalance').toFixed(2)
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
    count+=1;
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
    const donateNoakhali = getInputValueById('noakhaliDonateAmount').toFixed(2)
    const donateFeni = getInputValueById('feni-donate-amount').toFixed(2) 
    const donateQouta = getInputValueById('qouta-donate-amount').toFixed(2)

    

    const historyItem = document.createElement('div')
    historyItem.className = 'bg-white p-3 rounded-md border-l-2 border-indigo-500'
    historyItem.innerHTML = 

    `
    <p class = 'text-xs text-gray-500'> ${new Date().toDateString()}</p>
    <p class = 'text-xs text-gray-500'>Income:  $${donateNoakhali}</p>
    `
   
    const historyContainer = document.getElementById('history-list')
    historyContainer.append(historyItem)

    document.getElementById('history-section').classList.remove('hidden')
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

