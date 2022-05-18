'use strict';

window.addEventListener('DOMContentLoaded', () => {
  // =============================
  // common
  // =============================
  const body = document.querySelector('body');

  // =============================
  // header
  // =============================
  const headerNav = document.querySelector('.header__nav');
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const hamburgerText = document.querySelector('.hamburger-btn__text');
  const headerMask = document.querySelector('.header__mask');
  hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('open');
    if(hamburgerBtn.classList.contains('open')) {
      headerNav.classList.add('open');
      headerMask.classList.add('open');
      hamburgerText.innerHTML = 'CLOSE';
      body.style.overflowY = 'hidden';
      return;
    };
    closeHamburger();
  });

  headerMask.addEventListener('click', () => {
    closeHamburger();
  });
  
  function closeHamburger() {
    hamburgerBtn.classList.remove('open');
    headerNav.classList.remove('open');
    headerMask.classList.remove('open');
    hamburgerText.innerHTML = 'MENU';
    body.style.overflowY = 'auto';
  }

  // =============================
  // queestion
  // =============================
  const questions = document.querySelectorAll('.question__list-title');
  const answers = document.querySelectorAll('.question__answer');
  questions.forEach((question, index) => {
    question.addEventListener('click', () => {
      question.classList.toggle('question__list-title--open');
      if(question.classList.contains('question__list-title--open')) {
        answers[index].classList.add('question__answer--open');
        answerNegativeMargin();
      } else {
        answers[index].classList.remove('question__answer--open');
        answerNegativeMargin();
      }
    });
  });

  answerNegativeMargin();

  function answerNegativeMargin() {
    answers.forEach(answer => {
      const answerHeight = answer.clientHeight;
      if(answer.classList.contains('question__answer--open')) {
        answer.style.marginBottom = 0 + 'px';
      } else {
        answer.style.marginBottom = - answerHeight + 'px';
      }
    });
  }

  // =============================
  // resize
  // =============================
  window.addEventListener('resize', () => {
    answerNegativeMargin();
    closeHamburger();
  });
});
