import { modifier } from 'ember-modifier';

export default modifier((element, [callback], options = { isEnabled: true }) => {
  function handleClick({target}) {
    if (options.isEnabled && !element.contains(target)) callback();
  }

  setTimeout(() => {
    document.addEventListener('click', handleClick);
  }, 0); // Wait for the next Javascript Run Loop

  return () => {
    setTimeout(() => {
      document.removeEventListener('click', handleClick);
    }, 0); // Wait for the next Javascript Run Loop
  };
});
