const list = document.querySelector('header ul')
const menuBtn = document.querySelector('.btn_cont')
const searchBox = document.querySelector('.search span')
const searchBtn = document.querySelector('.search button')

menuBtn.addEventListener('click', (event)=>{
  event.preventDefault()
  list.classList.toggle('active')
})
searchBtn.addEventListener('click', (event)=>{
  event.preventDefault()
  searchBox.classList.toggle('active')
  if(searchBox.classList == 'active'){
    searchBox.querySelector('input').focus()
  }
})