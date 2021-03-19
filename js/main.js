$(document).ready(function () {
    "use strict";

    
    $(window).on('load', function () { // makes sure that whole site is loaded
        $('#status').fadeOut();
        $('#loader').delay(250).fadeOut('slow');
        $('#preloader').addClass('show');
        setTimeout(function (){ 
            $('#preloader img').addClass('fadeIn');        
        }, 2000);
        setTimeout(function (){ 
            $('#preloader').removeClass('show');
            $('#preloader img').addClass('fadeOut');  
        }, 5000);
        setTimeout(function (){ 
            $('#home-bg-video').addClass('animate__animated animate__fadeInRight homeShow'); 
            $('#home-bg-video').trigger('play');
        }, 5000);
    });

    var myFullpage = new fullpage('#fullpage', {
        navigation: true,
        anchors: ['sd-home', 'sd-intro', 'sd-every', 'sd-partners', 'sd-welcomeHome', 'sd-floorplans',
            'sd-fixtures', 'sd-doorstep', 'sd-doorstep-1', 'sd-doorstep-2',
            'sd-doorstep-3', 'sd-video', 'sd-map', 'sd-contact-us', 'sd-disclaimer','sd-backpage'
        ],
        slidesNavigation: false,
        scrollBar: true,
        verticalCentered: false,
        scrollOverflowReset: true,
        scrollHorizontally: true,
        scrollingSpeed: 800,
        autoScrolling: true,
        normalScrollElements: '.vs-img, .sale-intro, #map',
        touchSensitivity: 15,
        fitToSectionDelay: 100,
        fitToSection: true,

        afterLoad: function (anchorLink, index) {             
            if ($('body').hasClass('fp-viewing-sd-home')) {                                
            }
            
            if ($('body').hasClass('fp-viewing-sd-intro')) {                           
                $('#scroll-down').text('sunday every day');
                $('#scroll-up').text('home');
                $('#home-modal #home-modal-container').addClass('show');                
                $('#home-modal .home-modal-box').addClass('show');
                $('#home-modal .home-modal-content').addClass('show');
            }

            if ($('body').hasClass('fp-viewing-sd-every')) {                
                $('#scroll-down').text('creative partners');
                $('#scroll-up').text('Sunday Every day');  
                $('#sd-everyday-carousel').addClass('show');
            }

            if ($('body').hasClass('fp-viewing-sd-partners')) {                
                $('#scroll-down').text('Residences');
                $('#scroll-up').text('Creative partners');                
            }


            if ($('body').hasClass('fp-viewing-sd-welcomeHome')) {                
                $('#scroll-down').text('Floor plans');
                $('#scroll-up').text('Welcome Home');  
            }

            if ($('body').hasClass('fp-viewing-sd-floorplans')) {                
                $('#scroll-down').text('Fixtures & finishes');
                $('#scroll-up').text('Residences');  
            }

            if ($('body').hasClass('fp-viewing-sd-fixtures')) {                
                $('#scroll-down').text('On your Doorstep');
                $('#scroll-up').text('Fixtures & finishes');
                $('#doorstep').css('z-index', "1"); 
                $('.showModal').click(function() { 
                    $('#fixtures').css('z-index', "unset"); 
                    $('#doorstep').css('z-index', "-1");               
                })
                $('.close').click(function() { 
                    $('#fixtures').css('z-index', "2");
                    $('#doorstep').css('z-index', "1");                
                })
            }

            // Door step 1.
            if ($('body').hasClass('fp-viewing-sd-doorstep')) {                
                $('#scroll-down').text('On your Doorstep');
                $('#scroll-up').text('ON YOUR DOORSTEP'); 
                $('.doorstep-img-container-right img.first-img').addClass('show'); 
                setTimeout(function () { 
                    $('.doorstep-img-container-right img.second-img').addClass('show');      
                 }, 1500);
                $('.doorstep-container-top .col-md-4').addClass('show');
            }

            if ($('body').hasClass('fp-viewing-sd-doorstep-1')) {                
                $('#scroll-down').text('ON YOUR DOORSTEP');
                $('#scroll-up').text('ON YOUR DOORSTEP');  
                $('#doorstep-1 .dp-container-left').addClass('show');
                $('#doorstep-1 .doorstep-container-mid .col-md-4').addClass('show');
            }

            if ($('body').hasClass('fp-viewing-sd-doorstep-2'))  {                
                $('#scroll-down').text('ON YOUR DOORSTEP');
                $('#scroll-up').text('ON YOUR DOORSTEP'); 
                $('#doorstep-2 .dp-container-right').addClass('show');
                $('#doorstep-2 .doorstep-container-mid .col-md-4').addClass('show');
            }

            if ($('body').hasClass('fp-viewing-sd-doorstep-3')) {                
                $('#scroll-down').text('ON YOUR DOORSTEP');
                $('#scroll-up').text('ON YOUR DOORSTEP');  
                $('#doorstep-3 .dp-container-left').addClass('show');
                $('#doorstep-3 .doorstep-container-mid .col-md-4').addClass('show');                
            }

            if ($('body').hasClass('fp-viewing-sd-video')) {                
                $('#scroll-down').text('Out and about');
                $('#scroll-up').text('ON YOUR DOORSTEP'); 
                $('#video-bg .home-modal-box').addClass('show'); 
                $('#video-bg .home-modal-content').addClass('show');
            }

            if ($('body').hasClass('fp-viewing-sd-map')) {                
                $('#scroll-down').text('Contact');
                $('#scroll-up').text('Out and about'); 
            }

            if ($('body').hasClass('fp-viewing-sd-contact-us')) {                                
                $('#scroll-up').text('Contact');  
                $('#scroll-down').text('Disclaimer');
            }
            
        },

        onLeave: function(origin, destination, direction){
			
		}
    });

    // Click to show menu
    // Click to Scroll down
    $(document).on('click', '.menu-arrow-box', function () {
        fullpage_api.moveSectionDown();
    });

    $(document).on('click', '#menu-arrow-down-box', function () {
        fullpage_api.moveSectionUp();
    });

    var container = $('.sunday-navbar');
    $('#nav-open-btn').click(function () {
        $('.sunday-navbar').toggleClass("sunday-navbar-active");
        $('#menubar-overlay').toggleClass("nav-open");
    })

    $('.menu-box a').click(function () { 
        setTimeout(() => {
            $('.sunday-navbar').toggleClass("sunday-navbar-active");
            $('#menubar-overlay').toggleClass("nav-open");
        }, 200);
    })

    $('#phone-btn').click(function () { 
        if ($('.sunday-navbar').hasClass('sunday-navbar-active')) {
            $('.sunday-navbar').toggleClass("sunday-navbar-active");
            $('#menubar-overlay').toggleClass("nav-open");                    
        }
    })
    $(document).mouseup(function (e) {
        // if the target of the click isn't the container nor a descendant of the container
        if ($('.sunday-navbar').hasClass('sunday-navbar-active')) {
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $('.sunday-navbar').toggleClass("sunday-navbar-active");  
                $('#menubar-overlay').toggleClass("nav-open");                    
            }
            
        }        
    });

    $('a#v-pills-home-tab').removeClass('active');
    $('a#v-pills-settings-tab').addClass('active');
    
    function changeTab() {
        $('.progress-bar-fill').css({"width":"0", "transition": "none"});
        var tabs = $('.partner-tabs .nav-link');
        var active = tabs.filter('.active');
        var nextTab = active.next('a');
        var toClick = nextTab.length ? nextTab : tabs.eq(0);
        var pagination = $('.tab-pagination-bullets');

        $('a#v-pills-home-tab').click(function() {
            $('.progress-bar-fill').css({"width":"0", "transition": "none"});
            pagination.removeClass('bullets-active');
            pagination.eq(0).addClass('bullets-active');
            progressBar(0);
        }) 

        $('a#v-pills-profile-tab').click(function() {
            $('.progress-bar-fill').css({"width":"0", "transition": "none"});
            pagination.removeClass('bullets-active');
            pagination.eq(1).addClass('bullets-active');
            progressBar(1);
        }) 

        $('a#v-pills-messages-tab').click(function() {
            $('.progress-bar-fill').css({"width":"0", "transition": "none"});
            pagination.removeClass('bullets-active');
            pagination.eq(2).addClass('bullets-active');
            progressBar(2);
        }) 

        $('a#v-pills-settings-tab').click(function() {
            $('.progress-bar-fill').css({"width":"0", "transition": "none"});
            pagination.removeClass('bullets-active');
            pagination.eq(3).addClass('bullets-active');
            progressBar(3);
        }) 
        toClick.trigger('click');  
    }
    changeTab();
    var int = setInterval(changeTab, 20000);
    
    function progressBar(n) {
        var bar = $('.progress-bar-fill');
        bar.eq(n).css({"width":"100%", 
        "transition": "width 20s linear",
        "-webkit-transition": "width 20s linear"});
    };

    var des = $('.floorplan-swiper #slide1 .layout-box');
    // var newdes = des.attr('data-gallery', 'data-gallery2');

    $('.back-btn').click(function () { 
        $('#original-content').css('display', 'block');
        $('#replaced-content').css('display', 'none');
    })

    // show different property function
    function clickDropdownItem(n) {
        var dropdownBtn = $('#floorplan-dropdown .dropdown-item');
        var modalImg = $('#floorplanModal .modal-body img');
        var modalPlateImg = $('#floorplateModal .modal-body img');
        var modalTitle = $('#floorplanModal .modal-body .floorplan-modal-title');
        dropdownBtn.click(function () {             
            $('#original-content').css('display', 'none');
            $('#replaced-content').css('display', 'flex');
            propertySwiper.update();
         })
        switch (n) {
            case 0:
                dropdownBtn.eq(n).click(function () {                    
                    $('#replaced-content .sunday-title p').html('APT.G01 | Ground Level');
                    $('.property-info').html(`<ul class="info-list">
                        <li>Bedroom:<span> 3</span></li>
                        <li>Bathroom:<span> 2</span></li>
                        <li>Car:<span> 2</span></li>
                    </ul>

                    <ul class="info-area">
                        <li>Internal:<span> 141 sqm</span></li>
                        <li>External<span>: 65 sqm</span></li>
                        <li>Total:<span> 206 sqm</span></li>
                    </ul>`)
                    modalImg.attr('src', './assets/img/floorplan/1.jpg');
                    modalTitle.html("APT.G01 | Ground Level");
                })
                break;
            case 1:
                dropdownBtn.eq(n).click(function () {                      
                    $('#replaced-content .sunday-title p').html('APT.G02 | Ground Level');
                    $('.property-info').html(`<ul class="info-list">
                        <li>Bedroom: <span>3</span></li>
                        <li>Bathroom: <span>2</span></li>
                        <li>Car: <span>2</span></li>
                    </ul>

                    <ul class="info-area">
                        <li>Internal:<span> 161 sqm</span></li>
                        <li>External:<span> 123 sqm</span></li>
                        <li>Total:<span> 284 sqm</span></li>
                    </ul>`)
                    modalImg.attr('src', './assets/img/floorplan/2.jpg');
                    modalTitle.html("APT.G02 | Ground Level");

                })
                break;
            case 2:
                dropdownBtn.eq(n).click(function () {                    
                    $('#replaced-content .sunday-title p').html('APT.103 | Level One');
                    $('.property-info').html(`<ul class="info-list">
                        <li>Bedroom: <span>3</span></li>
                        <li>Bathroom: <span>2</span></li>
                        <li>Car: <span>2</span></li>
                    </ul>

                    <ul class="info-area">
                        <li>Internal: <span>156 sqm</span></li>
                        <li>External:<span> 14 sqm</span></li>
                        <li>Total: <span>170 sqm</span></li>
                    </ul>`)
                    modalImg.attr('src', './assets/img/floorplan/3.jpg');  
                    modalTitle.html("APT.103 | Level One");

                })
                break;
            case 3:
                dropdownBtn.eq(n).click(function () {                    
                    $('#replaced-content .sunday-title p').html('APT.104 | Level One');
                    $('.property-info').html(`<ul class="info-list">
                        <li>Bedroom: <span>3</span></li>
                        <li>Bathroom: <span>2</span></li>
                        <li>Car: <span>2</span></li>
                    </ul>

                    <ul class="info-area">
                        <li>Internal: <span>154 sqm</span></li>
                        <li>External:<span> 14 sqm</span></li>
                        <li>Total: <span>168 sqm</span></li>
                    </ul>`)
                    modalImg.attr('src', './assets/img/floorplan/4.jpg');
                    modalTitle.html("APT.104 | Level One");

                })
                break;

            case 4:
                dropdownBtn.eq(n).click(function () {                    
                    $('#replaced-content .sunday-title p').html('APT.205 | Level Two');
                    $('.property-info').html(`<ul class="info-list">
                        <li>Bedroom: <span>3</span></li>
                        <li>Bathroom: <span>2</span></li>
                        <li>Car: <span>2</span></li>
                    </ul>

                    <ul class="info-area">
                        <li>Internal: <span>156 sqm</span></li>
                        <li>External:<span> 14 sqm</span></li>
                        <li>Total: <span>170 sqm</span></li>
                    </ul>`)
                    modalImg.attr('src', './assets/img/floorplan/5.jpg');
                    modalTitle.html("APT.205 | Level Two");


                })
                break;
            case 5:
                dropdownBtn.eq(n).click(function () {                    
                    $('#replaced-content .sunday-title p').html('APT.206 | Level Two');
                    $('.property-info').html(`<ul class="info-list">
                        <li>Bedroom: <span>3</span></li>
                        <li>Bathroom: <span>2</span></li>
                        <li>Car: <span>2</span></li>
                    </ul>

                    <ul class="info-area">
                        <li>Internal: <span>154 sqm</span></li>
                        <li>External:<span> 14 sqm</span></li>
                        <li>Total: <span>168 sqm</span></li>
                    </ul>`)
                    modalImg.attr('src', './assets/img/floorplan/6.jpg');
                    modalTitle.html("APT.206 | Level Two");

                })
                break;    
                
            case 6:
                dropdownBtn.eq(n).click(function () {                    
                    $('#replaced-content .sunday-title p').html('APT.307 - Penthouse | Level Three');
                    $('.property-info').html(`<ul class="info-list">
                        <li>Bedroom: <span>3</span></li>
                        <li>Bathroom: <span>2</span></li>
                        <li>Car: <span>2</span></li>
                    </ul>

                    <ul class="info-area">
                        <li>Internal: <span>199 sqm</span></li>
                        <li>External: <span>211 sqm</span></li>
                        <li>Total: <span>410 sqm</span></li>
                    </ul>`)
                    modalImg.attr('src', './assets/img/floorplan/7.jpg');
                    modalTitle.html("APT.307 - Penthouse | Level Three");
                })
                break;    
        }
    }


    // show different Fixture function
    function clickFixtureDropdownItem(n) {
        var dropdownBtn = $('#fixture-list li');
        var bathroomSwiper = $('#bathroom-swiper');
        var kitchenSwiper = $('#kitchen-swiper');
        var penthouseSwiper = $('#penthouse-swiper');    
        switch (n) {
            case 0:
                dropdownBtn.eq(n).click(function () {  
                    dropdownBtn.removeClass('active');
                    dropdownBtn.eq(n).addClass('active');                  
                    bathroomSwiper.css('display','none');
                    kitchenSwiper.css('display', 'block');
                    penthouseSwiper.css('display', 'none');  
                    kitchen_Swiper.update();
                    console.log('clicked');                  
                })
                break;
            case 1:
                dropdownBtn.eq(n).click(function () { 
                    dropdownBtn.removeClass('active');
                    dropdownBtn.eq(n).addClass('active');                     
                    bathroomSwiper.css('display','block');
                    kitchenSwiper.css('display', 'none');
                    penthouseSwiper.css('display', 'none');
                    bathroom_Swiper.update();
                    console.log('2');
                })
                break;
            case 2:
                dropdownBtn.eq(n).click(function () {  
                    dropdownBtn.removeClass('active');
                    dropdownBtn.eq(n).addClass('active');                  
                    bathroomSwiper.css('display','none');
                    kitchenSwiper.css('display', 'none');
                    penthouseSwiper.css('display', 'block');
                    penthouse_Swiper.update();
                })
                break;            

        }
    }
    
    function callFixtureDropdownFunction() {
        var list = $("#fixture-list li");
        for (var i =0; i < list.length; i++) {
            clickFixtureDropdownItem(i);
        }
    }
    callFixtureDropdownFunction();


    function callDropdownFunction() {
        var list = $("#floorplan-dropdown .dropdown-item");
        for (var i =0; i < list.length; i++) {
            clickDropdownItem(i);
        }
    }
    callDropdownFunction();

    function clickAccordion(id) {
        var accordionBtn = $('#'+ id + " " + '.btn');   
        switch (id) {
            case "slow-start-accordion":
                accordionBtn.eq(0).click(function() {
                    $('#doorstep-1 .dp-container-left').css({"background": "url('./assets/img/doorstep/barrys.jpg')", "background-size" : "cover"});                                    
                })
                accordionBtn.eq(1).click(function() {
                    $('#doorstep-1 .dp-container-left').css({"background": "url('./assets/img/doorstep/tivoli.jpg')", "background-size" : "cover"});                                    
                })
                accordionBtn.eq(2).click(function() {
                    $('#doorstep-1 .dp-container-left').css({"background": "url('./assets/img/doorstep/gilson.jpg')", "background-size" : "cover"});  
                })
                accordionBtn.eq(3).click(function() {
                    $('#doorstep-1 .dp-container-left').css({"background": "url('./assets/img/doorstep/abacus.jpg')", "background-size" : "cover"});                                    
                })
                break;
            case "stop-by-accordion":
                accordionBtn.eq(0).click(function() {
                    $('#doorstep-2 .dp-container-right').css({"background": "url('./assets/img/doorstep/botanic-gardens.jpg')", "background-size" : "cover"});        
                })
                accordionBtn.eq(1).click(function() {
                    $('#doorstep-2 .dp-container-right').css({"background": "url('./assets/img/doorstep/chapel.jpg')", "background-size" : "cover"});                                   
                })
                accordionBtn.eq(2).click(function() {
                    $('#doorstep-2 .dp-container-right').css({"background": "url('./assets/img/doorstep/stables.jpg')", "background-size" : "cover"});                                   
                })
                accordionBtn.eq(3).click(function() {
                    $('#doorstep-2 .dp-container-right').css({"background": "url('./assets/img/doorstep/parahn.jpg')", "background-size" : "cover"});                                   
                })
                break;
            case "dusk-dawn-accordion":
                accordionBtn.eq(0).click(function() {
                    $('#doorstep-3 .dp-container-left').css({"background": "url('./assets/img/doorstep/carolina.jpg')", "background-size" : "cover"});                            
                })
                accordionBtn.eq(1).click(function() {
                    $('#doorstep-3 .dp-container-left').css({"background": "url('./assets/img/doorstep/entrecote.jpg')", "background-size" : "cover"});                            
                })
                accordionBtn.eq(2).click(function() {
                    $('#doorstep-3 .dp-container-left').css({"background": "url('./assets/img/doorstep/atlas.jpg')", "background-size" : "cover"});                            
                })
                accordionBtn.eq(3).click(function() {
                    $('#doorstep-3 .dp-container-left').css({"background": "url('./assets/img/doorstep/france.jpg')", "background-size" : "cover"});                            
                })
                break;
        }
    }
    clickAccordion("slow-start-accordion");
    clickAccordion("stop-by-accordion");
    clickAccordion("dusk-dawn-accordion");

    $('a#welcome-pills-home-tab').click(function() {
        $('#counter-number').html('1');
        $('.welcome-home').css('background', 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("./assets/img/welcome-home.jpg") no-repeat center center /cover');
    })

    $('a#welcome-pills-profile-tab').click(function() {
        $('#counter-number').html('2');
        $('.welcome-home').css('background', 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("./assets/img/slide-residences-bg.jpg") no-repeat center center /cover');

    })

    $('a#welcome-pills-messages-tab').click(function() {
        $('#counter-number').html('3');
        $('.welcome-home').css('background', 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("./assets/img/slide-welcome-home-bg.jpg") no-repeat center center /cover');

    })

    $('a#welcome-pills-settings-tab').click(function() {
        $('#counter-number').html('4');
        $('.welcome-home').css('background', 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("./assets/img/slide-creative-partners-bg.jpg") no-repeat center center /cover');

    })

    $('a#welcome-pills-spaces-tab').click(function() {
        $('#counter-number').html('5');
        $('.welcome-home').css('background', 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("./assets/img/bg-Image-house.png") no-repeat center center /cover');

    })

    $('.drop-down-btn').click(function () {
        $('.welcome-tabs .tab-content').toggleClass("welcome-tab-content-hidden");
        $('.counter').toggleClass('counter-hidden');

        if ($('.welcome-tabs .tab-content').hasClass('welcome-tab-content-hidden')) {
            $('.drop-down-btn').css({"bottom" : "6.5rem","transform" : "rotate(180deg)"});
        } else {
            $('.drop-down-btn').css({"bottom" : "45vh","transform" : "unset"});
        }
    })



    $('#contact-form').validator();
    //Form Controls
	$('.form-control')
	.val('')
	.on("focusin", function(){
		$(this).parent('.form-group').addClass('form-group-focus');
	})
	.on("focusout", function(){
		if($(this).val().length === 0) {
			$(this).parent('.form-group').removeClass('form-group-focus');
		}
	});


    // First Swiper
    const bathroom_Swiper = new Swiper('#bathroom-swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
        spaceBetween: 30,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
    });

    const kitchen_Swiper = new Swiper('#kitchen-swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
        spaceBetween: 30,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
    });

    const penthouse_Swiper = new Swiper('#penthouse-swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
        spaceBetween: 30,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
    });

    // Floorplan swiper
    var swiper = new Swiper('.floorplan-swiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });

    var menuSwiper = new Swiper ('.menu-carousel-container', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    });

    var seSwiper = new Swiper ('#sd-everyday-carousel', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
            nextEl: '.sd-next',
            prevEl: '.sd-prev',
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    })

    var propertySwiper = new Swiper ('#property-carousel', {
        loop: false,
        navigation: {
            nextEl: '.sd-property-next',
            prevEl: '.sd-property-prev',
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    })

});


function initMap() {
    const sunday = { lat: -37.84075, lng: 145.00199 };
    const map = new google.maps.Map(document.getElementById('map'), {
        center: sunday,
        zoom: 16,
        styles: [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#333333"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dedede"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e9e9e9"
                    },
                    {
                        "lightness": 17
                    }
                ]
            }
        ],
    })

    var sundayMarker = new google.maps.Marker({
        position: sunday,
        title: "Sunday Hawksburn",
        icon: "./assets/img/icons/map-sunday.svg"
    });

    sundayMarker.setMap(map);
    // if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(
    //         function (position) {
    //            var initializedPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    //             map.setCenter(initializedPosition);
    //         },
    //     );
    // } else {
    //     console.log('denied');
    //     handleLocationError(false, infoWindow, map.getCenter());
    // }


    var cafeMarker = 'https://firebasestorage.googleapis.com/v0/b/neat-vent-254802.appspot.com/o/marker.svg?alt=media&token=cd4f760a-2182-4e93-bf2b-3eace89f0dc1';
    var foodMarker = './assets/img/icons/foodMarker.svg';
    var bookMarker = './assets/img/icons/bookLibrary.svg';
    var shopMarker = './assets/img/icons/shopMarker.svg';
    var movingMarker = './assets/img/icons/movingMarker.svg';


    const locations = [
        {
            position: new google.maps.LatLng(-37.838520, 145.005080),
            type: cafeMarker,
        },
        {
            position: new google.maps.LatLng(-37.848340, 145.009480),
            type: foodMarker,
        },
        {
            position: new google.maps.LatLng(-37.845661, 144.994156),
            type: foodMarker,
        },
        {
            position: new google.maps.LatLng(-37.831640, 145.005080),
            type: cafeMarker,
        },
        {
            position: new google.maps.LatLng(-37.838480, 144.986660 ),
            type: cafeMarker,
        },
        {
            position: new google.maps.LatLng(-37.8350858, 144.9964926),
            type: foodMarker,
        },
        {
            position: new google.maps.LatLng( -37.83937, 144.99819 ), // tvolio road
            type: cafeMarker,
        },
        {
            position: new google.maps.LatLng(-37.8385, 144.99141),
            type: cafeMarker,
        },
        {
            position: new google.maps.LatLng(-37.84754,	144.99918),
            type: cafeMarker,
        },
        {
            position: new google.maps.LatLng(-37.83348,	144.99031),
            type: foodMarker,
        }, // food grove;
        // Sunday Service
        {
            position: new google.maps.LatLng(-37.8341565,144.9814522),
            type: foodMarker,
        },
        {
            position: new google.maps.LatLng(-37.8570368,144.9925459),
            type: foodMarker,
        },
        {
            position: new google.maps.LatLng(-37.839447021484375,144.99560546875),// latest bar carolina
            type: foodMarker,
        },
        {
            position: new google.maps.LatLng(-37.8460252,144.987745),
            type: foodMarker,
        },
        {
            position: new google.maps.LatLng(-37.83403, 144.98176), //gilson
            type: foodMarker,
        },
        {
            position: new google.maps.LatLng(-37.8381528,144.98667),//soir
            type: foodMarker,
        },
        {
            position: new google.maps.LatLng(-37.8384,	144.99026),
            type: foodMarker,
        },
        {
            position: new google.maps.LatLng(-37.83405,	144.98186),//domain road needs to double check
            type: foodMarker,
        },
        {
            position: new google.maps.LatLng(-37.83387, 144.98051), //same
            type: foodMarker,
        },
        {
            position: new google.maps.LatLng(-37.84813,	145.00347), //malvern road needs to double check
            type: foodMarker,
        },
        {
            position: new google.maps.LatLng(-37.84753, 144.99907),
            type: foodMarker,
        },
        {
            position: new google.maps.LatLng(-37.84771, 145.00039),//pizzeria
            type: foodMarker,
        },
        {
            position: new google.maps.LatLng(-37.83741, 144.97925), //bistro
            type: foodMarker,
        },
        {
            position: new google.maps.LatLng(-37.86874, 144.9933),
            type: foodMarker,
        },
        {
            position: new google.maps.LatLng(-37.84099, 144.99472),//thirty eight chairs
            type: foodMarker,
        },
        // Sunday Sweat
        {
            position: new google.maps.LatLng(-37.83577, 145.00562),
            type: movingMarker,
        },
        {
            position: new google.maps.LatLng(-37.84506,	144.98039),
            type: movingMarker,
        },
        {
            position: new google.maps.LatLng(-37.81739, 144.96752), //royal garden
            type: movingMarker,
        },
        {
            position: new google.maps.LatLng(-37.83912,	144.99271), //rockly garden
            type: movingMarker,
        },
        {
            position: new google.maps.LatLng(-37.83809,	144.99747), //hot yoga
            type: movingMarker,
        },
        {
            position: new google.maps.LatLng(-37.84888,	144.99382),
            type: movingMarker,
        },
        {
            position: new google.maps.LatLng(-37.84797,144.99662), // aquatic
            type: movingMarker,
        },
        {
            position: new google.maps.LatLng(-37.85055,	144.99482),
            type: movingMarker,
        },
        {
            position: new google.maps.LatLng(-37.85482,	145.0156),
            type: movingMarker,
        },
        {
            position: new google.maps.LatLng(-37.83644,	144.99781),
            type: movingMarker,
        },
        {
            position: new google.maps.LatLng(-37.844, 144.9974), //double check gript
            type: movingMarker,
        },
        {
            position: new google.maps.LatLng(-37.84403, 144.99759),
            type: movingMarker,
        },
        {
            position: new google.maps.LatLng(-37.83958, 144.9964), //double rise nation
            type: movingMarker,
        },
        {
            position: new google.maps.LatLng(-37.8392149,144.9964991),
            type: movingMarker,
        },
        {
            position: new google.maps.LatLng(-37.85192,	144.9939),
            type: movingMarker,
        },
        // Sunday Market
        {
            position: new google.maps.LatLng(-37.83937,	144.99819),
            type: shopMarker,
        },
        {
            position: new google.maps.LatLng(-37.83712,	144.99609),
            type: shopMarker,
        },
        {
            position: new google.maps.LatLng(-37.84659,	144.99217),
            type: shopMarker,
        },
        {
            position: new google.maps.LatLng(-37.83712,	144.99629),
            type: shopMarker,
        },
        {
            position: new google.maps.LatLng(-37.84827,	145.0046),
            type: shopMarker,
        }, 
        {
            position: new google.maps.LatLng(-37.84573,	144.99375), //aldi
            type: shopMarker,
        },
        {
            position: new google.maps.LatLng(-37.83975,	144.99782), //coles
            type: shopMarker,
        },
        {
            position: new google.maps.LatLng(-37.84338,	144.99764), 
            type: shopMarker,
        },
        {
            position: new google.maps.LatLng(-37.8388, 144.99015), //gumtree
            type: shopMarker,
        },
        {
            position: new google.maps.LatLng(-37.83693,	144.99706), //harvest
            type: shopMarker,
        },
        {
            position: new google.maps.LatLng(-37.84573,	144.99375), 
            type: shopMarker,
        },
        {
            position: new google.maps.LatLng(-37.84106,	145.00869), 
            type: shopMarker,
        },
        {
            position: new google.maps.LatLng(-37.84829,	145.00475), 
            type: shopMarker,
        },
        {
            position: new google.maps.LatLng(-37.84828,	145.00465), 
            type: shopMarker,
        },
        // Sunday Best
        {
            position: new google.maps.LatLng(-37.84828,	144.99213), 
            type: shopMarker,
        },
        {
            position: new google.maps.LatLng(-37.83949,	144.99559), 
            type: shopMarker,
        },
        {
            position: new google.maps.LatLng(-37.84251,	144.99501), 
            type: shopMarker,
        },
        {
            position: new google.maps.LatLng(-37.83862,	144.98889), 
            type: shopMarker,
        },
        {
            position: new google.maps.LatLng(-37.84146,	145.01208), 
            type: shopMarker,
        },
        {
            position: new google.maps.LatLng(-37.84845,	145.00596), 
            type: shopMarker,
        },
        {
            position: new google.maps.LatLng(-37.8483,	145.00485), 
            type: shopMarker,
        },
        {
            position: new google.maps.LatLng(-37.84033,	144.99545), 
            type: shopMarker,
        },
        {
            position: new google.maps.LatLng(-37.84847,	145.00607), 
            type: shopMarker,
        },
        {
            position: new google.maps.LatLng(-37.84832,	145.00496), 
            type: shopMarker,
        },
        // Sunday School
        {
            position: new google.maps.LatLng(-37.84301,	145.01042), 
            type: bookMarker,
        },
        {
            position: new google.maps.LatLng(-37.84864,	145.01435), 
            type: bookMarker,
        },
        {
            position: new google.maps.LatLng(-37.83775,	145.02198), 
            type: bookMarker,
        },
        {
            position: new google.maps.LatLng(-37.83889,	145.02774), 
            type: bookMarker,
        },
        {
            position: new google.maps.LatLng(-37.83914,	145.00888), 
            type: bookMarker,
        },
        {
            position: new google.maps.LatLng(-37.85212,	145.02467), 
            type: bookMarker,
        },
        {
            position: new google.maps.LatLng(-37.85218,	145.01794), 
            type: bookMarker,
        },
        {
            position: new google.maps.LatLng(-37.8391,	144.98636), 
            type: bookMarker,
        },
        {
            position: new google.maps.LatLng(-37.83405,	145.02944), 
            type: bookMarker,
        },
    ]

    var markers = [];

    for ( i = 0; i < locations.length; i++ ) {
        const infowindow = new google.maps.InfoWindow({
            content: locationsName[i] + "<br> <br>" + locationsAddress[i]
        });

        const marker = new google.maps.Marker({
            position: locations[i].position,
            map,
            icon: locations[i].type,
          });
        markers.push(marker);
        marker.addListener('click', () => {            
            infowindow.open(map, marker);            
        })
        const zoomInBtns = document.querySelectorAll('.zoomIn');
        zoomInBtns[i].addEventListener('click', () => {
            if(marker) {
                map.setZoom(18);
                map.setCenter(marker.getPosition());   
                google.maps.event.trigger(marker, 'click');
            }
            
        })
    }



    var styles = [{
        width: 30,
        height: 30,
        className: "custom-clustericon-1",
      },
      {
        width: 40,
        height: 40,
        className: "custom-clustericon-2",
      },
      {
        width: 50,
        height: 50,
        className: "custom-clustericon-3",
      },
    ];

    new MarkerClusterer(map, markers, {
        styles: styles,
        clusterClass: "custom-clustericon"
    });
 };

var locationsName = [
    "The Stables of Com",
    "Hello James",
    "Abacus Bar & Kitche",
    "Kantee",
    "Norman",
    "Lucky Penny",
    "Tivoli Roa",
    "Darling Café",
    "Husband",
    "Lawson Grov",
    "Matild",
    "Omni",
    "Bar Carolin",
    "Atlas Dinin",
    "Gilso",
    "France-Soi",
    "Cucinetta",
    "The Botanica",
    "Entrecôte",
    "Bistro Thierr",
    "48h Pizza e Gnocchi",
    "Fratellino Pizzeria",
    "Bistro Gitan",
    "Mopho Cantee",
    "Thirty Eight Chair",
    "Como Park",
    "Fawkner Park",
    "Royal Botanical Garden",
    "Rockly Gardens",
    "One Hot Yoga",
    "REVL Training ",
    "Prahran Aquatic Centre",
    "Humming Puppy",
    "F45 Toorak",
    "Body Fit Training",
    "GRIPT ",
    "Bodhi & Rid",
    "Rise Nation",
    "Barry’s",
    "KX Pilate",
    "Tivoli Road Bakery",
    "LaManna & Sons",
    "Prahran Market",
    "Woolworth",
    "Toscano’s",
    "ALDI",
    "Coles",
    "Rocky’s Fruit & Veg",
    "Gum Tree Good Food",
    "Harves",
    "The Essential Ingredient",
    "Simon Johnson Providor",
    "Peter Bouchier Toora",
    "Stocke",
    "Chapel Street Precinct",
    "The Como Centr",
    "The jam Factory",
    "Mecca Cosmetic",
    "Toorak Villag",
    "GRACE",
    "Husk",
    "GANT",
    "Coco & Lola",
    "Feathers",
    "Toorak Primary School",
    "Loreto Mandeville Hall",
    "St Catherine’s School",
    "St Kevin’s College",
    "Geelong Grammar Toorak",
    "Lauriston Girls’ School",
    "Armadale Primary School",
    "Christ Church Grammar School",
    "Scotch College" 
];

var locationsAddress = [
        "Williams Rd &, Lechlade Ave, South Yarra VIC 3141",
        "8/145 Canterbury Rd, Toorak VIC 3142",
        "383 Chapel St, South Yarra VIC 3141",
        "154 Alexandra Ave, South Yarra VIC 3141",
        "2/300 Toorak Rd, South Yarra VIC 3141",
        "481 Chapel St, South Yarra VIC 3141",
        "3 Tivoli Road, South Yarra 3141",
        "2 Darling St, South Yarra VIC 3141",
        "377 Malvern Rd, South Yarra VIC 3141",
        "1 Lawson Grove, South Yarra & Toorak, South Yarra, Melbourne",
        "159 Domain Rd, South Yarra VIC 3141",
        "625 Chapel St, South Yarra VIC 3141",
        "44 Toorak Rd, South Yarra VIC 3141 ",
        "133 Commercial Rd, South Yarra VIC 3141",
        "171 Domain Rd, South Yarra VIC 3141",
        "11 Toorak Rd, South Yarra VIC 3141",
        "4/3 Murphy St, South Yarra VIC 3141",
        "169 Domain Rd, South Yarra VIC 3141",
        "131-133 Domain Rd, South Yarra VIC 3141",
        "511 Malvern Rd, Toorak VIC 3142",
        "373 Malvern Rd, South Yarra VIC 3141",
        "415 Malvern Rd, South Yarra VIC 3141",
        "52 Toorak Rd West, South Yarra VIC 3141",
        "197 Carlisle St, Balaclava VIC 3183",
        "4 Bond St, South Yarra VIC 3141",
        "305-325 Williams Rd, South Yarra VIC 3141",
        "24-88 Commercial Rd, South Yarra VIC 3141",
        "Melbourne VIC 3004",
        "South Yarra VIC 3141",
        "36 River St, South Yarra VIC 3141",
        "276 Chapel St, Prahran VIC 3181",
        "41 Essex St, Prahran VIC 3181",
        "2/22 Cecil Pl, Prahran VIC 3181",
        "832 High St, Armadale VIC 3143",
        "84 River St, South Yarra VIC 3141",
        "50 Wilson Street, Ellis St, South Yarra VIC 3141",
        "54 Wilson St, South Yarra VIC 3141",
        "299 Toorak Rd, Melbourne VIC 3141",
        "Level 2, Como Centre, 299 Toorak Rd, South Yarra VIC",
        "1/173-175 High St, Prahran VIC 3181 ",
        "3 Tivoli Rd, South Yarra VIC 3141",
        "670 Chapel St, South Yarra VIC 3141",  
        "163 Commercial Rd, South Yarra VIC 3141",
        "670 Chapel St, South Yarra VIC 3141",
        "547 Malvern Rd, Toorak VIC 3142",
        "34 Elizabeth St, Prahran VIC 3181",
        "325 Toorak Rd &, Tivoli Rd, South Yarra VIC 3141",
        "45 Garden St, South Yarra VIC 3141",
        "114 Toorak Rd, South Yarra VIC 3141",
        "23 Malcolm St, South Yarra VIC 3141",
        "32 Elizabeth St, South Yarra VIC 3141",
        "471 Toorak Rd, Toorak VIC 3142",
        "551 Malvern Rd, Toorak VIC 3142",
        "549 Malvern Rd, Toorak VIC 3142",
        "Unit 2/27 Izett St, Prahran VIC 3181",
        "Toorak Rd, South Yarra VIC 3141",
        "500 Chapel St, South Yarra VIC 3141",
        "79 Toorak Rd, South Yarra VIC 3141",
        "Toorak VIC 3142",
        "595 Malvern Rd, Toorak VIC 3142",
        "557 Malvern Rd, Toorak VIC 3142",
        "577 Chapel St, South Yarra VIC 3141",
        "597 Malvern Rd, Toorak VIC 3181",
        "562 Malvern Rd, Toorak VIC 3142",
        "Canterbury Rd, Toorak VIC 3142",
        "10 Mandeville Cres, Toorak VIC 3142",
        "17 Heyington Pl, Toorak VIC 3142",
        "31 Moonga Rd, Toorak VIC 3142",
        "14 Douglas St, Toorak VIC 3142",
        "38 Huntingtower Rd, Armadale VIC 3143",
        "Densham Rd, Armadale VIC 3143",
        "677 Punt Rd, South Yarra VIC 3141",
        "1 Morrison St, Hawthorn VIC 3122"
];

