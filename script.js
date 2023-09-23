const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
    '<img src="image_eGcAAHpp_1692964079934_raw.jpg" alt="" />'
  title.innerHTML = 'Its my Professional Card'
  excerpt.innerHTML =
    'Hello Guys Sitesh Here , and i welcome u to my card ✌️'
  profile_img.innerHTML =
    '<img src="WhatsApp Image 2023-08-22 at 13.57.01.jpeg" alt="" />'
  name.innerHTML = 'Sitesh Kumar Samal'
  date.innerHTML = 'Dec 25, 2005'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
