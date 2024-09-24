let count = 0;
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

