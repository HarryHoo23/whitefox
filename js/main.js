$(document).ready(function(){
    "use strict";

    //initialising fullpage.js in the jQuery way
    $('#fullpage').fullpage({
        navigation: true,
        slidesNavigation: true,
    });

    $('#scroll-down').click(function(e){
        e.preventDefault();
        $.fn.fullpage.moveSectionDown();
    });

    $('#nav-open-btn').click(function (){
        $('.sunday-navbar').toggleClass("sunday-navbar-active");
    })
    
});
