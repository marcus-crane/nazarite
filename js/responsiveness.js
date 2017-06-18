var trees = document.getElementById('trees')
var rocks = document.getElementById('rocks')
var scroll = document.getElementById('scroll')
var story = document.getElementById('story')

// 660px width

var width = document.querySelector('body').offsetWidth
console.log(width)

if (width > 0 && width < 665) {
  trees.dataset.rellaxSpeed = -2
  rocks.dataset.rellaxSpeed = 400
  scroll.dataset.rellaxSpeed = -6
  story.dataset.rellaxSpeed = -10
} else {
  console.log('too big')
}