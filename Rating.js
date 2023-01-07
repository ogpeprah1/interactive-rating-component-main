let submit = document.getElementById('Submit')
let  mainElement = document.getElementById('MainElement')
let feedBack = document.getElementById('feedbackMessage')

let ratesArray = [];
let ratesDiv = document.querySelector('.rates');
let spanElements = ratesDiv.querySelectorAll('span');

spanElements.forEach(function(element) {
    ratesArray.push(element.innerHTML);
});
let firstRateItem = document.getElementById('one');
let secondRateItem = document.getElementById('two');
let thirdRateItem = document.getElementById('three');
let fourthRateItem = document.getElementById('four');
let fifthRateItem = document.getElementById('five')

let selectionNumber = document.getElementById('SelectionNumber')

firstRateItem.addEventListener('click', function(){
    firstRateItem.style.backgroundColor = 'hsl(216, 12%, 54%)'
    selectionNumber.innerHTML = ratesArray[0]
})

secondRateItem.addEventListener('click', function(){
    secondRateItem.style.backgroundColor = 'hsl(216, 12%, 54%)'
    selectionNumber.innerHTML = ratesArray[1]
})

thirdRateItem.addEventListener('click', function(){
    thirdRateItem.style.backgroundColor = 'hsl(216, 12%, 54%)'
    selectionNumber.innerHTML = ratesArray[2]
})

fourthRateItem.addEventListener('click', function(){
    fourthRateItem.style.backgroundColor = 'hsl(216, 12%, 54%)'
    selectionNumber.innerHTML = ratesArray[3]
})

fifthRateItem.addEventListener('click', function(){
    fifthRateItem.style.backgroundColor = 'hsl(216, 12%, 54%)'
    selectionNumber.innerHTML = ratesArray[4]
})

submit.addEventListener('click', function(){
    mainElement.style.display = 'none';
    feedBack.style.display = 'flex'
})
