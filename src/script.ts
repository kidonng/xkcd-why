import ga from 'ga-lite'

ga('create', 'UA-140053908-5', 'auto')
ga('send', 'pageview')

const colors = [
  'white',
  'black',
  'light',
  'dark',
  'primary',
  'link',
  'info',
  'success',
  'warning',
  'danger'
]
const index = Math.floor(Math.random() * colors.length)
document.querySelector('.hero')!.classList.add(`is-${colors[index]}`)

fetch('/api')
  .then(res => res.json())
  .then(({ question }) => {
    const link = `<a title="Search on Google" href="https://www.google.com/search?q=${question}">${question}</a>`
    document.querySelector('.title')!.innerHTML = link
  })
  .catch(() => {
    const text = `<span title="*Failed to load the question">why are there request errors*</span>`
    document.querySelector('.title')!.innerHTML = text
  })
