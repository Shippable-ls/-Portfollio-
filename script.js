var playing = true;

function loop(){
  if(playing){
    $('.images img:eq(1)').fadeIn(700, function(){
      $(this).fadeOut(700,loop);
    });
  }
}

loop(); // start loop


$('#stop').click(function(){
  playing=0;
}); 