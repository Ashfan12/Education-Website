//change navbar style on scroll

window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})


// Show/hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  faq.addEventListener('click', () =>{
    faq.classList.toggle('open');

    // change icon
    const icon = faq.querySelector('.faq-icon i');
    if(icon.className === 'fa-solid fa-plus') {
      icon.className = 'fa-solid fa-minus'
    } else {
      icon.className = 'fa-solid fa-plus'
    }
  })
})


// show hide nav menu

const menu = document.querySelector('.nav-menu')
const menuBtn = document.querySelector('#open-menu-btn')
const closeMenu = document.querySelector('#close-menu-btn')

menuBtn.addEventListener('click', () => {
  menu.style.display = 'flex';
  closeMenu.style.display = 'inline-block';
  menuBtn.style.display = 'none';
});

closeMenu.addEventListener('click', () => {
  menu.style.display = 'none';
  menuBtn.style.display = 'inline-block';
  closeMenu.style.display = 'none';
})