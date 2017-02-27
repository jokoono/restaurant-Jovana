$(document).ready(function () {

    $('.search').click(function (e) {
        e.preventDefault();
        $('.form-group').toggle();

    });

    $('.core-slider').coreSlider({

        // autoplay interval
        interval: 5000,

        // infinite loop
        loop: true,

        // enable autoplay
        slideshow: false,

        // enable auto resize depending on the screen size
        resize: true,

        // pause on hover
        pauseOnHover: true,

        // start on hover
        startOnHover: false,

        // slider selectors
        sliderSelector: '.core-slider_list',
        viewportSelector: '.core-slider_viewport',
        itemSelector: '.core-slider_item',

        // enable nav arrows
        navEnabled: false,

        // selectors for nav arrows
        navSelector: '.core-slider_nav',
        navItemNextSelector: '.core-slider_arrow__right',
        navItemPrevSelector: '.core-slider_arrow__left',

        // enable nav dots
        controlNavEnabled: true,

        // selectors for nav dots
        controlNavSelector: '.core-slider_control-nav',
        controlNavItemSelector: 'core-slider_control-nav-item',

        // will be added when slider is fully loaded
        loadedClass: 'is-loaded',

        // will be added to cloned slides (see option 'clone')
        clonedClass: 'is-cloned',

        // will be added when item is disabled (in most of cases - item will be display: noned)
        disabledClass: 'is-disabled',

        // will be added to active items (for example control navs, etc.)
        activeClass: 'is-active',

        // Reload gif's on slide change for replaying cycled animation inside current slide
        reloadGif: false,

        // Indicates, that at begin and at end of slider carousel items will be cloned to create 'infitite' carousel illusion
        clone: false,

        // How mutch items will be placed inside viewport. 
        // Leave 1 if this is slider, 2 ot more - it will look like a carousel                                           
        items: 1,

        // How many items must be slided by one action (NOTE: Must be less than 'items' option)                             
        itemsPerSlide: 1,

        // How mutch items will be cloned at begin and at end of slider                    
        cloneItems: 0

    });


    $('.breakfast-slide').slick({
        infinite: true,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    arrows: true


                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }

        ]
    });


    $('.people-slide').slick({
       
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });



});

