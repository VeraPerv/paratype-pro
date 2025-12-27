
import {mobileMenuToggle} from './mobile-menu';
import { initProductSlider } from './sale-slider';
import { initBestSellerSlider } from './bestseller-slider';
import { initRecommendationSlider } from './recommendation-slider';
import { initPromoSlider } from './promo-slider';
import { initSaleToggle, initBestsellerToggle, initRecommendationToggle } from './sale-toggle';
import { handleResponsiveMenu } from './menu-primary-navigation';
import { initSelectButtonHover } from './select-navigation';
import { initEmailValidation } from './validation';
import { initThemeSwitcher } from './theme-switch';
// import { initScrollButton } from './button-scroll';

import {debounce} from './util';

mobileMenuToggle();
initPromoSlider();
initProductSlider();
initBestSellerSlider();
initRecommendationSlider();
initSaleToggle();
initBestsellerToggle();
initRecommendationToggle();
handleResponsiveMenu();
initSelectButtonHover();
initEmailValidation();
initThemeSwitcher();
// initScrollButton();

// скролл наверх и появление кнопки скролла
const buttonScroll = document.querySelector('.button-scroll');


const onScroll = () => {
  if(window.pageYOffset < 400) {
    buttonScroll.classList.remove('button-scroll--shown');
  } else {
    buttonScroll.classList.add('button-scroll--shown');
  }
};

const onScrollDebounce = debounce(onScroll, 200);

const onScrollButtonHandler = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

buttonScroll.addEventListener('click', onScrollButtonHandler);

window.addEventListener('scroll', onScrollDebounce);

// плавное появление элементов
const intersectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-animated--visible'); // добавляем класс для анимации
      observer.unobserve(entry.target); // остановить наблюдение, если нужно по одному срабатыванию
    }
  });
}, { threshold: 0.1 }); // срабатывание при появлении хотя бы 10% элемента

// затем наблюдаем за нужными элементами
document.querySelectorAll('.is-animated').forEach((el) => {
  intersectionObserver.observe(el);
});
