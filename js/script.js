$(function(){
  new WOW().init();
});

$(function(){
  $('.backtop').click(function(){
    jQuery("html,body").animate({
      scrollTop:0
    },100);
  });
  $(window).scroll(function() {
    if($(this).scrollTop()>300){
      $('.backtop').fadeIn("fast");
    }else{
      $('.backtop').stop().fadeOut("fast");
    }
  });

  $('#cake01').hover(function(){
            $('#cake01context').slideToggle();
      });  

  $('#cake02').hover(function(){
        $('#cake02context').slideToggle();
      });      

  $('#cake03').hover(function(){
        $('#cake03context').slideToggle();
      });  

  $('#cake04').hover(function(){
        $('#cake04context').slideToggle();
      });  

  $('#cake05').hover(function(){
        $('#cake05context').slideToggle();
      });  

  $('#cake06').hover(function(){
        $('#cake06context').slideToggle();
      });  

  $('#cake07').hover(function(){
        $('#cake07context').slideToggle();
      });  

  $('#cake08').hover(function(){
        $('#cake08context').slideToggle();
      });  

 $('#cake09').hover(function(){
        $('#cake09context').slideToggle();
      });  

$('#cake10').hover(function(){
        $('#cake10context').slideToggle();
      });  

$('#cake11').hover(function(){
        $('#cake11context').slideToggle();
      });
      
$('#cake12').hover(function(){
        $('#cake12context').slideToggle();
      });  

  $('.question01').click(function(){
        $('.antext01').slideToggle();
      });    
  
  $('.question02').click(function(){
      $('.antext02').slideToggle();
     });   

  $('.question03').click(function(){
      $('.antext03').slideToggle();
     }); 

  $('.question04').click(function(){
      $('.antext04').slideToggle();
     });   

  $('.question05').click(function(){
      $('.antext05').slideToggle();
     });   
         
});

$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});

$(function(){
  $(window).scroll(function(){
    if($(this).scrollTop()>600){
      $('#test001').fadeIn("slow");
    } else{
      $('#test001').fadeout("slow");
    }
  });

});




// $(()=>{
//     ScrollTrigger.create({
//         trigger: "#popular_product",
//         start: "top top",
//         pin: true,
//         pinSpacing: false,
//       }); 

//     let timeLine_news = new gsap.timeline({
//       scrollTrigger: {
//         trigger: "#news",
//         pin: true,
//         yoyo: true,
//         pin: true, // pin the trigger element while active
//         start: "bottom bottom",
//         end: "100%", // end after scrolling 500px beyond the start
//         scrub: true,
//         markers: true,
//         id: "news",
//       },

//     });

//     timeLine_news
//     .to(".title", 2, { color: "red", fontSize: 100 });


//       $('.cake').click(function(){
//         $('.cakecontext').slideToggle();
//   });
  

//   //   $('.person_chara').click(function(){
//   //       $('.person_information_chara').slideToggle();
//   // });
    
// })