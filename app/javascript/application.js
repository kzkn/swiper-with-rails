import Swiper from 'swiper'
/* import 'swiper/css' // NOTE: compile error */

document.addEventListener('DOMContentLoaded', () => {
  console.log('webpack 5')
  new Swiper('.swiper')
})
