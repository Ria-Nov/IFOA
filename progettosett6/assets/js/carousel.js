let splide = new Splide( '#trending', {
    type   : 'slide',
    perPage: 5,
    perMove: 1,
    isNavigation: true,
    pagination: false,
    arrows: true,
    drag: true,
  } );

  

  let splide2 = new Splide( '#watchItAgain', {
    type   : 'slide',
    perPage: 5,
    perMove: 1,
    isNavigation: true,
    pagination: false,
    arrows: true,
    drag: true,
  } );

  

  let splide3 = new Splide( '#newReleases', {
    type   : 'slide',
    perPage: 5,
    perMove: 1,
    isNavigation: true,
    pagination: false,
    arrows: true,
    drag: true,
  } );

  

  // splide.sync(splide2);
  // splide2.sync(splide3);

  splide.mount();
  splide2.mount();
  splide3.mount();