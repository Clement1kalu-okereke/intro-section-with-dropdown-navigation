const features = document.getElementById('features')
const company = document.getElementById('company')

const featuresArrow = document.getElementById('featuresArrow')
const companyArrow = document.getElementById('companyArrow')

const header__menu = document.getElementById('header__menu')
const nav = document.getElementById('nav');
const nav__container = document.getElementById('nav__container')
const open__close = document.getElementById('open__close')
const featuresDropdown = document.getElementById('featuresDropdown')
const companyDropdown = document.getElementById('companyDropdown')

// features.onmouseover = console.log('Mouse over features')
// features.onmouseover = featuresArrow.src = '/images/icon-arrow-up.svg'
// features.onmouseover = console.log('Mouse over features')

var isNavOpen = false

features.addEventListener('mouseover', () => {
    featuresArrow.src = '/images/icon-arrow-up.svg'
})
features.addEventListener('mouseout', () => {
    featuresArrow.src = '/images/icon-arrow-down.svg'
})


company.addEventListener('mouseover', () => {
    companyArrow.src = '/images/icon-arrow-up.svg'
})
company.addEventListener('mouseout', () => {
    companyArrow.src = '/images/icon-arrow-down.svg'
})

header__menu.addEventListener('click', () => {
    // alert('clicked')
    if (nav__container.className === 'nav__container') {
        nav__container.className += ' open'
        open__close.style.display = 'block';
        isNavOpen = true;
    }
    else {
        nav__container.className = 'nav__container'
        isNavOpen = false
    }
})

open__close.addEventListener('click', () => {
    nav__container.className = 'nav__container'
    isNavOpen = false
    open__close.style.display = 'none';
})

features.addEventListener('click', () => {
    // alert(isNavOpen)
    if (isNavOpen) {
        // featuresDropdown.className = 'dropdown featuresDropdownResponsive'
        // alert(featuresDropdown.classList)
        // featuresDropdown.style.display = 'block'
        // featuresDropdown.className = 'dropdown'
        featuresDropdown.classList.toggle('responsive')
    }
    else {
        featuresDropdown.style.display = 'none'
    }
})
company.addEventListener('click', () => {
    // alert(isNavOpen)
    if (isNavOpen) {
        // featuresDropdown.className = 'dropdown featuresDropdownResponsive'
        // alert(featuresDropdown.classList)
        // featuresDropdown.style.display = 'block'
        // featuresDropdown.className = 'dropdown'
        companyDropdown.classList.toggle('responsive')
    }
    else {
        companyDropdown.style.display = 'none'
    }
})

