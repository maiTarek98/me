window.onload=function()
{
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



/////////////////


    // hover//
    var img1=document.getElementById('img1');
    var img2=document.getElementById('img2');
    var img3=document.getElementById('img3');

    var clickMe1=document.getElementById('clickMe1');
    var clickMe2=document.getElementById('clickMe2');
    var clickMe3=document.getElementById('clickMe3');


    img1.onmouseover=function()
    {
        clickMe1.style.visibility="visible";
    }
    img2.onmouseover=function()
    {
        clickMe2.style.visibility="visible";
    }
    img3.onmouseover=function()
    {
        clickMe3.style.visibility="visible";
    }


    img1.onmouseleave=function()
    {
        clickMe1.style.visibility="hidden";
    }
    img2.onmouseleave=function()
    {
        clickMe2.style.visibility="hidden";
    }
    img3.onmouseleave=function()
    {
        clickMe3.style.visibility="hidden";
    }


//
    // var productInfo=document.getElementsByClassName('product-info');
    // var cart=document.getElementsByClassName('cart');
    // var btn = document.createElement("BUTTON");  
    // btn.innerHTML = "ADD TO CART"; 
    // btn.setAttribute('class','btn btn-danger');
    // btn.classList.add('cart');
    //     for(var i=0;i<productInfo.length;i++)
    //     {
    //         productInfo[i].onmouseover=function()
    //             {
    //               this.style.border="2px solid #dededede";
    //               this.style.padding="5px";
    //               this.style.boxShadow = "5px 5px 5px gray";
    //               this.appendChild(btn); 
    //             }

    //             productInfo[i].onmouseleave=function()
    //             {
    //               this.style.border="none";
    //               this.style.padding = "none";
    //               this.style.boxShadow = "none";
    //               btn.remove('cart');
    //             }
            
    //     }

    var heart = document.createElement("I");  
    heart.setAttribute('class','far fa-heart');     
    heart.classList.add('heart-icon');


     var btn = document.createElement("BUTTON");  
     btn.innerHTML = "ADD TO CART"; 
     btn.setAttribute('class','btn btn-danger');
     btn.classList.add('cart');
    $(".men, .women, .accessories").hover(function(){
        $(this).css("border","2px solid #dededede");
        $(this).css("padding","3px");
        $(this).css("boxShadow","5px 5px 5px gray");
        $(this).css("marginBottom","20px");
        this.appendChild(heart); 
        this.appendChild(btn); 

    });
    $(".men, .women, .accessories").on("mouseleave",function(){
        $(this).css("border","none");
        $(this).css("padding","none");
        $(this).css("boxShadow","none");    
        this.removeChild(heart);    
        this.removeChild(btn); 


    });
    





        //////////////////////////////////////

        // var all=document.getElementById('all');
        // var women=document.getElementById('women');
        // var men=document.getElementById('men');
        // var accessories=document.getElementById('accessories');
    
        // var women1=document.getElementsByClassName('women');
        // var men1=document.getElementsByClassName('men');
        // var accessories1=document.getElementsByClassName('accessories');
    
        // var products=document.getElementById('products-new');
    
        
        // all.onclick=function()
        // {
        //     for(var i=0; i<4; i++)
        //     {
        //         men1[i].style.display="inline-block";
        //     }
          
        //     for(var i=0; i<4; i++)
        //     {
        //         accessories1[i].style.display="inline-block";
        //     }
        //     for(var i=0; i<2; i++)
        //     {
        //         women1[i].style.display="inline-block";
        //     }
        // }
        // women.onclick=function()
        // {
        //     for(var i=0; i<4; i++)
        //     {
        //         men1[i].style.display="none";
        //     }
          
        //     for(var i=0; i<4; i++)
        //     {
        //         accessories1[i].style.display="none";
        //     }
        //     for(var i=0; i<2; i++)
        //     {
        //         women1[i].style.display="inline-block";
        //     }
        // }
        // men.onclick=function()
        // {
        //       for(var i=0; i<2; i++)
        //       {
        //          women1[i].style.display="none";
        //       }
    
        //       for(var i=0; i<4; i++)
        //       {
        //           men1[i].style.display="inline-block";
        //       }
            
        //       for(var i=0; i<4; i++)
        //       {
        //           accessories1[i].style.display="none";
        //       }
            
        // }
        // accessories.onclick=function()
        // {
        //     for(var i=0; i<4; i++)
        //     {
        //         men1[i].style.display="none";
        //     }
          
        //     for(var i=0; i<4; i++)
        //     {
        //         accessories1[i].style.display="inline-block";
        //     }
        //     for(var i=0; i<2; i++)
        //     {
        //         women1[i].style.display="none";
        //     }
          
        // }
    
        $("#all").click(function(){
            $(".men").show();
            $(".women").show();
            $(".accessories").show();

        });

        $("#men").click(function(){
            $(".men").show();
            $(".women").hide();
            $(".accessories").hide();

        });

        $("#women").click(function(){
            $(".men").hide();
            $(".women").show();
            $(".accessories").hide();

        });

        $("#accessories").click(function(){
            $(".men").hide();
            $(".women").hide();
            $(".accessories").show();

        });
























        //////////////////////

////
    var day=document.getElementById('day');
    var hour=document.getElementById('hour');
    var min=document.getElementById('min');
    var sec=document.getElementById('sec');
    
    var countDownDate = new Date("Sep 11, 2019 15:37:25");
    var timer = setInterval(function() {
      var now = new Date();
      var distance = countDownDate - now;
        
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      day.style.color="red";
      hour.style.color="red";
      min.style.color="red";
      sec.style.color="red";

      day.innerHTML=days +"<br> <p style='font-size:20px; color:black;'> Day</p>";
      hour.innerHTML=hours + "<br> <p style='font-size:20px; color:black;'> Hours</p>";
      min.innerHTML=minutes + "<br> <p style='font-size:20px; color:black;'> Mins</p>";
      sec.innerHTML=seconds + "<br> <p style='font-size:20px; color:black;'> Sec</p>";
      if (distance < 0) {
        clearInterval(timer);
     
        $(".time").remove();
        $(".btn-dark").remove();
        $(".deal").remove();
        $("<h2 class='text'> Wait The Next Deal </h2>").insertAfter('.timer');
      }
    }, 1000);
    



    $('#owl-demo').owlCarousel({
        loop: true,
        margin: 50,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            768: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: true,
                loop: true
            }
        }
    });






//////////////////////

$(document).ready(function(){
    $(".fa-search").click(function(){
    $(".search").attr("type", "text");
   
  });
});
}

