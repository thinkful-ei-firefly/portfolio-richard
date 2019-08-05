'use strict';
/*global $ store*/

//eslint-disable-next-line no-unused-vars
const portfolio = (function() {

  //render
  const render = function() {
    //render about me if store.page is equal to about
    if (store.page === 'about') {
      const mainHtml = getHtmlAboutMe();
      $('.content').html(mainHtml);
      $('.projects').html('');
    }
    //render projects if store.page is equal to projects
    else if (store.page === 'projects') {
      const mainHtml = getHtmlProjects();
      $('.content').html('');
      $('.projects').html(mainHtml);
    }
    //render home if store.page is equal to home
    else {
      const mainHtml = getHtmlHome();
      $('.content').html(mainHtml);
      $('.projects').html('');
    }
  };

  //eventBinder contains all handle click functions
  const eventBinder = function() {
    handleClickHome();
    handleClickProjects();
    handleClickAboutMe();
    handleClickHamburger();
  };

  /*when home is clicked: 
  -changes store.page to home 
  -if the page width is 680 px or less, it toggles nav class from 'nav responsive' to 'nav'
  doing so colapses the nav menu back to a hamburger
  */
  const handleClickHome = function() {
    $('header').on('click', '.js-home', e => {
      e.preventDefault();
      store.page='home';
      if (window.matchMedia('(max-width: 680px)').matches) {
        $('#nav').toggleClass('nav nav responsive');
      }
      render();
    });
  };

  /*when projects is clicked:
  -changes store.page to projects
  -if the page width is 680 px or less, it toggles nav class from 'nav responsive' to 'nav'
  doing so colapses the nav menu back to a hamburger
  */
  const handleClickProjects = function() {
    $('header').on('click', '.js-projects', e => {
      e.preventDefault();
      store.page='projects';
      if (window.matchMedia('(max-width: 680px)').matches) {
        $('#nav').toggleClass('nav nav responsive');
      }
      render();
    });
  };

  /*when about me is clicked:
  -changes store.page to about me
  -if the page width is 680 px or less, it toggles nav class from 'nav responsive' to 'nav'
  doing so colapses the nav menu back to a hamburger
  */
  const handleClickAboutMe = function() {
    $('header').on('click', '.js-about-me', e => {
      e.preventDefault();
      store.page='about';
      if (window.matchMedia('(max-width: 680px)').matches) {
        $('#nav').toggleClass('nav nav responsive');
      }
      render();
    });
  };

  /*When sreen width is small (<600px)
  clicking on hamburger menu will open up the navication
  this is handled by add the class = responsive to nav
  */
  const handleClickHamburger = function() {
    $('nav').on('click', '.icon', e => {
      e.preventDefault();
      $('#nav').toggleClass('nav nav responsive');
    });
  };
  
  //returns home html
  const getHtmlHome = function() {
    return `
    <section class="about-me">
      <p>${store.textContent.home.p1}</p>
      <p>${store.textContent.home.p2}</p>
      <p>${store.textContent.home.p3}</p>
      <p>${store.textContent.home.p4}</p>
      <p>${store.textContent.home.p5}</p>
      <p>${store.textContent.home.p6}</p>
      <p>${store.textContent.home.p7}</p>
      </section>`;
  };

  //return about me html
  const getHtmlAboutMe = function() {
    return `
      <section class="about-me">
      <p>${store.textContent.aboutMe.p1}</p>
      <p>${store.textContent.aboutMe.p2}</p>
      <p>${store.textContent.aboutMe.p3}</p>
      </section>`;
  };

  //return projects html
  const getHtmlProjects = function() {
    return `
      <section class="my-bookmarks">
        <h2 id="alignLeft">${store.textContent.projects.myBookmarks.title}</h2>
        <img ${store.images.bookmark} >
        <p id="alignLeft">${store.textContent.projects.myBookmarks.desc}</p>
        <p class="project-links">
            <a href="${store.links.bookmark.live}" target="_blank">Live</a>
            <a href="${store.links.bookmark.repo}" target="_blank">Repo</a>
        </p>
        <p class="technologies">
            <i class="fab fa-html5"></i>
            <i class="fab fa-css3"></i>
            <i class="fab fa-js"></i>
            <img ${store.images.jquery} >
        </p>
      </section>
      <section class="presidents-quiz">
        <h2>${store.textContent.projects.presidentsQuiz.title}</h2>
        <img ${store.images.quiz} >
        <p>${store.textContent.projects.presidentsQuiz.desc}</p>
        <p class="project-links">
            <a href="${store.links.quiz.live}" target="_blank">Live</a>
            <a href="${store.links.quiz.repo}" target="_blank">Repo</a>
        </p>
        <p class="technologies">
                <i class="fab fa-html5"></i>
                <i class="fab fa-css3"></i>
                <i class="fab fa-js"></i>
                <img ${store.images.jquery} >
            </p>
      </section>`;
  };

  return {
    render,
    eventBinder,
  };

  
})();