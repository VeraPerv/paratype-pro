const bestSellerSection = document.querySelector('.bestseller');
const bestSellerLinks = bestSellerSection?.querySelectorAll('.bestseller .products-slider__scrollbar-link');
const bestSellerListItems = bestSellerSection?.querySelectorAll('.bestseller-slider__item');
const bestSellerPaginationContainer = bestSellerSection?.querySelector('.bestseller__swiper-pagination');
const bestSellerBullets = bestSellerPaginationContainer?.querySelectorAll('.swiper-pagination__bullet');

const initBestSellerSlider = () => {
  bestSellerLinks.forEach((link, index) => {
    link.classList.toggle('products-slider__scrollbar-link--active', index === 0);
  });

  bestSellerLinks.forEach((link) => {
    const activateSlide = () => {
      bestSellerListItems.forEach((item, idx) => {
        if(idx === [...bestSellerLinks].indexOf(link)) {
          item.classList.add('bestseller-slider__item--current');
        } else {
          item.classList.remove('bestseller-slider__item--current');
        }
      });

      bestSellerLinks.forEach((l) => l.classList.remove('products-slider__scrollbar-link--active'));
      link.classList.add('products-slider__scrollbar-link--active');
    };

    link.addEventListener('mouseenter', activateSlide);
    link.addEventListener('focus', activateSlide);
  });
};

bestSellerPaginationContainer.addEventListener('click',(evt) => {
  const arrOfBullets = Array.from(bestSellerBullets);
  arrOfBullets.forEach((btn) => btn.classList.remove('swiper-pagination__bullet--active'));
  const btnTarget = evt.target.closest('.swiper-pagination__bullet');
  btnTarget.classList.add('swiper-pagination__bullet--active');
  const indexOfActiveBullet = arrOfBullets.findIndex((elem) => elem === btnTarget);

  bestSellerListItems.forEach((elem) => elem.classList.remove('bestseller-slider__item--current'));
  bestSellerListItems[indexOfActiveBullet].classList.add('bestseller-slider__item--current');
});

document.addEventListener('DOMContentLoaded', initBestSellerSlider);

export { initBestSellerSlider };
