const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  a11y: {
    paginationBulletMessage: 'Тут название слайда {{index}}'
  }
});

let tabsBtn = document.querySelectorAll('.work__btn');
let tabsItemFirst = document.querySelectorAll('.work__text-block-1');
let tabsItemSecond = document.querySelectorAll('.work__text-block-2');
let tabsItemThird = document.querySelectorAll('.work__text-block-3');
let tabsItemFourth = document.querySelectorAll('.work__text-block-4');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('work__btn--active')});
    e.currentTarget.classList.add('work__btn--active');

    tabsItemFirst.forEach(function(element){ element.classList.remove('work__text-block--active')});
    tabsItemSecond.forEach(function(element){ element.classList.remove('work__text-block--active')});
    tabsItemThird.forEach(function(element){ element.classList.remove('work__text-block--active')});
    tabsItemFourth.forEach(function(element){ element.classList.remove('work__text-block--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('work__text-block--active');
  });
});

document.addEventListener("DOMContentLoaded", function() {
  let acc = new Accordion('.accordion__list', {
  duration: 700,
  elementClass: 'accordion__item',
  triggerClass: 'accordion__top',
  panelClass: 'accordion__bottom',
  showMultiple: false,

    collapse: true
});
})

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("burger").addEventListener("click", function() {
    document.querySelector(".header").classList.toggle("open")
  })

  document.getElementById("search-open").addEventListener("click", function() {
    document.querySelector(".header__container").classList.toggle("open-search")
  })

  document.getElementById("search-close").addEventListener("click", function() {
    document.querySelector(".header__container").classList.remove("open-search")
  })

  document.getElementById("search-open").addEventListener("click", function() {
    document.querySelector(".header__menu").classList.toggle("search-reset")
  })

  document.getElementById("search-close").addEventListener("click", function() {
    document.querySelector(".header__menu").classList.remove("search-reset")
  })
})

