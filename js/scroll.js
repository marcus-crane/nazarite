var trees = document.querySelector('#trees')
var scroll = document.querySelector('#scroll')
var story = document.querySelector('#story')
var rocks = document.querySelector('#rocks')

var scrollMargin = 20
var treeMargin = 0
var rockMargin = 0

document.addEventListener('scroll', function () {
  console.log('scrolling')
  console.log(scrollMargin + '%')
  scrollMargin = scrollMargin - 0.4
  scroll.style.marginTop = scrollMargin + '%'
  treeMargin = treeMargin - 0.7
  trees.style.marginTop = treeMargin + '%'
  rockMargin = rockMargin - 0.5
  rocks.style.marginTop = rockMargin + '%'
})
