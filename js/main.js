$(document).ready(function () {
    "use strict";

    var myFullpage = new fullpage('#fullpage', {
        navigation: true,
        anchors: ['sd-home', 'sd-intro', 'sd-every', 'sd-partners', 'sd-welcomeHome', 'sd-floorplans',
            'sd-fixtures', 'sd-doorstep', 'sd-video', 'sd-map', 'sd-contact-us'
        ],
        slidesNavigation: false,
        scrollBar: true,
        verticalCentered: false,
        scrollOverflowReset: true,
        scrollHorizontally: true,
        scrollingSpeed: 800,
        autoScrolling: true,
        normalScrollElements: '#sunday-everyday, #sunday-partners, .vs-img, #doorstep, .sale-intro',
        touchSensitivity: 15,
        fitToSectionDelay: 500,
        fitToSection: true,


        afterLoad: function (origin, destination, direction) { 
            var div = $('#sunday-everyday .scrollable-content');
            var partnersDiv = $('#sunday-partners .scrollable-content');
            var canScroll = false;
            var ptCanScroll = false;
			$('.menu-arrow-box').on('click', function (e) {
                if(origin.index == 1 && direction == "down" && canScroll == false 
                || origin.index ==3 && direction == "up" && canScroll == false){
                    e.stopPropagation();
                    div.animate({ scrollTop: div.prop("scrollHeight")}, 1000);
                    canScroll = true;
                }

                if(origin.index == 2 && direction == "down" && ptCanScroll == false 
                || origin.index == 4 && direction == "up" && ptCanScroll == false){
                    e.stopPropagation();
                    partnersDiv.animate({ scrollTop: partnersDiv.prop("scrollHeight")}, 1000);
                    ptCanScroll = true;
                }
            });

            div.scrollTop(0);
            partnersDiv.scrollTop(0);
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



    var home_modal = $("#home-modal").offset().top;
    var everyday_height = $('#sunday-everyday').offset().top;
    var sunday_partner = $('#sunday-partners').offset().top;
    var sunday_welcome_home = $('#sunday-welcome-home').offset().top;
    var floor_plan = $('#floor-plan').offset().top;
    var fixture = $('#fixtures').offset().top;
    var doorstep = $('#doorstep').offset().top;
    var video_bg = $('#video-bg').offset().top;
    var map_section = $('#map-section').offset().top;
    var contact_us =$('#contact-us').offset().top;

    if ($('#home-modal').hasClass('active')) {
        $('.nav-wrapper-top ').css('display', 'block');
    }

    $(window).on('scroll', function () {
        var scrollPosition = $(this).scrollTop() + 1;
        // Section home modal
        if (scrollPosition > home_modal && scrollPosition < everyday_height) {
            $('.scroll-down-box').css('opacity', '1');
            $('#scroll-down').text('1. sunday every day');
            $('#scroll-up').text('home');
            $('.nav-bottom-row').css('border-top', '1px solid #fff');
            $('.nav-wrapper-top ').css('display', 'block');
            // Section sunday everyday
        } else if (scrollPosition > everyday_height && scrollPosition < sunday_partner) {
            // nav-bottom bar
            $('.scroll-down-box').css('opacity', '1');
            $('#scroll-down').text('2. creative partners');
            $('#scroll-down').css('color', '#A0A8A2');
            $('.nav-bottom-row').css('border-top', '1px solid #8C968F');
            $('#menu-arrow path').css('fill', '#8C968F');
            $('.btn-right-box svg path').css('fill', '#8C968F');

            // nav-top bar
            $('#scroll-up').css('color', '#A0A8A2');
            $('#scroll-up').text('Video');
            $('#menu-arrow-down path').css('fill', '#8C968F');
            $('.nav-wrapper-top').css('display', 'block');
            $('.nav-top-row').css('border-bottom', '1px solid rgba(160, 168, 162, 0.3)');
            // Section creative partners
        } else if (scrollPosition > sunday_partner && scrollPosition < sunday_welcome_home) {
            // Nav-bottom bar
            $('#scroll-down').text('Residencies');
            $('.nav-bottom-row').css('border-top', '1px solid rgba(255,255,255,0.3)');
            $('.scroll-down-box').css('opacity', '1');

            // Nav-top bar
            $('#scroll-up').css('color', 'rgba(255,255,255,0.5)');
            $('#scroll-up').text('1. sunday every day');
            $('#menu-arrow-down path').css('fill', 'rgba(255,255,255,0.5)');
            $('.nav-wrapper-top').css('display', 'block');
            $('.nav-top-row').css('border-bottom', '1px solid rgba(255,255,255,0.5)');
            // Section 6 Welcome home sunday section
        } else if (scrollPosition > sunday_welcome_home && scrollPosition < floor_plan) {
            // Nav-bottom bar
            $('.scroll-down-box').css('opacity', '1');
            $('#scroll-down').text('Floor plan');
            $('.nav-bottom-row').css('border-top', '1px solid rgba(255,255,255,0.3)');

            // Nav-top bar
            $('#scroll-up').css('color', 'rgba(255,255,255,0.5');
            $('#scroll-up').text('2. creative partners');
            $('#menu-arrow-down path').css('fill', 'rgba(255,255,255,0.5');
            $('.nav-wrapper-top').css('display', 'block');
            $('.nav-top-row').css('border-bottom', '1px solid rgba(255, 255, 255, 0.5)');
            // Section Floor plan
        } else if (scrollPosition > floor_plan && scrollPosition < fixture) {

            // Nav-bottom bar
            $('.scroll-down-box').css('opacity', '1');
            $('#scroll-down').text('duplex | fixtures');
            $('.nav-bottom-row').css('border-top', '1px solid rgba(255,255,255,0.3)');

            // Nav-top bar
            $('#scroll-up').css('color', 'rgba(255,255,255,0.5)');
            $('#scroll-up').text('3. welcome home');
            $('#menu-arrow-down path').css('fill', 'rgba(255,255,255,0.5)');
            $('.nav-wrapper-top').css('display', 'block');
            $('.nav-top-row').css('border-bottom', '1px solid rgba(255,255,255,0.5)');
            
            // Section Fixture
        } else if (scrollPosition > fixture && scrollPosition < doorstep) {  
            $('.scroll-down-box').css('opacity', '1');  
            $('#scroll-down').text('neighbourhood');
            $('#scroll-down').css('color', '#656565');
            $('.nav-bottom-row').css('border-top', '1px solid #656565');
            $('#menu-arrow path').css('fill', '#656565');
            $('.btn-right-box svg path').css('fill', '#656565');

            // Nav-top bar
            $('#scroll-up').css('color', 'rgba(101,101,101, 0.3)');
            $('#scroll-up').text('4. Floorplans');
            $('#menu-arrow-down path').css('fill', 'rgba(101,101,101, 0.3)');
            $('.nav-wrapper-top').css('display', 'block');
            $('.nav-top-row').css('border-bottom', '1px solid rgba(101,101,101, 0.3)');


            // Section doorstep
        }else if (scrollPosition > doorstep && scrollPosition < video_bg) {
            $('.scroll-down-box').css('opacity', '1');
            $('#scroll-down').text('Video Background');
            $('#scroll-down').css('color', '#656565');
            $('.nav-bottom-row').css('border-top', '1px solid #656565');
            $('#menu-arrow path').css('fill', '#656565');
            $('.btn-right-box svg path').css('fill', '#656565');
        
            // Nav-top bar
            $('#scroll-up').css('color', 'rgba(101,101,101, 0.3)');
            $('#scroll-up').text('5. Fixtures');
            $('#menu-arrow-down path').css('fill', 'rgba(101,101,101, 0.3)');
            $('.nav-wrapper-top').css('display', 'block');
            $('.nav-top-row').css('border-bottom', '1px solid rgba(101,101,101, 0.3)');
            
        
        } else if (scrollPosition > video_bg && scrollPosition < map_section) {
            // Video section
            $('#scroll-down').text('Map');
            $('.scroll-down-box').css('opacity', '1'); 
            
            // Nav-top bar
            $('#scroll-up').css('color', 'rgba(255,255,255, 0.5)');
            $('#scroll-up').text('6. neighbourhood');
            $('#menu-arrow-down path').css('fill', 'rgba(255,255,255, 0.5)');
            $('.nav-wrapper-top').css('display', 'block');
            $('.nav-top-row').css('border-bottom', '1px solid rgba(255,255,255, 0.5)');

        } else if (scrollPosition > map_section && scrollPosition < contact_us){
            // Maps section
            $('#scroll-down').text('Contact us');
            $('.scroll-down-box').css('opacity', '1'); 
            
            // Nav-top bar
            $('#scroll-up').css('color', 'rgba(255,255,255, 0.5)');
            $('#scroll-up').text('7. Video Background');
            $('#menu-arrow-down path').css('fill', 'rgba(255,255,255, 0.5)');
            $('.nav-wrapper-top').css('display', 'block');
            $('.nav-top-row').css('border-bottom', '1px solid rgba(255,255,255, 0.5)');
         
        } else if (scrollPosition > contact_us ) {
            // Section last one, contact us
            $('.scroll-down-box').css('opacity', '0');            
            $('.nav-bottom-row').css('border-top', '1px solid #8C968F');
            $('#menu-arrow path').css('fill', '#8C968F');
            $('.btn-right-box svg path').css('fill', '#8C968F');
            
            // Nav-top bar
            $('#scroll-up').css('color', 'rgba(101,101,101, 0.3)');
            $('#scroll-up').text('8. Maps');
            $('#menu-arrow-down path').css('fill', 'rgba(101,101,101, 0.3)');
            $('.nav-wrapper-top').css('display', 'block');
            $('.nav-top-row').css('border-bottom', '1px solid rgba(101,101,101, 0.3)');
        } else {
            // Section 1, home banner
            $('.scroll-down-box').css('opacity', '1');
            $('#scroll-down').text('Scroll');
            $('#scroll-down').css('color', '#fff');
            $('.nav-bottom-row').css('border-top', '1px solid rgba(255,255,255,0.3)');
            $('#menu-arrow path').css('fill', '#ffffff');
            $('.btn-right-box svg path').css('fill', '#ffffff');
            $('.nav-wrapper-top').css('display', 'none');
            $('.nav-wrapper').css('display', ' block');
        }
    })


    setInterval(changeTab, 20000);
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
    function progressBar(n) {
        var bar = $('.progress-bar-fill');
        bar.eq(n).css({"width":"100%", 
        "transition": "width 20s ease-in-out",
        "-webkit-transition": "width 20s ease-in-out"});
    };

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

    var myLatLng = {
       lat,
       lng
    };

    const uluru = { lat: -31.56391, lng: 147.154312 };

    
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: uluru,
    });
    

    const image = 'https://firebasestorage.googleapis.com/v0/b/neat-vent-254802.appspot.com/o/marker.svg?alt=media&token=cd4f760a-2182-4e93-bf2b-3eace89f0dc1';
 
    const benchMarker = new google.maps.Marker({
       position: myLatLng,
       map: map,
    });

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