   window.onload=function()
   {

/* Start Fixed Menu */
$(window).on("scroll",function(){
    if($(window).scrollTop())
    {  
        $(".navv").addClass('fixed');
    }
    else
    {
        $(".navv").removeClass('fixed');

    } 
});
/* End Fixed Menu */
var counter=1;
var timer=setInterval(function(){
if(counter<10)
{
    counter++;
    $("#about-num1").text(counter);
}
if(counter <80)
{
    counter++;
    $("#about-num2").text(counter);
}
else{
    clearInterval(timer);
}

},80);


// $(window).scroll(function(){

    //     if($(this).scrollTop() >= 100){
    //         $(".imL").animate({
    //             marginLeft:0,
    //         },1000);
    
    
    //         $(".imR").animate({
    //             right:0,
    //         },1000);
    //     }
    
    // });




    ///////////////////



$(".form-control").each(function(){
    $(this).css({
        left:$(this).find(this).innerWidth() -20,

    })
});
var zindex = 0;
$(".card").click(function(){
    $(this).animate({
        left: "-=20%",
        marginTop:"40px",
    },function(){

        zindex--
        $(this).css("zIndex",zindex);

    }).animate({
        left:"+=20%",
        marginTop:0,
    })
   
});

$(".speed").each(function(){
    $(this).animate({
        width:"100%",
    },1000,function(){
      $(".mainn").fadeIn(300);
      $(".speed").fadeOut();
    });
});







// start animation of search
$("<input type='text' class='text-search'>").insertAfter(".fa-search");
$(".text-search").css("display","none");
$(".text-search").css("width","0px");

$(".fa-search").click(function(){
    $(".text-search").css({
        width:"200px",
        border:"none",
        paddingLeft:"10px",
        visibility:"visible",
        background:"none",
        borderBottom:"4px solid rgba(165, 71, 5, 0.93)",

    });
    $(this).css({

        position: "absolute",
        left:$(this).find('.text-search').innerWidth() -10,

    });
    $(".text-search").toggle("slow");

});
// End animation of search


//start animation of navLink
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

    $(".eachAll").each(function(){

        if($(window).scrollTop() >= $(this).offset().top-80)
        {
            var  id = $(this).attr("id");
            $(".navbar .nav-item .nav-link").removeClass("jQstyle");
            $(".navbar .nav-item .nav-link[data-scroll='"+ id +"']").addClass("jQstyle");
        }
});
});

//End animation of navLink


       jQuery(document).ready(function($) {

           "use strict";



           $('.fancybox').on('click', function() {
               var visibleLinks = $('.fancybox');

               $.fancybox.open( visibleLinks, {}, visibleLinks.index( this ) );

               return false;
           });

       });







   }