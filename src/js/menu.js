// set up nav effects
let links = document.body.querySelectorAll('nav ul a')

links.forEach(link => {
  link.addEventListener('click', e => {
    links.forEach(link => link.classList.remove('active'))
    e.target.classList.add('active')
  })
})
