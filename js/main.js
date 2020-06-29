let nav = document.getElementById('nav');
let benefits = document.getElementById('benefits');
let benefitsInited = false;

let about = document.getElementById('about');
let aboutInited = false;

let guarantee = document.getElementById('guarantee');
let guaranteeInited = false;

let grilles = document.getElementById('grilles_info');
let grillesInited = false;

let gates = document.getElementById('gates_info');
let gatesInited = false;

let indoor = document.getElementById('indoor_info');
let indoorInited = false;


let navBtn = document.querySelector('#nav .navbar-toggler');
if (navBtn) {
    navBtn.onclick = e => {
        if (navBtn.ariaExpanded == 'true') {
            nav.style.background = 'none';
        } else {
            nav.style.background = '#27313A'
        }
    }
}


scrollHandler();

window.onscroll = scrollHandler;

function scrollHandler(e) {
    if (window.pageYOffset === 0) {
        nav.style.background = 'none';
    } else {
        nav.style.background = '#27313A'
    }
    if (!benefitsInited && benefits && window.pageYOffset > benefits.offsetTop - 500) {
        initBenefitAnimation();
    }
    if (!aboutInited && about && window.pageYOffset > about.offsetTop - 500) {
        initAboutAnimation();
    }
    if (!guaranteeInited && guarantee && window.pageYOffset > guarantee.offsetTop - 500) {
        initGuaranteeAnimation();
    }
    if (!grillesInited && grilles && window.pageYOffset > grilles.offsetTop - 500) {
        initGrillesAnimation();
    }
    if (!gatesInited && gates && window.pageYOffset > gates.offsetTop - 500) {
        initGatesAnimation();
    }
    if (!indoorInited && indoor && window.pageYOffset > indoor.offsetTop - 500) {
        initIndoorAnimation();
    }
}

function initBenefitAnimation() {
    let benefitTitle = document.querySelectorAll('#benefits h2');
    let benefitItems = document.querySelectorAll('#benefits div.animate__animated');
    let line = document.querySelectorAll('#benefits hr.animate__animated')
    if (benefitTitle.length && benefitItems.length) {
        benefitTitle[0].style.opacity = "1";
        benefitTitle[0].classList.add('animate__backInLeft')

        let index = 0;
        let interval = setInterval(() => {
            if (index < benefitItems.length) {
                const element = benefitItems[index];
                element.style.opacity = "1";
                element.classList.add('animate__backInLeft')
                index++;
            } else {
                line[0].style.opacity = "1";
                line[0].classList.add('animate__backInLeft')
                clearInterval(interval)
            }
        }, 100);
        benefitsInited = true;
    }

}

function initAboutAnimation() {
    let title = document.querySelectorAll('#about h2');
    let content = document.querySelectorAll('#about div.animate__animated');
    if (title.length && content.length) {
        title[0].style.opacity = 1;
        title[0].classList.add('animate__backInLeft')
        content[0].classList.add('animate__bounceInDown')
        content[0].style.opacity = 1;
        aboutInited = true
    }
}

function initGuaranteeAnimation() {
    let title = document.querySelectorAll('#guarantee h2');
    if (title.length) {
        title[0].style.opacity = "1";
        title[0].classList.add('animate__backInLeft')
    }
    let items = document.querySelectorAll('#guarantee div.animate__animated');

    if (items.length) {
        let index = 0;
        let interval = setInterval(() => {
            const element = items[index];
            element.style.opacity = "1";
            element.classList.add('animate__bounceInDown')
            index++;
            if (index === items.length) clearInterval(interval)
        }, 100);
        guaranteeInited = true;
    }
}

function initGrillesAnimation() {
    let items = document.querySelectorAll('#grilles_info div.animate__animated');
    if (items.length) {
        let index = 0;
        let interval = setInterval(() => {
            const element = items[index];
            element.style.opacity = "1";
            index % 2 ? element.classList.add('animate__bounceInRight') : element.classList.add('animate__bounceInLeft')
            index++;
            if (index === items.length) clearInterval(interval)
        }, 100);
        grillesInited = true;
    }
}
function initGatesAnimation() {
    let items = document.querySelectorAll('#gates_info div.animate__animated');
    if (items.length) {
        let index = 0;
        let interval = setInterval(() => {
            const element = items[index];
            element.style.opacity = "1";
            index % 2 ? element.classList.add('animate__bounceInRight') : element.classList.add('animate__bounceInLeft')
            index++;
            if (index === items.length) clearInterval(interval)
        }, 100);
        grillesInited = true;
    }
}
function initIndoorAnimation() {
    let items = document.querySelectorAll('#indoor_info div.animate__animated');
    if (items.length) {
        let index = 0;
        let interval = setInterval(() => {
            const element = items[index];
            element.style.opacity = "1";
            index % 2 ? element.classList.add('animate__bounceInRight') : element.classList.add('animate__bounceInLeft')
            index++;
            if (index === items.length) clearInterval(interval)
        }, 100);
        grillesInited = true;
    }
}
