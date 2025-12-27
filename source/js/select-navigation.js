import { isEscapeKey, isEnterKey } from './util';

const saleSelect = document.querySelector('.sale-select');
const selectButtons = saleSelect?.querySelectorAll('.select-button');
const activeButton = saleSelect?.querySelector('.select-button--current');
const breakpointSelect = window.matchMedia('(min-width: 920px)');

const setTabIndex = (arr, value) => {
  if (!arr) {
    return;
  }
  arr.forEach((item) => {
    item.setAttribute('tabindex', value);
  });
};

const updateTabIndex = () => {
  if (!selectButtons) {
    return;
  }

  if (breakpointSelect.matches) {
    setTabIndex(selectButtons, '0');
  } else {
    if (saleSelect.classList.contains('sale-select--open')) {
      setTabIndex(selectButtons, '0');
    } else {
      setTabIndex(selectButtons, '-1');
    }
  }
};

const initSelectButtonHover = () => {
  if (!selectButtons) {
    return;
  }

  selectButtons.forEach((btn) => {
    if (!btn.classList.contains('select-button--current')) {
      btn.addEventListener('mouseenter', (evt) => {
        const currentBtn = evt.target;
        if (currentBtn) {
          selectButtons.forEach((btnElem) => btnElem.classList.remove('select-button--current'));
          currentBtn.classList.add('select-button--current');
        }
        activeButton.classList.remove('select-button--current');
      });

      btn.addEventListener('mouseleave', (evt) => {
        const btnForLeave = evt.target;
        btnForLeave.classList.remove('select-button--current');
        activeButton.classList.add('select-button--current');
      });
    }
  });
};

const openCloseSelect = (evt) => {
  if (evt.type === 'click') {
    if (evt.target.closest('.sale-select__screen')) {
      saleSelect.classList.toggle('sale-select--open');
    }
  } else if (evt.type === 'keydown') {
    if (isEnterKey(evt)) {
      saleSelect.classList.toggle('sale-select--open');
    } else if (isEscapeKey(evt)) {
      saleSelect.classList.remove('sale-select--open');
    }
  }

  updateTabIndex();
};

breakpointSelect.addEventListener('change', () => {
  updateTabIndex();
});

window.addEventListener('load', () => {
  updateTabIndex();
});

saleSelect?.addEventListener('click', openCloseSelect);
saleSelect?.addEventListener('keydown', openCloseSelect);

export { initSelectButtonHover };
