$(".openMenu").on("click",function(){
    $("#menu").animate({ width:'250px'},25)
   $("#content").animate({marginLeft :'225px'},25)
})
$(".closeX").on("click",function(){
    $("#menu").animate({ width:'0px'},25)
   $("#content").animate({marginLeft :'0px'},25)
})
$("#menu a[href = '#']").on("click",function(){
    let ahref= $(this).attr("href");
let secOffset=$(ahref).offset().top;
    $("html , body").animate({scrollTo:secOffset},1000);
    
})
$('#sliderDown .contentSec').on("click",function(){
    $('.firstPara,.paragraph').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});

window.onload = function() {
   
    counterDown("10 october 2023 9:56:00");
  }

  function counterDown(countTo) {
  
        let countData = new Date(countTo);
    countData = (countData.getTime()/1000);

    let countHere = new Date();
    countHere = (countHere.getTime()/1000);

    countChanges = (countData- countHere);
        
   let days = Math.floor( countChanges / (24*60*60));
   let hours = Math.floor((countChanges - (days * (24*60*60))) / 3600);
   let mins = Math.floor((countChanges - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((countChanges - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

  
    setInterval(function() {  counterDown(countTo); }, 1000);
  }




  let counterNum = 100;
$('textarea').keyup(function() {
  let countDo = $(this).val().length;
  let sumCount = counterNum-countDo;
  if(sumCount<=0)
            {
                 $("#counter").text("your available character finished");
                
            }
        else{
        
        $("#counter").text(sumCount);
        }
});
