const select = document.querySelector.bind(document);
const selectAll = document.querySelectorAll.bind(document);
const mobileBP = window.matchMedia("(max-width: 739px)");
const tabletBP = window.matchMedia("(min-width: 740px) and (max-width: 1024px)");
const mobileTabletBP = window.matchMedia("(max-width: 1024px)");

const app = {
    slickSlider: function() {
        $('.product-event__list').slick({
            autoplay: false,
            draggable: false,
            slidesToShow: 5,
            slidesToScroll: 1,
            prevArrow: `<button type='button' class='slick-prev pull-left'><i class="las la-arrow-left" aria-hidden='true'></i></button>`,
            nextArrow: `<button type='button' class='slick-next pull-right'><i class="las la-arrow-right" aria-hidden='true'></i></button>`,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 739,
                    settings: {
                        slidesToShow: 2
                    }
                },
            ]
        })

        $('.intro-image').slick({
            autoplay: true,
            draggable: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: `<button type='button'hidden="hidden" class='slick-prev pull-left'></button>`,
            nextArrow: `<button type='button'hidden="hidden" class='slick-next pull-right'></button>`,
            autoplaySpeed: 2000
        })
    },
    // Responsive on tablet and mobile
    mobileTabletResponsive: function(ev){
        if (ev.matches) {
            // cart click
            const cart = select(".header__cart");
            cart.onclick = hoverToClick;
            document.addEventListener("click", function (event) {
                const $target = select(event.target);
                if (
                    !$target.closest(".header__cart").length &&
                    select(".header__cart-list").is(":visible")
                ) {
                    select(".header__cart-list").hide();
                }
            });
        }
    },
    // Responsive on mobile
    mobileResponsive: function(ev){
        
    },
    // Responsive on tablet
    tabletResponsive: function(ev){
       
    },

    checkBreakPoint: function(){
        this.mobileResponsive(mobileBP);
        mobileBP.addListener(this.mobileResponsive);
        this.tabletResponsive(tabletBP);
        tabletBP.addListener(this.mobileResponsive);
        this.mobileTabletResponsive(mobileTabletBP);
        mobileTabletBP.addListener(this.mobileTabletResponsive);
    },

    start: function() {
        this.checkBreakPoint();
        this.slickSlider();
    }
};

app.start();

function hoverToClick(item) {
    item.display = block;
}

// check Break point

