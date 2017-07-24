var chapter1 = new tingle.modal({ cssClass: ['chapter1-modal'] })
var chapter2 = new tingle.modal({ cssClass: ['chapter2-modal'] })
var chapter3 = new tingle.modal({ cssClass: ['chapter3-modal'] })
var chapter4 = new tingle.modal({ cssClass: ['chapter4-modal'] })

let btn1 = document.querySelector('.chapter1')
let btn2 = document.querySelector('.chapter2')
let btn3 = document.querySelector('.chapter3')
let btn4 = document.querySelector('.chapter4')

btn1.addEventListener('click', function() { chapter1.open() })
btn2.addEventListener('click', function() { chapter2.open() })
btn3.addEventListener('click', function() { chapter3.open() })
btn4.addEventListener('click', function() { chapter4.open() })

chapter1.setContent(document.querySelector('#chapter1').innerHTML)
chapter2.setContent(document.querySelector('#chapter2').innerHTML)
chapter3.setContent(document.querySelector('#chapter3').innerHTML)
chapter4.setContent(document.querySelector('#chapter4').innerHTML)