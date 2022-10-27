//행버거 메뉴
const habergerbar = document.querySelector('.hamberger-bar')
const habergermenu = document.querySelector('.hamberger-menu')
console.log(habergerbar, habergermenu)

const block = 'block'
const none = 'none'

const habergerli = document.querySelectorAll('.hamberger-bar ul li')
console.log(habergerli)
habergerbar.addEventListener('click', function () {
  if (habergermenu.style.display == none) {
    let persent = '%'
    let pixel ='px'

    habergermenu.style.display = block;
    let liwidthvalue = 40;
    habergerli[2].style.display = none;
    habergerli[0].style.transition = '1s';
    
    habergerli[0].style.width = liwidthvalue + persent;
    habergerli[0].style.marginTop = 10 + pixel;
    habergerli[0].style.transform = 'rotate(-50deg)';
    
    habergerli[1].style.width = liwidthvalue + persent;
    habergerli[1].style.marginTop = -15 + pixel;
    habergerli[1].style.transition = '1s';
    habergerli[1].style.transform = 'rotate(46deg)';
    

  } else {
 
    habergermenu.style.display = none;

    habergerli[2].style.display = block;
    habergerli[1].style.transform = none;
    habergerli[1].style.marginTop= '0px';
    habergerli[0].style.transform = none;
    let fifty = 50
    habergerli[0].style.width = fifty + '%';
    habergerli[1].style.width = fifty + '%';
    
    
  }
})

const container = document.querySelector('.container')
const ballon = document.querySelector('.ballon')
const input = document.querySelector('.input input')
console.log(ballon, input)

let isState = true;

input.addEventListener('mouseover', function () {
  ballon.classList.add('on');
  })
  input.addEventListener('mouseout', function () {
  ballon.classList.remove('on');

    ballon.classList.add('off');
    })
  

  function search (){
    location.href= "./HTML/category.html"
  }

