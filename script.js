var animation = bodymovin.loadAnimation({
    container: document.getElementById('animContainer'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
   
    path: 'https://assets9.lottiefiles.com/packages/lf20_5n8yfkac.json', // lottie file path
 
  });


  var animation2 = bodymovin.loadAnimation({
      container: document.getElementById('anim2'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'sample.json',
    
  });

  const play = document.getElementById('button');
  const play2 = document.getElementById('button2');

  play.addEventListener('click',function (){
      if(animation.isPaused){
          animation.play();
      }
      else{
          animation.pause();
      }
  });

  play2.addEventListener('click',function (){
    if(animation2.isPaused){
        animation2.play();
    }
    else{
        animation2.pause();
    }
});