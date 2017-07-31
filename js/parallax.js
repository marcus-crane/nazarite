
var trees = document.getElementById('trees')
var rocks = document.getElementById('rocks')
var scroll = document.getElementById('scroll')
var story = document.getElementById('story')

// 660px width

var width = document.querySelector('body').offsetWidth

if (width > 0 && width <= 399) {
  trees.dataset.rellaxSpeed = -2
  rocks.dataset.rellaxSpeed = 10
  scroll.dataset.rellaxSpeed = -5
  story.dataset.rellaxSpeed = -1
}

if (width > 400 && width <= 665) {
  trees.dataset.rellaxSpeed = -2
  rocks.dataset.rellaxSpeed = 10
  scroll.dataset.rellaxSpeed = -6
  story.dataset.rellaxSpeed = -1.5
}

if (width >= 666 && width <= 800) {
  trees.dataset.rellaxSpeed = -2
  rocks.dataset.rellaxSpeed = 10
  scroll.dataset.rellaxSpeed = -7
  story.dataset.rellaxSpeed = -2
}

if (width >= 801 && width <= 1000) {
  trees.dataset.rellaxSpeed = -2
  rocks.dataset.rellaxSpeed = 10
  scroll.dataset.rellaxSpeed = -8
  story.dataset.rellaxSpeed = -2
}

if (width > 1000) {
  trees.dataset.rellaxSpeed = -2
  rocks.dataset.rellaxSpeed = 10
  scroll.dataset.rellaxSpeed = -8
  story.dataset.rellaxSpeed = -5
}