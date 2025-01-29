
// mobile header features
let mobHeaderFaetures = document.querySelector('.mob-header-faetures');
        let mobHeaderFaeturesItems = document.querySelectorAll('.mob-header-faetures div');

        let mobHeaderFaeturesItemsCount = mobHeaderFaeturesItems.length;

        let tempCount = 1;

        function showFeatures() {
            if (tempCount == mobHeaderFaeturesItemsCount) {
                tempCount = 0;
            }
            for (let i = 0; i < mobHeaderFaeturesItemsCount; i++) {

                if (i == tempCount) {
                    mobHeaderFaeturesItems[i].style.display = 'block';
                }
                else {
                    mobHeaderFaeturesItems[i].style.display = 'none';
                }
            }
            tempCount++;
        }

        setInterval(showFeatures, 2000);


// mobile footer accordian
let mobileFooterAccordionTitle =  document.querySelectorAll('.mobile-footer-accordion');
let mobileFooterAccordionItem =  document.querySelectorAll('.mobile-footer-accordion-item');
let mobileAccordionDownArrowList = document.querySelectorAll(".mobile-footer-accordion .fa-caret-down");
let mobileAccordionUpArrowList = document.querySelectorAll(".mobile-footer-accordion .fa-caret-up");


for(let i=0; i<mobileFooterAccordionItem.length; i++){
    let temp = 0;
    mobileFooterAccordionTitle[i].addEventListener('click', ()=>{
        temp++;
        if(temp%2!=0){
        mobileFooterAccordionItem[i].style.display = "block";
        mobileAccordionDownArrowList[i].style.display = "block";
        mobileAccordionUpArrowList[i].style.display = "none";
        }

        else{
        mobileFooterAccordionItem[i].style.display = "none";
        mobileAccordionDownArrowList[i].style.display = "none";
        mobileAccordionUpArrowList[i].style.display = "block";
        }
    })
}



window.addEventListener('scroll', ()=>{
    
    if(scrollY>600){
        document.querySelector('.scroll-to-top').style.display = "block";
    }

    else{
        document.querySelector('.scroll-to-top').style.display = "none";
    }
})