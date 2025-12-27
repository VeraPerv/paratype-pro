// import {isEscapeKey, isEnterKey} from './util';

// const saleSelect = document.querySelector('.sale-select');
// const selectButtons = saleSelect?.querySelectorAll('.select-button');
// const activeButton = saleSelect?.querySelector('.select-button--current');
// const selectScreen = saleSelect?.querySelector('.sale-select__screen');
// // const selectWrapper = saleSelect?.querySelector('.sale-select');
// console.log(saleSelect);
// const selectItems = document.querySelectorAll('.select-list__button');
// const breakpointSelect = window.matchMedia('(min-width: 920px)');
// console.log(breakpointSelect)

// const setTabIndex = (arr) => {
//   const newArr = [...arr];
//   newArr.forEach((item) => {
//     item.setAttribute('tabindex', '0');
//   });
// };

// const removeTabIndex = (arr) => {
//   const newArr = [...arr];
//   newArr.forEach((item) => {
//     item.setAttribute('tabindex', '-1');
//   });
// };

// const initSelectButtonHover = () => {
//   selectButtons.forEach((btn) => {
//     if (!btn.classList.contains('select-button--current')) {
//       btn.addEventListener('mouseenter', (evt) => {
//         const currentBtn = evt.target;
//         if (currentBtn) {
//           selectButtons.forEach((btnElem) => btnElem.classList.remove('select-button--current'));
//           currentBtn.classList.add('select-button--current');
//         }
//         activeButton.classList.remove('select-button--current');
//       });

//       btn.addEventListener('mouseleave', (evt) => {
//         const btnForLeave = evt.target;
//         btnForLeave.classList.remove('select-button--current');
//         activeButton.classList.add('select-button--current');
//       });
//     }
//   });
// };

// const openCloseSelect = (evt) => {
//   if (evt.type === 'click') {
//     if (evt.target.closest('.sale-select__screen')) {
//       saleSelect.classList.toggle('sale-select--open');
//     }
//   } else if (evt.type === 'keydown') {
//     if (isEnterKey(evt)) {
//       saleSelect.classList.toggle('sale-select--open');
//     } else if (isEscapeKey(evt)) {
//       saleSelect.classList.remove('sale-select--open');
//     }
//   }

//   if(saleSelect.classList.contains('sale-select--open')) {
//     setTabIndex(selectButtons);
//   } else {
//     removeTabIndex(selectButtons);
//   }
// };

// breakpointSelect.addEventListener('change', () => {
//   if (breakpointSelect.matches) {
//     console.log('СОВПАЛ БРЕЙК');
//     setTabIndex(selectButtons);

//   } else {
//     removeTabIndex(selectButtons);
//   }
// }
// );


// saleSelect?.addEventListener('click', openCloseSelect);
// saleSelect?.addEventListener('keydown', openCloseSelect);




// export { initSelectButtonHover };
import { isEscapeKey, isEnterKey } from './util';

const saleSelect = document.querySelector('.sale-select');
const selectButtons = saleSelect?.querySelectorAll('.select-button');
const activeButton = saleSelect?.querySelector('.select-button--current');
// const selectScreen = saleSelect?.querySelector('.sale-select__screen');
const breakpointSelect = window.matchMedia('(min-width: 920px)');

const setTabIndex = (arr, value) => {
  if (!arr) return;
  arr.forEach((item) => {
    item.setAttribute('tabindex', value);
  });
};

// Функция инициализации tabindex в зависимости от состояния меню и ширины экрана
const updateTabIndex = () => {
  if (!selectButtons) return;

  if (breakpointSelect.matches) {
    // При ширине >= 920 всегда tabindex = 0
    setTabIndex(selectButtons, '0');
  } else {
    // При меньшей ширине: tabindex=0 только если меню открыто, иначе -1
    if (saleSelect.classList.contains('sale-select--open')) {
      setTabIndex(selectButtons, '0');
    } else {
      setTabIndex(selectButtons, '-1');
    }
  }
};

const initSelectButtonHover = () => {
  if (!selectButtons) return;

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

  // Обновляем tabindex после изменения состояния меню
  updateTabIndex();
};

// Слушаем событие изменения ширины окна (иначе у media query не сработает addEventListener)
breakpointSelect.addEventListener('change', () => {
  updateTabIndex();
});

// Инициализация при загрузке страницы
window.addEventListener('load', () => {
  updateTabIndex();
});

saleSelect?.addEventListener('click', openCloseSelect);
saleSelect?.addEventListener('keydown', openCloseSelect);

export { initSelectButtonHover };