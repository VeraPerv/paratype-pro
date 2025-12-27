import {debounce} from './util';

const setupScrollButton = () => {
  const buttonScroll = document.querySelector('.button-scroll');
  if (!buttonScroll) {
    return;
  }

  const onScroll = () => {
    if (window.pageYOffset < 400) {
      buttonScroll.classList.remove('button-scroll--shown');
    } else {
      buttonScroll.classList.add('button-scroll--shown');
    }
  };

  const onScrollDebounce = debounce(onScroll, 200);

  const onScrollButtonHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  buttonScroll.addEventListener('click', onScrollButtonHandler);
  window.addEventListener('scroll', onScrollDebounce);
};

export { setupScrollButton };
