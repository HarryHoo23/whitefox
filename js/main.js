$(document).ready(function(){
    "use strict";

    $('#scroll-down').click(function(e){
        e.preventDefault();
        $.fn.fullpage.moveSectionDown();
    });

    $('#nav-open-btn').click(function (){
        $('.sunday-navbar').toggleClass("sunday-navbar-active");
    })
    

    // Carousel

    $('#v-pills-tab a').on('click', function (e) {
        e.preventDefault()
        $(this).tab('show')
      })
});
