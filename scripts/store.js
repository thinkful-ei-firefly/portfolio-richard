'use strict';

//eslint-disable-next-line no-unused-vars
const store = (function() {
  const page='home';

  const images={
    bookmark: './images/bookmarks.png',
    quiz: './images/presidentsQuiz.png',
    jquery: './images/jquery-1.svg" alt="jQuery',
  };

  const links={
    bookmark: {
      live: 'https://thinkful-ei-firefly.github.io/richard-bookmarks-app/',
      repo: 'https://github.com/thinkful-ei-firefly/richard-bookmarks-app',},
    quiz: {
      live: 'https://thinkful-ei-firefly.github.io/chris_richard_quiz/',
      repo: 'https://github.com/thinkful-ei-firefly/chris_richard_quiz',
    }
  };

  return {
    page,
    images,
    links,
  };
})();