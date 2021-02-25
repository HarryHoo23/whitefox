$(document).ready(function () {
    "use strict";

    // Click to show menu
    // Click to Scroll down
    $(document).on('click', '.scroll-down-box', function () {
        fullpage_api.moveSectionDown();
    });

    $(document).on('click', '.scroll-up', function () {
        fullpage_api.moveSectionUp();
    });

    $(document).mouseup(function (e) {
        var container = $('.sunday-navbar');

        // if the target of the click isn't the container nor a descendant of the container
        if ($('.sunday-navbar').hasClass('sunday-navbar-active')) {
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $('.sunday-navbar').toggleClass("sunday-navbar-active");                      
            }
        }        

        $('#nav-open-btn').click(function () {
            $('.sunday-navbar').toggleClass("sunday-navbar-active");
        })
    });



    var home_modal = $("#home-modal").offset().top;
    var everyday_height = $('#sunday-everyday').offset().top;
    var sunday_partner = $('#sunday-partners').offset().top;
    var sunday_welcome_home = $('#sunday-welcome-home').offset().top;
    var floor_plan = $('#floor-plan').offset().top;
    var fixture = $('#fixtures').offset().top;
    // var doorstep = $('#doorstep').offset().top;

    $(window).on('scroll', function () {
        var scrollPosition = $(this).scrollTop() + 1;
        // Section home modal
        if (scrollPosition > home_modal && scrollPosition < everyday_height) {
            $('#scroll-down').text('1. sunday every day');
            $('#scroll-up').text('Video');
            $('.nav-bottom-row').css('border-top', '1px solid #fff');
            $('.nav-wrapper-top ').css('display', 'block');
            // Section sunday everyday
        } else if (scrollPosition > everyday_height && scrollPosition < sunday_partner) {
            // nav-bottom bar
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

            // Nav-top bar
            $('#scroll-up').css('color', 'rgba(255,255,255,0.5)');
            $('#scroll-up').text('1. sunday every day');
            $('#menu-arrow-down path').css('fill', 'rgba(255,255,255,0.5)');
            $('.nav-wrapper-top').css('display', 'block');
            $('.nav-top-row').css('border-bottom', '1px solid rgba(255,255,255,0.5)');
            // Section 6 Welcome home sunday section
        } else if (scrollPosition > sunday_welcome_home && scrollPosition < floor_plan) {
            // Nav-bottom bar
            $('.nav-wrapper').css('display', 'none');

            // Nav-top bar
            $('#scroll-up').css('color', 'rgba(255,255,255,0.5');
            $('#scroll-up').text('2. creative partners');
            $('#menu-arrow-down path').css('fill', 'rgba(255,255,255,0.5');
            $('.nav-wrapper-top').css('display', 'block');
            $('.nav-top-row').css('border-bottom', '1px solid rgba(255, 255, 255, 0.5)');
            // Section Floor plan
        } else if (scrollPosition > floor_plan && scrollPosition < fixture) {

            // Nav-bottom bar
            $('#scroll-down').text('duplex | fixtures');
            $('.nav-bottom-row').css('border-top', '1px solid rgba(255,255,255,0.3)');

            // Nav-top bar
            $('#scroll-up').css('color', 'rgba(255,255,255,0.5)');
            $('#scroll-up').text('3. welcome home');
            $('#menu-arrow-down path').css('fill', 'rgba(255,255,255,0.5)');
            $('.nav-wrapper-top').css('display', 'block');
            $('.nav-top-row').css('border-bottom', '1px solid rgba(255,255,255,0.5)');
            
            
            
            
            // Section 1, home banner
        } else {
            $('#scroll-down').text('Scroll');
            $('#scroll-down').css('color', '#fff');
            $('.nav-bottom-row').css('border-top', '1px solid rgba(255,255,255,0.3)');
            $('#menu-arrow path').css('fill', '#ffffff');
            $('.btn-right-box svg path').css('fill', '#ffffff');
            $('.nav-wrapper-top').css('display', 'none');
            $('.nav-wrapper').css('display', ' block');
        }
    })


    $('[data-widget="tab-slider"]').each(function (i, el) {

        const $container = $(this);
        const $sliderLinks = $container.find('.nav-link');
        const panelCount = $sliderLinks.length;
        const delay = 10000; // milleseconds
        let index = 0;

        function nextTabSliderPanel() {
            $sliderLinks.eq(index++ % panelCount).trigger('click');
            setTimeout(nextTabSliderPanel, delay);
        }
        nextTabSliderPanel(); // Start the slider.
    });



    // Progress bar
    function progressBar() {
        var size = 0;
        var interval = setInterval(function () {
            size = size + 10;
            $('.progress-bar-fill').css('width', size + '%');
            if (size >= 100) {
                clearInterval(interval);
                size = 0;
                $('.progress-bar-fill').css('width', size + '%');
            }
        }, 1000);
    };
    progressBar();

    $('.drop-down-btn').click(function () {
        $('.welcome-tabs .tab-content').toggleClass("welcome-tab-content-hidden");
    })

    
        
});
