   window.onload=function()
   {  
 

/* Start Fixed Menu */
// $(window).on("scroll",function(){
//     if($(window).scrollTop())
//     {  
//         $(".navv").addClass('fixed');
//     }
//     else
//     {
//         $(".navv").removeClass('fixed');

//     } 
// });
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


var counter2=1;
var timer2=setInterval(function(){
    if(counter2 <800)
    {
        counter2++;
        $("#about-num4").text(counter2+ '+');
    }
    else{
        clearInterval(timer2);
    }
    
    },9);


 $(".Restimg1").hover(function(){
     $(".divInfo1").css("visibility","visible");
 });

 $(".divInfo1").mouseleave(function(){
     $(this).css("visibility","hidden");
 });

 $(".Restimg2").hover(function(){
     $(".divInfo2").css("visibility","visible");
 });

 $(".divInfo2").mouseleave(function(){
     $(this).css("visibility","hidden");
 });

     $(".Restimg3").hover(function(){
     $(".divInfo3").css("visibility","visible");
 });

 $(".divInfo3").mouseleave(function(){
     $(this).css("visibility","hidden");
 });
    
     $(".Restimg4").hover(function(){
     $(".divInfo4").css("visibility","visible");
 });

 $(".divInfo4").mouseleave(function(){
     $(this).css("visibility","hidden");
 });
    ///////////////////

$(".leadImg1").mouseover(function(){
    $(this).hide();
    $(".Leadinfo1").show();
});
$(".leadImg2").mouseover(function(){
    $(this).hide();
    $(".Leadinfo2").show();

});
$(".leadImg3").mouseover(function(){
    $(this).hide();
    $(".Leadinfo3").show();

});
$(".Leadinfo1").mouseleave(function(){
    $(".leadImg1").show();
    $(this).hide();

});
$(".Leadinfo2").mouseleave(function(){
    $(".leadImg2").show();
    $(this).hide();

});
$(".Leadinfo3").mouseleave(function(){
    $(".leadImg3").show();
    $(this).hide();

});



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
         $(".spin").fadeIn();
    $(this).animate({
        width:"100%",
    },1000,function(){
      $(".mainn").fadeIn(300);
      $(".speed").fadeOut();
     $(".spin").fadeOut();

    });
});







// start animation of search
$("<input type='text' class='text-search'>").insertAfter(".search");
$(".text-search").css("display","none");
$(".text-search").css("width","0px");

$(".search").click(function(){
    $(".text-search").css({
        width:"200px",
        border:"none",
        visibility:"visible",
        background:"none",
        borderBottom:"4px solid rgb(241, 131, 24)",

    });
    $(this).css({

        position: "absolute",
        left:$(this).find('.text-search').innerWidth()-10,
        

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





  // btn top //

  $(window).scroll(function(){
    if($(this).scrollTop() >= 700){

        $(".btn-top").show(300);
    }else{
        $(".btn-top").hide(300);

    }

  });
   $(".btn-top").click(function(){
    $("html,body").animate({
        scrollTop:(0),
    },500);
   });


//start animation for button
         $(".btn2").hover(function(){

        $(".forward").animate({
            width:"100%",
        },150)

    },function(){
        $(".forward").animate({
            width:0,
        },150);
    });

   }