document.addEventListener('DOMContentLoaded', function() {
    // Laad de Lottie-animatie
    var anim = lottie.loadAnimation({
      container: document.getElementById('lottie'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: 'js/lottie/logo_animatie_01.json' // Zorg dat dit bestand in de juiste map staat
    });
  
    // Na 6 seconden verwijderen we het splashscreen
    setTimeout(function() {
      // Optie 1: Splashscreen element verwijderen
      var splash = document.getElementById('splash');
      splash.parentNode.removeChild(splash);
  
      // Optie 2: Splashscreen verbergen (gebruik eventueel een fade-out effect via CSS)
      // splash.style.display = 'none';
    }, 6000);
  });
  