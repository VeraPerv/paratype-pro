const recommendSection = document.querySelector('.recommendation');
const recommendationLinks = recommendSection?.querySelectorAll('.recommendation .products-slider__scrollbar-link');
const recommendationItems = recommendSection?.querySelectorAll('.recommendation-slider__item');

const recommendPaginationContainer = recommendSection?.querySelector('.recommendation__swiper-pagination');
const recommendBullets = recommendPaginationContainer?.querySelectorAll('.swiper-pagination__bullet');

const initRecommendationSlider = () => {
  // recommendationItems.forEach((item, index) => {
  //   item.style.display = index === 0 ? 'block' : 'none';
  // });

  recommendationLinks.forEach((link, index) => {
    link.classList.toggle('products-slider__scrollbar-link--active', index === 0);
  });

  recommendationLinks.forEach((link) => {
    const activateSlide = () => {
      recommendationItems.forEach((item, idx) => {
        if(idx === [...recommendationLinks].indexOf(link)) {
          item.classList.add('recommendation-slider__item--current');
        } else {
          item.classList.remove('recommendation-slider__item--current');
        }
      });
      recommendationLinks.forEach((l) => l.classList.remove('products-slider__scrollbar-link--active'));
      link.classList.add('products-slider__scrollbar-link--active');
    };

    link.addEventListener('mouseenter', activateSlide);
    link.addEventListener('focus', activateSlide);
  });
};


recommendPaginationContainer.addEventListener('click',(evt) => {
  // УДАЛИЛИ АКТИВНЫЙ КЛАСС СО ВСЕХ БУЛЛЕТОВ
  const arrOfBullets = Array.from(recommendBullets);
  arrOfBullets.forEach((btn) => btn.classList.remove('swiper-pagination__bullet--active'));

  // ДОБАВИЛИ АКТИВНЫЙ КЛАСС НА БУЛЛЕТ, КОТОРЫЙ  НАЖАЛИ
  const btnTarget = evt.target.closest('.swiper-pagination__bullet');

  btnTarget.classList.add('swiper-pagination__bullet--active');
  const indexOfActiveBullet = arrOfBullets.findIndex((elem) => elem === btnTarget);
  // ОЧИЩАЕМ АКТИВНЫЕ КАРТИНКИ
  recommendationItems.forEach((elem) => elem.classList.remove('recommendation-slider__item--current'));
  recommendationItems[indexOfActiveBullet].classList.add('recommendation-slider__item--current');

});
document.addEventListener('DOMContentLoaded', initRecommendationSlider);

export { initRecommendationSlider };
