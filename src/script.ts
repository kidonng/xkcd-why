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

;(async () => {
  try {
    const res = await fetch(`/api${location.hash? `?number=${location.hash.slice(1)}`:''}`)
    const { number, question } = await res.json()
    const link = `<a title="Search on Google" href="https://www.google.com/search?q=${question}">${question}</a>`
    document.querySelector('.title')!.innerHTML = link
    location.hash = number
  } catch {
    const text = `<span title="Failed to load the question">why are there request errors</span>`
    document.querySelector('.title')!.innerHTML = text
  }
})()
