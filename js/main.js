// import { hello } from './layout.js';
$(document).ready(function () {
    "use strict";

    
    $(window).on('load', function () { // makes sure that whole site is loaded
        $('#status').fadeOut();
        $('#loader').delay(350).fadeOut('slow');
        $('#preloader').addClass('show');
        setTimeout(function (){ 
            $('#preloader').removeClass('show');
            $('.overlay_home img').addClass('animate__animated animate__bounceInRight homeShow')        

        }, 2000);
        setTimeout(function (){ 
            $('.overlay_home img').addClass('animate__animated animate__bounceOutLeft')        
        }, 5000);
        setTimeout(function (){ 
            $('#home-bg-video').addClass('animate__animated animate__bounceInRight homeShow')        
        }, 6000);

    });
    // hello();

    var myFullpage = new fullpage('#fullpage', {
        navigation: true,
        anchors: ['sd-home', 'sd-intro', 'sd-every', 'sd-partners', 'sd-partners-2', 'sd-welcomeHome', 'sd-floorplans',
            'sd-fixtures', 'sd-doorstep', 'sd-doorstep-1', 'sd-doorstep-2',
            'sd-doorstep-3', 'sd-video', 'sd-map', 'sd-contact-us'
        ],
        slidesNavigation: false,
        scrollBar: true,
        verticalCentered: false,
        scrollOverflowReset: true,
        scrollHorizontally: true,
        scrollingSpeed: 800,
        autoScrolling: true,
        normalScrollElements: '.scrollable-content, .vs-img, .sale-intro',
        touchSensitivity: 15,
        fitToSectionDelay: 100,
        fitToSection: true,

        afterLoad: function (anchorLink, index) {             
            if ($('body').hasClass('fp-viewing-sd-home')) {                                
                $('#scroll-down').text('scroll');
            }
            
            if ($('body').hasClass('fp-viewing-sd-intro')) {                           
                $('#scroll-down').text('sunday every day');
                $('#scroll-up').text('home');
                $('.home-modal-box').addClass('animate__animated animate__backInUp homeShow')

            }

            if ($('body').hasClass('fp-viewing-sd-every')) {                
                $('#scroll-down').text('creative partners');
                $('#scroll-up').text('Sunday Everyday');  
                $('#sd-everyday-carousel').addClass('animate__animated animate__bounceInLeft homeShow')
            }

            if ($('body').hasClass('fp-viewing-sd-partners')) {                
                $('#scroll-down').text('creative partners');
                $('#scroll-up').text('Sunday Everyday');                
            }

            if ($('body').hasClass('fp-viewing-sd-partners-2')) {                
                $('#scroll-down').text('Welcome home');
                $('#scroll-up').text('Sunday Partners');                
            }

            if ($('body').hasClass('fp-viewing-sd-welcomeHome')) {                
                $('#scroll-down').text('Floor plans');
                $('#scroll-up').text('Sunday Partners');  
            }

            if ($('body').hasClass('fp-viewing-sd-floorplans')) {                
                $('#scroll-down').text('Fixtures');
                $('#scroll-up').text('Welcome home');  
            }

            if ($('body').hasClass('fp-viewing-sd-fixtures')) {                
                $('#scroll-down').text('Fixtures');
                $('#scroll-up').text('Welcome home');
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
                $('#scroll-down').text('Doorstep');
                $('#scroll-up').text('Fixtures'); 
                $('.doorstep-img-container-right img.first-img').addClass('animate_animated animate__fadeInUp homeShow'); 
                $('.doorstep-img-container-right img.second-img').addClass('animate_animated animate__fadeInDown homeShow');      
            }

            if ($('body').hasClass('fp-viewing-sd-doorstep-1')) {                
                $('#scroll-down').text('Doorstep');
                $('#scroll-up').text('Monday to Sunday');  
                $('.doorstep-accordion-box.right').addClass('animate__animated animate__bounceInRight homeShow');
                $('.dp-container-left img').addClass('animate__animated animate__bounceInLeft homeShow');
            }

            if ($('body').hasClass('fp-viewing-sd-doorstep-2'))  {                
                $('#scroll-down').text('Doorstep');
                $('#scroll-up').text('Slow Start'); 
                $('.dp-container-right img').addClass('animate__animated animate__bounceInRight homeShow');
                $('.doorstep-accordion-box.left').addClass('animate__animated animate__bounceInLeft homeShow');
            }

            if ($('body').hasClass('fp-viewing-sd-doorstep-3')) {                
                $('#scroll-down').text('Video');
                $('#scroll-up').text('Stop By');  
                $('#doorstep-3 .dp-container-left img').addClass('animate__animated animate__bounceInLeft homeShow');
                $('#doorstep-3 .doorstep-accordion-box.right').addClass('animate__animated animate__bounceInLeft homeShow');
            }

            if ($('body').hasClass('fp-viewing-sd-video')) {                
                $('#scroll-down').text('Map');
                $('#scroll-up').text('Doorstep');  
                $('#video-bg .home-modal-box').addClass('animate__animated animate__backInUp homeShow')
            }

            if ($('body').hasClass('fp-viewing-sd-map')) {                
                $('#scroll-down').text('Contact us');
                $('#scroll-up').text('Video');  
            }

            if ($('body').hasClass('fp-viewing-sd-contact-us')) {                                
                $('#scroll-up').text('Map');  
            }
        
            if ($('body').hasClass('fp-viewing-sd-floorplans')) {           
                $('#scroll-down').text('Fixtures');
                $('#scroll-up').text('Welcome home'); 
            }
            
        },

        onLeave: function(origin, destination, direction){
			
		}
    });

    // Click to show menu
    // Click to Scroll down
    $(document).on('click', '.scroll-down-box', function () {
        fullpage_api.moveSectionDown();
    });

    $(document).on('click', '.scroll-up', function () {
        fullpage_api.moveSectionUp();
    });

    var container = $('.sunday-navbar');
    $('#nav-open-btn').click(function () {
        $('.sunday-navbar').toggleClass("sunday-navbar-active");
        $('#menubar-overlay').toggleClass("nav-open");
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

    console.log(des);

    function clickDropdownItem(n) {
            switch (n) {
                case 0:
                    $("#floorplan-dropdown .dropdown-item").eq(n).click(function () {
                        $('.floorplan-swiper .swiper-wrapper #slide1').html(`0`);
                        $('#floor-plan').css("background", `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("../assets/img/Bg Image.png") no-repeat center center / cover`);
                    })
                    break;
                case 1:
                    $("#floorplan-dropdown .dropdown-item").eq(n).click(function () {    
                        $('#floor-plan').css("background", `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("../assets/img/Bg Image.png") no-repeat center center / cover`);
                    })
                    break;
                case 2:
                    $("#floorplan-dropdown .dropdown-item").eq(n).click(function () {
                        alert('3');
                        $('#floor-plan').css("background", `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("../assets/img/Bg Image.png") no-repeat center center / cover`);
                    })
                    break;
                case 3:
                    $("#floorplan-dropdown .dropdown-item").eq(n).click(function () {
                        alert('4');
                        $('#floor-plan').css("background", `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("../assets/img/Bg Image.png") no-repeat center center / cover`);
                    })
                    break;

                case 4:
                    $("#floorplan-dropdown .dropdown-item").eq(n).click(function () {
                        alert('5');
                        $('#floor-plan').css("background", `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("../assets/img/Bg Image.png") no-repeat center center / cover`);
                    })
                    break;
                case 5:
                    $("#floorplan-dropdown .dropdown-item").eq(n).click(function () {
                        alert('6');
                        $('#floor-plan').css("background", `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("../assets/img/Bg Image.png") no-repeat center center / cover`);
                    })
                    break;    
                    
                case 6:
                    $("#floorplan-dropdown .dropdown-item").eq(n).click(function () {
                        alert('7');
                        $('#floor-plan').css("background", `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("../assets/img/Bg Image.png") no-repeat center center / cover`);
                    })
                    break;   

                case 7:
                    $("#floorplan-dropdown .dropdown-item").eq(n).click(function () {
                        alert('8');
                        $('#floor-plan').css("background", `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("../assets/img/Bg Image.png") no-repeat center center / cover`);
                    })
                    break;   
                case 8:
                    $("#floorplan-dropdown .dropdown-item").eq(n).click(function () {
                        alert('9');
                        $('#floor-plan').css("background", `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("../assets/img/Bg Image.png") no-repeat center center / cover`);
                    })
                    break;  
                case 9:
                    $("#floorplan-dropdown .dropdown-item").eq(n).click(function () {
                        alert('10');
                        $('#floor-plan').css("background", `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("../assets/img/Bg Image.png") no-repeat center center / cover`);
                    })
                    break;  
            }
    }

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
            case "stop-by-accordion":
                accordionBtn.eq(0).click(function() {
                    $('#stop-by .first-img').attr("src", "./assets/img/Bg Image.png");        
                })
                accordionBtn.eq(1).click(function() {
                    $('#stop-by .first-img').attr("src", "./assets/img/Bg Image.png");        
                })
                accordionBtn.eq(2).click(function() {
                    $('#stop-by .first-img').attr("src", "./assets/img/Bg Image.png");        
                })
                accordionBtn.eq(3).click(function() {
                    $('#stop-by .first-img').attr("src", "./assets/img/Bg Image.png");        
                })
                break;
            case "slow-start-accordion":
                accordionBtn.eq(0).click(function() {
                    $('#slow-start .first-img').attr("src", "./assets/img/Bg Image.png");        
                })
                accordionBtn.eq(1).click(function() {
                    $('#slow-start .first-img').attr("src", "./assets/img/Bg Image.png");        
                })
                accordionBtn.eq(2).click(function() {
                    $('#slow-start .first-img').attr("src", "./assets/img/Bg Image.png");        
                })
                accordionBtn.eq(3).click(function() {
                    $('#slow-start .first-img').attr("src", "./assets/img/Bg Image.png");        
                })
                break;
            case "dusk-dawn-accordion":
                accordionBtn.eq(0).click(function() {
                    $('#dusk-dawn .first-img').attr("src", "./assets/img/Bg Image.png");        
                })
                accordionBtn.eq(1).click(function() {
                    $('#dusk-dawn .first-img').attr("src", "./assets/img/Bg Image.png");        
                })
                accordionBtn.eq(2).click(function() {
                    $('#dusk-dawn .first-img').attr("src", "./assets/img/Bg Image.png");        
                })
                accordionBtn.eq(3).click(function() {
                    $('#dusk-dawn .first-img').attr("src", "./assets/img/Bg Image.png");        
                })
                break;
        }
    }
    clickAccordion("slow-start-accordion");
    clickAccordion("stop-by-accordion");
    clickAccordion("dusk-dawn-accordion");

    

    $('.drop-down-btn').click(function () {
        $('.welcome-tabs .tab-content').toggleClass("welcome-tab-content-hidden");

        if ($('.welcome-tabs .tab-content').hasClass('welcome-tab-content-hidden')) {
            $('.drop-down-btn').css({"bottom" : "2.5rem","transform" : "rotate(180deg)"});
        } else {
            $('.drop-down-btn').css({"bottom" : "35vh","transform" : "unset"});
        }
    })


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
    })


});



function initMap(lat, lng) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
               initMap(position.coords.latitude, position.coords.longitude)
            },
            function errorCallback(error) {
               console.log(error)
            }
        );
    }

    // var myLatLng = {
    //    lat,
    //    lng
    // };

    const uluru = { lat: -31.56391, lng: 147.154312 };

    
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: uluru,
    });
    

    const image = 'https://firebasestorage.googleapis.com/v0/b/neat-vent-254802.appspot.com/o/marker.svg?alt=media&token=cd4f760a-2182-4e93-bf2b-3eace89f0dc1';
 
    // const benchMarker = new google.maps.Marker({
    //    position: myLatLng,
    //    map: map,
    // });

    var markers = [];

    for ( i = 0; i < locations.length; i++ ) {
        const infowindow = new google.maps.InfoWindow({
            content: locationsName[i]
        });

        const marker = new google.maps.Marker({
            position: locations[i],
            map,
            icon: image,
          });
        markers.push(marker);
        marker.addListener('click', () => {
            infowindow.open(map, marker);
        })
    }

    new MarkerClusterer(map, markers, {
    imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
 };


    const locations = [
        { lat: -31.56391, lng: 147.154312 },
        { lat: -33.718234, lng: 150.363181 },
        { lat: -33.727111, lng: 150.371124 },
        { lat: -33.848588, lng: 151.209834 },
        { lat: -33.851702, lng: 151.216968 },
        { lat: -34.671264, lng: 150.863657 },
        { lat: -35.304724, lng: 148.662905 },
        { lat: -36.817685, lng: 175.699196 },
        { lat: -36.828611, lng: 175.790222 },
        { lat: -37.75, lng: 145.116667 },
        { lat: -37.759859, lng: 145.128708 },
        { lat: -37.765015, lng: 145.133858 },
        { lat: -37.770104, lng: 145.143299 },
        { lat: -37.7737, lng: 145.145187 },
        { lat: -37.774785, lng: 145.137978 },
        { lat: -37.819616, lng: 144.968119 },
        { lat: -38.330766, lng: 144.695692 },
        { lat: -39.927193, lng: 175.053218 },
        { lat: -41.330162, lng: 174.865694 },
        { lat: -42.734358, lng: 147.439506 },
        { lat: -42.734358, lng: 147.501315 },
    ];

    var locationsName = [
        "The Stables of Com",
        "Hello James",
        "Abacus Bar & Kitche",
        "Kantee",
        "Norman",
        "Lucky Penny",
        "Drugstore Espresso",
        "Tivoli Roa",
        "Darling Café",
        "Einstein’s Espresso",
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
        "Entrecôt",
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