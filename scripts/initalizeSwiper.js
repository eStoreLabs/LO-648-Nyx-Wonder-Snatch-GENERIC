(() => {
  const swiper = new Swiper('#es-rc #es-rc-content .es-swiper', {
    enabled: false, // start disabled for mobile
    slidesPerView: 1,
    loop: true,
    autoHeight: true,
    pagination: {
      el: '#es-swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '#es-button-next',
      prevEl: '#es-button-prev',
    },
    breakpoints: {
      756: {
        enabled: true,
      },
    },
  });
})();
