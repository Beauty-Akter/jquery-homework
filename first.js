$(document).ready(function(){
    // $('.button1').click(function(){
    //   $('.para').animate({
    //         left:'600px',
    //         width:'150px',

    //     });
    // });

    $('.button1').click(function(){
        $('.para').animate({
            top: '300px',
          width: '150px',
          height : '200px',
          left: '500px',
        });
    });
    $('.button2').click(function(){
        $('.para').animate({
            top: '200px',
          width: '50px',
          height : '200px',
        });
    });
  


});
$('.button3').click(function(){
    $('.para2').hide();
});
$('.button4').click(function(){
    $('.para2').show();
});
$('.button5').click(function(){
    $('.para3').toggle();
});
$('.button6').click(function(){
    $('.img').slidestoggle();
});