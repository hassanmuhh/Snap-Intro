const featuresLinkLi = document.querySelector('.features-link-li');
const companyLinkLi = document.querySelector('.company-link-li');
const featuresMenu = document.querySelector('.features-menu');
const companyMenu = document.querySelector('.company-menu');
const sectionLinks = document.querySelector('.sections-links');
const headerBtns = document.querySelector('.header-btns')
const mobileNavBtn = document.querySelector('.mobileNav-btn');

const mobFeaturesMenu = document.querySelector('.features-mob-menu');
const mobCompanyMenu = document.querySelector('.company-mob-menu');



if (window.innerWidth <= 704) {
  mobileNavBtn.classList.remove('none')
  sectionLinks.style.display = 'none';
  headerBtns.style.display = 'none'
} else {
  mobileNavBtn.classList.add('none');
  sectionLinks.style.display = 'flex';
  headerBtns.style.display = 'flex'
}


function showMobileNav() {
  mobileNavBtn.addEventListener('click', () => {
    const mobileNav = document.querySelector('.mobileNavWrapper');
    mobileNav.classList.toggle('none')
    if (mobileNavBtn.src.includes('icon-close-menu')) {
      mobileNavBtn.src = '/images/icon-menu.svg'; // Change to open menu icon
      document.body.style.backgroundColor = 'transparent';
    } else {
      mobileNavBtn.src = '/images/icon-close-menu.svg'; // Change to close menu icon
      document.body.style.backgroundColor = 'rgba(0,0,0,0.8)';
    }
  })
}

function toggleMenu(menu) {
  const parent = menu.parentElement;
  const link = parent.querySelector('a');

  link.addEventListener('mouseenter', () => {
    const image = parent.querySelector('img');
    image.src = '/images/icon-arrow-up.svg';
    image.style.cssText = `
    filter: brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%);
    `;
    menu.classList.remove('none')
  })

  link.addEventListener('mouseleave', () => {
    const image = parent.querySelector('img');
    image.src = '/images/icon-arrow-down.svg';
    image.style.cssText = `
      filter: none;
    `;
    menu.classList.add('none')
  })
}


function toggleMobileMenu(menu) {
  const parent = menu.parentElement;
  const link = parent.querySelector('a');

  link.addEventListener('click', () => {
    const image = parent.querySelector('img');
    image.src = '/images/icon-arrow-up.svg';
    image.style.cssText = `
    filter: brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%);
    `;
    menu.classList.remove('none')
  })

  link.addEventListener('mouseleave', () => {
    const image = parent.querySelector('img');
    image.src = '/images/icon-arrow-down.svg';
    image.style.cssText = `
      filter: none;
    `;
    menu.classList.add('none')
  })
}

showMobileNav()
toggleMenu(featuresMenu)
toggleMenu(companyMenu)
toggleMobileMenu(mobFeaturesMenu)
toggleMobileMenu(mobCompanyMenu)
