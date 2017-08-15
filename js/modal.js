// Button 1
var chapter1 = new tingle.modal({ cssClass: ['chapter1-modal'] })
var btn1 = document.querySelector('.chapter1')
btn1.addEventListener('click', function() { chapter1.open() })
chapter1.setContent(document.querySelector('#chapter1').innerHTML)

// Button 2
var chapter2 = new tingle.modal({ cssClass: ['chapter2-modal'] })
var btn2 = document.querySelector('.chapter2')
btn2.addEventListener('click', function() { chapter2.open() })
chapter2.setContent(document.querySelector('#chapter2').innerHTML)

// Button 3
var chapter3 = new tingle.modal({ cssClass: ['chapter3-modal'] })
var btn3 = document.querySelector('.chapter3')
btn3.addEventListener('click', function() { chapter3.open() })
chapter3.setContent(document.querySelector('#chapter3').innerHTML)

// Button 4
var chapter4 = new tingle.modal({ cssClass: ['chapter4-modal'] })
var btn4 = document.querySelector('.chapter4')
btn4.addEventListener('click', function() { chapter4.open() })
chapter4.setContent(document.querySelector('#chapter4').innerHTML)

// Credits
var credits = new tingle.modal({ cssClass: ['credits-modal'] })
var creditsBtn = document.querySelector('#credits')
creditsBtn.addEventListener('click', function() { credits.open() })
credits.setContent(document.querySelector('#credits-modal').innerHTML)