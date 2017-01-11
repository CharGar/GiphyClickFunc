$(function () {
  console.log('document is ready');


var array = ['url("gun.gif")', 'url("tetris.gif")', 'url("duck.gif")', 'url("cruise.gif")', 'url("deathstar.gif")', 'url("megaman.gif")', 'url("chuck.gif")', 'url("trooper.gif")'];


  $('button').on('click', function(){
    var selector = array[randomNumber(0,8)];
    console.log("ive been clicked");
    $('.container').append('<div class="box"</div>');
    $('.box:last').css('background-image', array[randomNumber(0,8)]);

  })
  $('.container').on('click', '.box', function(){
    $(this).css('background-image', array[randomNumber(0,8)]);

  })
});

function randomNumber(min, max){
return Math.floor(Math.random() * (1 + max - min) + min);
}
