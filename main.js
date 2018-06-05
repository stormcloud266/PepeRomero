$( document ).ready(function() {

// sets up fading background on homescreen
  let bgImageIndex = 0;
  function backgroundChange() {
    // makes sure index doesn't go above the number of pictures
    ++bgImageIndex;
    if (bgImageIndex > 2) {
      bgImageIndex = 0;
    }
    // fades out background, changes it, and fades in new background
    $('.bg-fade').fadeOut(1800, function(){
      $('.bg-fade').css('background-image', 'url(assets/imgs/pepe-'+bgImageIndex+'.jpg)').fadeIn(1800)
    })
  };

  // fades in first image on page load
  $('.bg-fade').hide().fadeIn(1000);
  // sets timer for continous background change
  setInterval(backgroundChange, 5000);
});
