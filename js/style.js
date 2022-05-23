// click ham-btn
const hamBtn = document.querySelector('.ham-btn');
const navigasi = document.querySelector('.navigasi');
const navigasiUl = document.querySelector('.navigasi ul');
const navigasiLi = document.querySelectorAll('.navigasi ul li');
hamBtn.addEventListener('click', function(){
   navigasi.classList.toggle('show')
   navigasiUl.classList.toggle('show')
   for (let i = 0; i < navigasiLi.length; i++) {
      navigasiLi[i].addEventListener('click', function(){
         navigasi.classList.remove('show')
         navigasiUl.classList.remove('show')
      })
   }
})

// navbar scroll 
const navbar = document.querySelector('nav');
window.addEventListener('scroll', function(){
   if (window.scrollY > 2) {
      navbar.classList.add('scroll');
   } else {
      navbar.classList.remove('scroll');
   }
})

// scroll & show content
const aboutContent = document.querySelectorAll('.about .row');
window.addEventListener('scroll', function(){
   for (let i = 0; i < aboutContent.length; i++) {
      if (window.scrollY > 645) {
         aboutContent[i].classList.add('scroll-show');
      } else {
         aboutContent[i].classList.remove('scroll-show');
      }
      if (window.scrollY > 1000) {
         aboutContent[2].classList.add('scroll-show');
      } else {
         aboutContent[2].classList.remove('scroll-show');
      }
      if (window.scrollY > 1050) {
         aboutContent[4].classList.add('scroll-show');
      } else {
         aboutContent[4].classList.remove('scroll-show');
      }
   }
})

// toggle collapse history
const collapseH = document.querySelectorAll('.collapse-header');
const collapseC = document.querySelectorAll('.collapse-content');
const arrow = document.querySelectorAll('.arrow i');
for (let j = 0; j < collapseH.length; j++) {
   collapseH[j].addEventListener('click', function(){
      collapseH[j].classList.toggle('span-collapse');
      collapseC[j].classList.toggle('span-collapse');
      arrow[j].classList.toggle('span-collapse');
   })
}

// slide click photo
const slide = document.querySelector('.desc .col:last-child');
const slideToggle = document.querySelectorAll('.desc .col:last-child ul li');
slideToggle[0].addEventListener('click', function(){
   slide.classList.add('slide-change-1');
   slide.classList.remove('slide-change-2');
   slide.classList.remove('slide-change-3');
   slide.classList.remove('slide-change-4');
})
slideToggle[1].addEventListener('click', function(){
   slide.classList.add('slide-change-2');
   slide.classList.remove('slide-change-1');
   slide.classList.remove('slide-change-3');
   slide.classList.remove('slide-change-4');
})
slideToggle[2].addEventListener('click', function(){
   slide.classList.add('slide-change-3');
   slide.classList.remove('slide-change-1');
   slide.classList.remove('slide-change-2');
   slide.classList.remove('slide-change-4');
})
slideToggle[3].addEventListener('click', function(){
   slide.classList.add('slide-change-4');
   slide.classList.remove('slide-change-1');
   slide.classList.remove('slide-change-2');
   slide.classList.remove('slide-change-3');
})

// promotion
const promotion = document.querySelector('.promotion span');
const promoDetail = document.querySelector('.detail-promo');
promotion.addEventListener('click', function(){
   promoDetail.classList.toggle('detail');
   promoDetail.addEventListener('click', function(){
      promoDetail.classList.remove('detail');
   })
})






// // svg
// const svg = document.querySelectorAll('svg path');
// for (let i = 0; i < svg.length; i++) {
//    console.info(`Letter ${i} is ${svg[i].getTotalLength()}`)
// }
