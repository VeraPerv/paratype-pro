
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
import { setupScrollButton } from './button-scroll';
import { initIntersectionAnimation } from './page-intersection';

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
setupScrollButton();
initIntersectionAnimation();
