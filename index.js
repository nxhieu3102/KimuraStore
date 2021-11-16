const $$ = document.querySelectorAll.bind(document);
const mobileBP = window.matchMedia("(max-width: 739px)")
const tabletBP = window.matchMedia("(min-width: 740px) and (max-width: 1024px)")
const mobileTabletBP = window.matchMedia("(max-width: 1024px)")

function hoverToClick(item) {
    item.display = block;
}

function slickSlider(className, slidesToShow, slidesToScroll, isAuto){
    $(className).slick({
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
        draggable: false,
        autoplay: isAuto,
        autoplaySpeed: 500,
        prevArrow:`<button type='button' class='slick-prev pull-left'><i class="las la-arrow-left" aria-hidden='true'></i></button>`,
        nextArrow:`<button type='button' class='slick-next pull-right'><i class="las la-arrow-right" aria-hidden='true'></i></button>`,
    });
}

// Responsive mobile and tablet
function mobileTabletResponsive(ev) {
    if (ev.matches) { 
        // cart click
        const cart = $('.header__cart');
        cart.onclick = hoverToClick;
        document.addEventListener('click', function(event){
            const $target = $(event.target);
            if(!$target.closest('.header__cart').length && 
                $('.header__cart-list').is(":visible")) {    
                $('.header__cart-list').hide();
            } 
        })
    }
}

// Responsive mobile
function mobileResponsive(ev) {
    if(ev.matches) {
        // slickSlider
        slickSlider('.product-event__list', 2, 1);
    }
}

// Responsive tablet
function tabletResponsive(ev) {
    if(ev.matches) {
        // slickSlider
        slickSlider('.product-event__list', 3, 1);
        slickSlider('.intro-image', 1, 1, true);
    }
}

// check Break point
mobileResponsive(mobileBP);
mobileBP.addListener(mobileResponsive);
tabletResponsive(tabletBP);
tabletBP.addListener(mobileResponsive);
mobileTabletResponsive(mobileTabletBP) ;
mobileTabletBP.addListener(mobileTabletResponsive); 

slickSlider('.product-event__list', 5, 1, false);
slickSlider('.intro-image', 1, 1, true);

