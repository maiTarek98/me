   window.onload=function()
   {  
 /* Start Signup Page Style */

   $("form").animate({
        width:"100%",
        height:"100%",   
    },500,function(){

        $(".input").animate({
            width:"100%",
        },500,function(){
            $("#exampleInputPassword1").animate({

                width:"90%",
            },500,function(){

                $(".btn").animate({
                    marginLeft:0,
                });
            });
        });
    });


////////////////

    $(".input-group-text").on('click',function() {
        if ($(".pass").attr('type') === 'password') {
            $(".pass").attr('type', 'text');
            $(".fa-eye-slash").attr('class', 'fa-eye');


        } else {
            $(".pass").attr('type', 'password');
            $(".fa-eye").attr('class', 'fa-eye-slash');

        }
    });
/* End Signup Page Style */

}