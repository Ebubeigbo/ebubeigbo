// SHOW SIDEBAR
const navMenu = document.getElementById('sidebar'),
navToggle =  document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')
// SIDEDBAR SHOW
// Validate If Constant exist
if(navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-sidebar")
    })
}

// SIDEBAR HIDDEN
// Validate If Constant Exists 
if(navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-sidebar")
    })
}

// SKILLS TABS
const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data-content]')

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(tab.dataset.target)

            tabContent.forEach(tabContents => {
                tabContents.classList.remove("skills-active")
            })

            target.classList.add('skills-active')


            tabs.forEach(tab => {
                tab.classList.remove("skills-active")
            })

            tab.classList.add('skills-active')
        })
    })

// MIXITUP FILTER PORTFOLIO
let mixerPortfolio = mixitup('.work-container', {
    selectors: {
        target: '.work-card'
    },
    animation: {
        duration: 300
    }
});

// Link Active Work
const linkWork = document.querySelectorAll('.work-item')

function activeWork() {
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener("click", activeWork))

// Work Popup
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("work-button")) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup() {
    document.querySelector(".portfolio_popup").classList.toggle("open");
}

document.querySelector(".portfolio_popup-close").addEventListener("click", togglePortfolioPopup)


function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(".work-img").src;
    document.querySelector(".portfolio_popup-subtitle span").innerHTML = portfolioItem.querySelector(".work-title").innerHTML;
    document.querySelector(".portfolio_popup-body h3").innerHTML = portfolioItem.querySelector(".portfolio-item-details h3").innerHTML;
    document.querySelector(".portfolio_popup-body p").innerHTML = portfolioItem.querySelector(".portfolio-item-details p").innerHTML;
    document.querySelector(".portfolio_popup-body ul").innerHTML = portfolioItem.querySelector(".portfolio-item-details ul").innerHTML;
}

// SERVICES MODAL
const modalViews = document.querySelectorAll('.services-modal'),
      modalBtns = document.querySelectorAll('.services-button'),
      modalCloses = document.querySelectorAll('.service-modal-close')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

// SWIPER TESTIMONIAL
let swiper = new Swiper(".testimonial-container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }, 
});

// INPUT ANIMATION
const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus")
}

function blurFunc() {
    let parent = this.parentNode;
    if(this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    let scrollY = window.pageYOffset;
    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add("active-link")
        }
        else
        {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove("active-link")
        }
    })
}

// SHOW SCROLL UP