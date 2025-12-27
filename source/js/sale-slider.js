const saleSection = document.querySelector('.sale');
const links = saleSection?.querySelectorAll('.sale .products-slider__scrollbar-link');
const listItems = saleSection?.querySelectorAll('.sale-slider__item');

const salePaginationContainer = saleSection?.querySelector('.sale__swiper-pagination');
const saleBullets = salePaginationContainer?.querySelectorAll('.swiper-pagination__bullet');

const changeSlide = () => {};

const findActiveElement = (arr, classElem) => {
  const activeIndex = Array.from(arr).findIndex((elem) => elem.classList.contains(classElem));
  return activeIndex;
};

findActiveElement(listItems, 'sale-slider__item--current');
salePaginationContainer.addEventListener('click', changeSlide);

const initProductSlider = () => {
  links.forEach((link, index) => {
    link.classList.toggle('products-slider__scrollbar-link--active', index === 0);
  });

  links.forEach((link) => {
    const activateSlide = () => {
      listItems.forEach((item, idx) => {
        if(idx === [...links].indexOf(link)) {
          item.classList.add('sale-slider__item--current');
        } else {
          item.classList.remove('sale-slider__item--current');
        }
      });

      links.forEach((l) => l.classList.remove('products-slider__scrollbar-link--active'));
      link.classList.add('products-slider__scrollbar-link--active');
    };

    link.addEventListener('mouseenter', activateSlide);
    link.addEventListener('focus', activateSlide);
  });
};

salePaginationContainer.addEventListener('click',(evt) => {
  // УДАЛИЛИ АКТИВНЫЙ КЛАСС СО ВСЕХ БУЛЛЕТОВ
  const arrOfBullets = Array.from(saleBullets);
  arrOfBullets.forEach((btn) => btn.classList.remove('swiper-pagination__bullet--active'));

  // ДОБАВИЛИ АКТИВНЫЙ КЛАСС НА БУЛЛЕТ, КОТОРЫЙ  НАЖАЛИ
  const btnTarget = evt.target.closest('.swiper-pagination__bullet');

  btnTarget.classList.add('swiper-pagination__bullet--active');
  console.log(btnTarget);
  // НАШЛИ АКТИВНЫЙ БУЛЛЕТ
  const indexOfActiveBullet = arrOfBullets.findIndex((elem) => elem === btnTarget);
  console.log(indexOfActiveBullet);
  // ОЧИЩАЕМ АКТИВНЫЕ КАРТИНКИ
  listItems.forEach((elem) => elem.classList.remove('sale-slider__item--current'));
  listItems[indexOfActiveBullet].classList.add('sale-slider__item--current');

});



document.addEventListener('DOMContentLoaded', initProductSlider);

export { initProductSlider };
