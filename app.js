const mainLogin = document.querySelector('.main-login'),
overlay= document.querySelector('.overlay'),
modal = document.querySelector('.modal'),
closeMark = document.querySelector('.close-mark img'),
searchIcon = document.querySelector('#search-icon'),
searchIconBar = document.querySelector('#search-icon-bar')
searchBar = document.querySelector('.search-bar'),
navbar = document.querySelector('nav')
hamburger = document.querySelector('.hamburger'),
banner = document.querySelector('.banner'),
bannerDots = document.querySelectorAll('.dot'),
bannerItems = document.querySelectorAll('.banner__item'),
bannerItem  =document.querySelector('.banner-items'),
selectItem = document.querySelector('#selectItem'),
contentItem = document.querySelectorAll('.cat__cont-item'),
minRange = document.querySelector("#minRange"),
maxRange =document.querySelector('#maxRange'),
minOutput =document.querySelector('.output-min'),
maxOutput=document.querySelector('.output-max'),
mobileModal = document.querySelector('.mobile-modal'),
mobileMenu = document.querySelector('.mobile-menu'),
mobileClose = document.querySelector('.mobile-close'),
mobileLinks = document.querySelectorAll('.mobile-links')


let plants = [
    {
        id: 1,
        name: 'Barberton Daisy',
        img: './img/image 1.png',
        price: 119.00
    },
    {
        id: 2,
        name: 'Angel Wing Begonia',
        img: './img/image 3.png',
        price: 169.00
    },
    {
        id: 3,
        name: 'Beach Spider Lily',
        img: './img/image 4.png',
        price: 129.00
    },
    {
        id: 4,
        name: 'Blushing Bromiliad',
        img: './img/image 7.png',
        price: 139.00
    },
    {
        id: 5,
        name: "Bird's Nest Fern",
        img: './img/image 9.png',
        price: 99.00
    },
    
]

for(let i =0; i < bannerDots.length; i ++) {
    bannerDots[i].addEventListener('click', (e) => {
        console.log(i+1, window.innerWidth)

        for(let i = 0; i < bannerDots.length;i++) {
            bannerDots[i].classList.remove('active-dot')
        }

        bannerDots[i].classList.add('active-dot')

        if(i === 0) {
            bannerItem.style.transform=`translateX(${0}px)`
        } else if (i===1) {
            bannerItem.style.transform=`translateX(${-banner.clientWidth}px)`
            
        } else if (i===2) {
            bannerItem.style.transform=`translateX(${-banner.clientWidth*2}px)`
            
        }
        

    })
}

mainLogin.addEventListener('click', () => {
    overlay.classList.add('overlay-active')
    modal.classList.add('modal-active')
    
})

closeMark.addEventListener('click', () => {
    overlay.classList.remove('overlay-active')
    modal.classList.remove('modal-active')
})

searchIcon.addEventListener('click', () => {
    searchIcon.classList.add('search-icon-passive')
    searchBar.classList.add('search-bar-active')
})

console.log(searchIconBar)

searchIconBar.addEventListener('click', () => {
    searchIcon.classList.remove('search-icon-passive')
    searchBar.classList.remove('search-bar-active')
})

// create event to close search bar
document.addEventListener('keypress', (e) => {
    console.log(e.key)
    if(e.key === `Escape`) {
        console.log('working')
    }
})

hamburger.addEventListener('click', () => {
    overlay.classList.add('overlay-active')  
    mobileModal.classList.add('mobile-modal-active')
    mobileMenu.style.display='none'
    document.body.style.overflow = "hidden";


})

mobileClose.addEventListener('click', () => {
    overlay.classList.remove('overlay-active')  
    mobileModal.classList.remove('mobile-modal-active')
    mobileMenu.style.display='flex'
    document.body.style.overflow = "scroll";
})


for(let i = 0; i< mobileLinks.length; i++) {
    mobileLinks[i].addEventListener('click', () => {
        overlay.classList.remove('overlay-active')  
        mobileModal.classList.remove('mobile-modal-active')
        mobileMenu.style.display='flex'
        document.body.style.overflow = "scroll";
    })
}


let template = ``

selectItem.addEventListener('change', (e) => {
    let option = e.target.value
    
    for(let i =0; i < plants.length; i++) {
        if(plants[i].name === option) {
            console.log(plants[i])
        }
    }

    console.log(option)
    contentItem.forEach(item => {
        console.log()
        if(option === 'default')  {
            location.reload()
        }
        if(item.children[1].textContent !== option) {
            item.style.display = 'none'
        } else {
            item.style.display =''
        }
    })
    
})

console.log(minRange.value, maxRange.value)

minRange.addEventListener("input", function() {
    
    if (parseInt(minRange.value) > parseInt(maxRange.value)) {
      minRange.value = maxRange.value;
      minOutput.textContent = minRange.value
      
    }
    minOutput.textContent = +minRange.value

    contentItem.forEach(item => {
        console.log()
        if(parseInt(item.children[2].textContent.slice(1,4)) >=+minRange.value)  {
            item.style.display = 'flex'
        }
        if(parseInt(item.children[2].textContent.slice(1,4)) <= +minRange.value) {
            item.style.display = 'none'
        }
    })
});
   
maxRange.addEventListener("input", function() {
    
    if (parseInt(maxRange.value) < parseInt(minRange.value)) {
        maxRange.value = minRange.value;
        maxOutput.textContent = maxRange.value
    
    }
    maxOutput.textContent = +maxRange.value

    contentItem.forEach(item => {
        console.log()
        if(parseInt(item.children[2].textContent.slice(1,4)) <= +minRange.value)  {
            item.style.display = 'flex'
        }

        if(parseInt(item.children[2].textContent.slice(1,4)) >= +minRange.value)  {
            item.style.display = 'flex'
        }

        if(parseInt(item.children[2].textContent.slice(1,4)) >= +maxRange.value) {
            item.style.display = 'none'
        }
    })
});