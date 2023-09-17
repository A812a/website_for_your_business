



new VenoBox({
    selector: '.my-image-links',
    infinigall: true,
});

$('#CLIENTS').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 3       
        },
        1000: {
            items: 6,  
        }
    }
})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


AOS.init();

// let parg = document.querySelector('#change')

// console.log(parg)

// var text = 'Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.'

// console.log(text)

// text.split().slice(10).join(" ")

// console.log(text)


let iconTop = document.querySelector('.backToTop')
let navbar = document.querySelector('.navbar')

window.onscroll = function () {
    
    if(this.scrollY >= 651 ) {
        iconTop.classList.add('up')
    } else {
        iconTop.classList.remove('up')
    }

    if(this.scrollY >= 50 ) {
        navbar.classList.replace("bg-transparent","bg-white")
        navbar.classList.add("py-4")
    } else {
        navbar.classList.replace("bg-white","bg-transparent")
        navbar.classList.remove("py-4")
    }
}


iconTop.onclick = function ()  {
    window.scrollTo({
        top: 0 ,
        behavior: 'smooth'
    })
}
