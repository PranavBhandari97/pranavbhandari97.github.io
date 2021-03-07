var doc = jQuery(document);

$(window).on("load",function(){
   $('.loader').fadeOut(500); 
});

doc.ready(function(){
    
    "use strict";
    
    $(window).scrollTop(0);
    
    var typed = new Typed('.mytext', {
        strings: ['Data Scientist','Badminton Player','Bookworm'],
        smartBackspace: true, // Default value
        loop: true,
        backDelay: 1400,
        typeSpeed: 10
    });
    
    $('.navbar-nav').onePageNav({
        currentClass: 'active'
    });
    
    if($(window).scrollTop()<200)
        {
            $('.navbar-nav').addClass('navbar-nav-bg');
        }
    
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top>=200)
            {
                $('header').addClass('overlay');
                $('.navbar-nav').removeClass('navbar-nav-bg');
            }
        else if($('header').hasClass('overlay'))
            {
                $('header').removeClass('overlay');
            }
        else
            {
                $('.navbar-nav').addClass('navbar-nav-bg');
            }
    });
    
    
    var $grid = $('.portfolio-container').isotope({
      // options
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });
    
    $('.filter li').on( 'click', function() {
        $('.filter li').removeClass('filter-active');
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
      $(this).addClass('filter-active');
    });
    
});