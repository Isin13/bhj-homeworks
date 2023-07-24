function rotateText(rotator) {
  const cases = rotator.getElementsByClassName('rotator__case');
  
  let activeIndex = Array.from(cases).findIndex(caseElem => caseElem.classList.contains('rotator__case_active'));
  
  cases[activeIndex].classList.remove('rotator__case_active');
  
  activeIndex = (activeIndex + 1) % cases.length;
  
  cases[activeIndex].classList.add('rotator__case_active');
}

const rotators = document.getElementsByClassName('rotator');

Array.from(rotators).forEach((rotator) => {
  setInterval(() => rotateText(rotator), 1000);
});
