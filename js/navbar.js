window.addEventListener('scroll', ()=>{
    if(scrollY>30){
        document.querySelector(".mobile-menu-container").classList+=" mobile-menu-container-scroll";
    }

    else{
        document.querySelector(".mobile-menu-container").classList.remove("mobile-menu-container-scroll");
    }
    
})


// openinng mobile nav icon

document.querySelector('.mobile-menu .fa-bars').addEventListener('click', ()=>{
    document.querySelector('.mobile-menu-container-hover').style.display = 'block';
})

document.querySelector('.mobile-menu-hover .fa-xmark').addEventListener('click', ()=>{
    document.querySelector('.mobile-menu-container-hover').style.display = 'none';
})

