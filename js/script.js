

// donate & history buttons 
let donation = document.querySelector('#donation');
let history = document.querySelector('#history');
// donation & history box
let donationbox = document.querySelector('.donation-box')
let historybox = document.querySelector('.history-box')

donation.addEventListener("click" , ()=>{
    // button js
    donation.classList.add('active');
    donation.classList.remove('hidden')
    history.classList.add('hidden');
    history.classList.remove('active');

    // box js
    donationbox.classList.add('active')
    donationbox.classList.remove('hidden')
    historybox.classList.add('hidden')
    historybox.classList.remove('active')

})

history.addEventListener('click' , ()=>{
    // button js
    history.classList.add('active');
    donation.classList.add('hidden')
    donation.classList.remove('active')
    history.classList.remove('hidden')

    // box js
    historybox.classList.add('active')
    historybox.classList.remove('hidden')
    donationbox.classList.add('hidden')
    donationbox.classList.remove('active')
})





// my ballence

let ballance = document.querySelector('#money').value = 5500 ;


// donation one
let donating = document.querySelector('.donating').value;
let dntingbtn = document.querySelector('.dnting-btn');
dntingbtn.addEventListener('click' , ()=>{
    document.querySelector('#money').value = ballance - document.querySelector('.donating').value
    document.querySelector('.donating').value = ''
    if( document.querySelector('#money').value < 0 ){
        document.querySelector('#money').value = '!'
    }
    if(document.querySelector('#money').value < 5500){
        document.querySelector('.modal').classList.add('show')
    }
})

// donationn two
let donating2 = document.querySelector('.donating2').value;
let dntingbtn2 = document.querySelector('.dnting-btn2');
dntingbtn2.addEventListener('click' , ()=>{
    document.querySelector('#money').value = ballance - document.querySelector('.donating2').value
    document.querySelector('.donating2').value = ''
    if( document.querySelector('#money').value < 0 ){
        document.querySelector('#money').value = '!'
    }
    if(document.querySelector('#money').value < 5500){
        document.querySelector('.modal').classList.add('show')
    }
})


// donationn three
let donating3 = document.querySelector('.donating3').value;
let dntingbtn3 = document.querySelector('.dnting-btn3');
dntingbtn3.addEventListener('click' , ()=>{
    document.querySelector('#money').value = ballance - document.querySelector('.donating3').value
    document.querySelector('.donating3').value = ''
    if( document.querySelector('#money').value < 0 ){
        document.querySelector('#money').value = '!'
    }
    if(document.querySelector('#money').value < 5500){
        document.querySelector('.modal').classList.add('show')
    }
})

document.querySelector('.close').addEventListener('click' , ()=>{
    document.querySelector('.modal').classList.remove('show')
})