window.addEventListener('scroll', () => {
    if (scrollY > 30) {
        document.querySelector(".mobile-menu-container").classList += " mobile-menu-container-scroll";
    }

    else {
        document.querySelector(".mobile-menu-container").classList.remove("mobile-menu-container-scroll");
    }

})


// openinng mobile nav icon

document.querySelector('.mobile-menu .fa-bars').addEventListener('click', () => {
    document.querySelector('.mobile-menu-container-hover').style.display = 'block';
})

document.querySelector('.mobile-menu-hover .fa-xmark').addEventListener('click', () => {
    document.querySelector('.mobile-menu-container-hover').style.display = 'none';
})



// mob menu accordian


let menuMobLevel2ContainerList = document.querySelectorAll('.menu-mob-level-2-container');

let tempLevel1Count = 0;
document.querySelector('.menu-mob-level-1').addEventListener('click', () => {
    tempLevel1Count++;
    if (tempLevel1Count % 2 != 0) {
        document.querySelector('.menu-mob-level-1-up-icon').style.display = 'none';
        document.querySelector('.menu-mob-level-1-down-icon').style.display = 'inline';
        for (let i = 0; i < menuMobLevel2ContainerList.length; i++) {
            menuMobLevel2ContainerList[i].style.display = 'block';
        }
    }
    else {
        document.querySelector('.menu-mob-level-1-down-icon').style.display = 'none';
        document.querySelector('.menu-mob-level-1-up-icon').style.display = 'inline';
        for (let i = 0; i < menuMobLevel2ContainerList.length; i++) {
            menuMobLevel2ContainerList[i].style.display = 'none';
        }
    }
})

let menuMobLevel2List = document.querySelectorAll(".menu-mob-level-2");
let menuMobLevel3ContainerList = document.querySelectorAll(".menu-mob-level-3-container");
let menuMobLevel2DownIcon = document.querySelectorAll(".menu-mob-level-2-down-icon");
let menuMobLevel2UpIcon = document.querySelectorAll(".menu-mob-level-2-up-icon");

for (let i = 0; i < menuMobLevel2List.length; i++) {
    let tempLevel2Count = 0;
    menuMobLevel2List[i].addEventListener('click', (e) => {
        e.stopPropagation();
        for (let j = 0; j < menuMobLevel3ContainerList.length; j++) {
            menuMobLevel3ContainerList[j].style.display = 'none';
            menuMobLevel2DownIcon[j].style.display = 'none';
            menuMobLevel2UpIcon[j].style.display = 'inline';
        }
        tempLevel2Count++;
        if (tempLevel2Count % 2 != 0) {
            menuMobLevel2DownIcon[i].style.display = 'inline';
            menuMobLevel2UpIcon[i].style.display = 'none';
            menuMobLevel3ContainerList[i].style.display = 'block';
        }

        else {
            menuMobLevel2DownIcon[i].style.display = 'none';
            menuMobLevel2UpIcon[i].style.display = 'inline';
            menuMobLevel3ContainerList[i].style.display = 'none';
        }
    })
}

let mobLastLevelTriggerList = document.querySelectorAll(".mob-last-level-trigger");
let mobLastLevelContainerList = document.querySelectorAll(".mob-last-level-container");
let menuMobLevel3DownIcon = document.querySelectorAll(".menu-mob-level-3-down-icon");
let menuMobLevel3UpIcon = document.querySelectorAll(".menu-mob-level-3-up-icon");

for (let i = 0; i < mobLastLevelTriggerList.length; i++) {
    let templastLevelTriggerCount = 0;
    mobLastLevelTriggerList[i].addEventListener('click', (e) => {
        templastLevelTriggerCount++;
        e.stopPropagation();
        for (let j = 0; j < mobLastLevelContainerList.length; j++) {
            mobLastLevelContainerList[j].style.display = 'none';
            menuMobLevel3DownIcon[j].style.display = 'none';
            menuMobLevel3UpIcon[j].style.display = 'inline';
        }
        if (templastLevelTriggerCount % 2 != 0) {
            mobLastLevelContainerList[i].style.display = 'block';
            menuMobLevel3DownIcon[i].style.display = 'inline';
            menuMobLevel3UpIcon[i].style.display = 'none';
        }
        else {
            mobLastLevelContainerList[i].style.display = 'none';
            menuMobLevel3DownIcon[i].style.display = 'none';
            menuMobLevel3UpIcon[i].style.display = 'inline';
        }
    })
}

