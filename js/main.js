// const nav_button = document.querySelector('.topheader__item');
// const submenu    = document.querySelector('.topheader__submenu');

// nav_button.addEventListener( 'click', () => {

//     if ( submenu.style.display === "none" ) {
//         submenu.style.display = 'block'
//     }
// });


$( ".topheader__item button" ).click(function() {
  $( ".topheader__submenu" ).toggle( "slide", function() {
    // Animation complete.
  });
});
