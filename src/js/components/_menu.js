import { OPEN, BODY, OVERFLOW_HIDDEN, HTML } from '../constants';

const header = $('.js-header');
const btn = $('.js-btn-menu');

btn.on('click', function() {
  if (!header.hasClass(OPEN)) {
    HTML.addClass(OVERFLOW_HIDDEN);
    header.addClass(OPEN);
  }
  else {
  	HTML.removeClass(OVERFLOW_HIDDEN);
  	header.removeClass(OPEN);
  }
});

BODY.on('click', e => {
  if ($(e.target).closest('.js-btn-menu').length) return;
  header.removeClass(OPEN);
  HTML.removeClass(OVERFLOW_HIDDEN);
});
