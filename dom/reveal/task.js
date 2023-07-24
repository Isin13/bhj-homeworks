const blocks = document.querySelectorAll('.reveal');

function addActiveClass() {
  blocks.forEach((block) => {
    if (isVisible(block)) {
      block.classList.add('reveal_active');
    } else {
      block.classList.remove('reveal_active');
    }
  });
}

function isVisible(el) {
  const { top, bottom } = el.getBoundingClientRect();
  return top < window.innerHeight && bottom >= 0;
}

window.addEventListener('scroll', addActiveClass);

