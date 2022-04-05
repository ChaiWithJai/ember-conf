import { modifier } from 'ember-modifier';

export default modifier((element, [_callback]) => {
  let timer;

  function mouseout() {
    timer = setTimeout(function () {
      element.className = 'has-submenu';
    }, 1000);
  }

  function mouseover() {
    element.className = 'has-submenu open';
    clearTimeout(timer);
  }

  element.addEventListener('mouseout', mouseout);
  element.addEventListener('mouseover', mouseover);

  return () => {
    element.removeEventListener('mouseout', mouseout);
    element.removeEventListener('mouseover', mouseover);
  };
});
