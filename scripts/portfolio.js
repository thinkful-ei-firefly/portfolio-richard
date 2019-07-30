'use strict';
/*global $ store*/

//eslint-disable-next-line no-unused-vars
const portfolio = (function() {

  //render
  const render = function() {
    //render about me if projects is false
    let html = '';
    if (!store.projects) {
      html = getHtmlAboutMe();
    }
    else {
      html = getHtmlProjects();
    }
    $('.center').html(html);
  };

  //eventBinder
  const eventBinder = function() {
    handleClickAboutMe();
    handleClickProjects();
  };

  //handle click about me
  const handleClickAboutMe = function() {
    $('header').on('click', '.js-about-me', e => {
      e.preventDefault();
      store.projects=false;
      render();
    });
  };

  //handle click projects
  const handleClickProjects = function() {
    $('header').on('click', '.js-projects', e => {
      e.preventDefault();
      store.projects=true;
      render();
    });
  };

  //return about me html
  const getHtmlAboutMe = function() {
    return `
      <section class="about-me">
      <p>Hi, I'm Richard a full-stack developer and an inventive problem solver.</p>
      <p>I am a web developer currently in the Engineering Immersion full-stack Bootcamp at Thinkful. I find implementing the things I learn to create new applications very fullfilling. excitement to learn more.... </p>
      <p>In my downtime, I like hanging out with family and close friends, fishing, and experiencing the great outdoors.  Having a healthy work-life balance is important to me.</p>
      </section>`;
  };

  //return projects html
  const getHtmlProjects = function() {
    return `
      <section class="my-bookmarks">
        <h2 id="alignLeft">My Bookmarks</h2>
        <div class="media">
            <img src="images/myBookmark0.png" alt="My Bookmarks App">
        </div>
        <p id="alignLeft">My Bookmarks was created for people who like collecting bookmarks of their favorite websites. Users can create, collecte and delete their favorite bookmarks.</p>
        <p class="project-links">
            <a href="https://thinkful-ei-firefly.github.io/richard-bookmarks-app/" target="_blank">Live</a>
            <a href="https://github.com/thinkful-ei-firefly/richard-bookmarks-app" target="_blank">Repo</a>
        </p>
        <p class="technologies">
            <i class="fab fa-html5"></i>
            <i class="fab fa-css3"></i>
            <i class="fab fa-js"></i>
            <img id="jqueryImg" src="images/jquery-1.svg" alt="jQuery">
        </p>
      </section>
      <section class="presidents-quiz">
        <h2>Presidents Quiz</h2>
        <img id="presQuizPic" src="images/presidentQuiz0.png" alt="Presidents Quiz">
        <p>Examine your familiarity with US presidents! The presidents quiz was created for those who would like to test their trivia knowledge of US presidnets. I built this app to help users learn more abstract knowledge of presidents of the United States.</p>
        <p class="project-links">
            <a href="https://thinkful-ei-firefly.github.io/chris_richard_quiz/" target="_blank">Live</a>
            <a href="https://github.com/thinkful-ei-firefly/chris_richard_quiz" target="_blank">repo</a>
        </p>
        <p class="technologies">
                <i class="fab fa-html5"></i>
                <i class="fab fa-css3"></i>
                <i class="fab fa-js"></i>
                <img id="jqueryImg" src="images/jquery-1.svg" alt="jQuery">
            </p>
      </section>`;
  };

  return {
    render,
    eventBinder,
  };

  
})();