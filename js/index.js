const donateNowBtn = document.getElementById('flood-donate-1-btn')
donateNowBtn.addEventListener('click',function(){
    const donateNoakhali = getInputValueById('noakhaliDonateAmount')
    document.getElementById('totalDonationNoakhali').innerText = donateNoakhali
    const totalBalance = getTotalBalanceById('totalBalance')
    const remainingBalance = totalBalance - donateNoakhali;
    document.getElementById('totalBalance').innerText = remainingBalance
    
   
    
})
const donateNowBtn2 = document.getElementById('flood-donate-2-btn')
donateNowBtn2.addEventListener('click',function(){
    const donateFeni = getInputValueById('feni-donate-amount') 
    document.getElementById('total-donation-feni').innerText = donateFeni
    const totalBalance = getTotalBalanceById('totalBalance')
    const remainingBalance = totalBalance - donateFeni;
    document.getElementById('totalBalance').innerText = remainingBalance
   
    
})

const qoutaDonation = document.getElementById('qouta-donate-btn')
qoutaDonation.addEventListener('click', function(){
    const donateQouta = getInputValueById('qouta-donate-amount')
    document.getElementById('total-donation-qouta').innerText = donateQouta
    const totalBalance = getTotalBalanceById('totalBalance')
    const remainingBalance = totalBalance - donateQouta;
    document.getElementById('totalBalance').innerText = remainingBalance
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
    


})

