// @include jquery.js

// const showCounter = (c) => console.info(`Current value: "${c}"`);

const INPUT_SELECTOR = '.Programming_TicketPriceQuantity';
const MAX_VALUE = 10;
const ERROR_MESSAGE = 'You have exceeded the max quantity of 10 for this event';

const getCurrentCounter = () => {
  let counter = 0;
  $(INPUT_SELECTOR).each((index, element) => {
    let value = parseInt($(element).val());
    counter += isNaN(value) ? 0 : value;
  });
  return counter;
};

const countToTen = () => {
  // $(INPUT_SELECTOR).off('input');
  $(INPUT_SELECTOR).on('input', (evt) => {
    const current = getCurrentCounter();
    const ref = $(evt.target);
    const value = parseInt(ref.val());
    if (!isNaN(value)) {
      if (value > 0 && current <= MAX_VALUE) {
        ref.val(value);
      } else {
        ref.val(ref.val().slice(0, -1));
        window.alert(ERROR_MESSAGE);
      }
    } else {
      ref.val(ref.val().slice(0, -1));
    }
    // showCounter(current);
  });
};

// const startToCount = () => {
//   $(document).ready(() => {
//     console.info('are you ready to count to ten?');
//     countToTen();
//   });
// };

// startToCount();