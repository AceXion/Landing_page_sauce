// Option 2 - jQuery Smooth Scroll
$('.head a').on('click', function(e){
    if(this.hash !== ''){

        e.preventDefault();
        const hash = this.hash
        console.log(hash)
        $('html, body').animate(
            {
                scrollTop: $ (hash).offset().top},
            800
            
        )
    }
});

const menu = document.querySelector('#menu')
const burger = document.querySelector('.hamburger')
const link = document.querySelector('.links')

function myFunction(listen) {
    if (listen.matches) {
        menu.addEventListener('click', ()=>{
            link.style.display='block';
            burger.style.display='none'
        })
        link.addEventListener('click', ()=>{
            link.style.display='none'
            burger.style.display='block'
        })
    }
    else{
        menu.addEventListener('click', ()=>{
            link.style.display='flex';
            burger.style.display='none'
        })
        link.addEventListener('click', ()=>{
            link.style.display='flex'
            burger.style.display='none'
        })
    }
  }


const listen = window.matchMedia('(max-width:734px)')
myFunction(listen)
listen.addListener(myFunction)