function createSlider( slider ) {
    $(`.slider-${slider}`).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: `.slider-${slider}-nav`,
    });
    $(`.slider-${slider}-nav`).slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: `.slider-${slider}`,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    arrows: true,
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

function destroySlider( slider ) {
    $(`.slider-${slider}`).slick('unslick');
    $(`.slider-${slider}-nav`).slick('unslick');
}

const accordionBodies = document.querySelectorAll('.accordion-collapse');
accordionBodies.forEach( body => {
    body.addEventListener('show.bs.collapse', function () { //NOTE on open
        createSlider(body.dataset.game);
    })
    body.addEventListener('hide.bs.collapse', function () { // NOTE on starting collapse
        document.querySelectorAll('.accordion video').forEach( video =>{
           video.pause();
           video.currentTime = 0; // NOTE stops all videos when the body collapse 
        });
    })
    body.addEventListener('hidden.bs.collapse', function () { // NOTE on collapse
        destroySlider(body.dataset.game);
    })
});