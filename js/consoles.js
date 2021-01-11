function createPSGamesSlider() {
  $("#ps5-games-slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
}

function getHash() {
  if (window.location.hash) {
    // NOTE si hay hash...
    var trigger = document.querySelector(window.location.hash);
    if (trigger) {
      // NOTE si existe ese elemento...
      var tab = new bootstrap.Tab(trigger);
      console.log('tab', tab)
      tab.show();
    }
  } else {

  }
}

var playstationTab = document.querySelector('#nav-playstation-tab');

playstationTab.addEventListener('show.bs.tab', (e) => {
  createPSGamesSlider();
})


playstationTab.addEventListener('hide.bs.tab', () => {
  $('#ps5-games-slider').slick('unslick');
})

window.addEventListener("popstate", () => {
  // NOTE al cambiar el estado del url...
  getHash();
});

getHash();
createPSGamesSlider();

// createNintendoSlider();