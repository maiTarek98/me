   window.onload=function()
   {  $('#owl-demo').owlCarousel({
    loop: true,
    margin: 50,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: false
        },
        768: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: true,
            loop: true
        }
    }
});
    $("#desserts").click(function(){
        $(".dessert").css("display","block");
        $(".main").css("display","none");
        $(".drink").css("display","none");

    });

    $("#mains").click(function(){
        $(".main").css("display","block");
        $(".drink").css("display","none");
        $(".dessert").css("display","none");

    });

    $("#drinks").click(function(){
        $(".drink").css("display","block");
        $(".dessert").css("display","none");
        $(".main").css("display","none");

    });


    // $(window).on("scroll",function(){
    //     if($(window).scrollTop())
    //     {  
    //         $(".navbar").addClass('fixed');
    //     }
    //     else
    //     {
    //         $(".navbar").removeClass('fixed');
    
    //     } 
    // });


    $(".navbar .nav-item .nav-link").click(function (e) {
        e.preventDefault();
        $(this).addClass("jQstyle").parent().siblings().find(".nav-link").removeClass("jQstyle");

    });

    $(".navbar .nav-item .nav-link").click(function(){
        
        $("html,body").animate({

            scrollTop : $("#" + $(this).data('scroll')).offset().top-80,

        },500);
    });

    $(window).scroll(function(){

        $(".root").each(function(){

            if($(window).scrollTop() >= $(this).offset().top-80)
            {
                var  id = $(this).attr("id");
                $(".navbar .nav-item .nav-link").removeClass("jQstyle");
                $(".navbar .nav-item .nav-link[data-scroll='"+ id +"']").addClass("jQstyle");
            }
    });
});

$(".form-control").each(function(){
    $(this).css({
        left:$(this).find(this).innerWidth() -20,

    })
})

$(".speed").each(function(){
    $(this).animate({
        width:"100%",
    },1000,function(){
      $(".mainn").fadeIn(300);
      $(".speed").fadeOut();
    });
});
   }