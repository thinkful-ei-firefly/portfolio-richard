'use strict';
/*global $ store*/

//eslint-disable-next-line no-unused-vars
const portfolio = (function() {

  //render
  const render = function() {
    //render about me if projects is false
    let navHtml = '';
    let mainHtml = '';
    if (store.page === 'about') {
      navHtml = getNavHtmlAbout();
      mainHtml = getHtmlAboutMe();
    }
    else if (store.page === 'projects') {
      navHtml = getNavHtmlProjects();
      mainHtml = getHtmlProjects();
    }
    else {
      navHtml = getNavHtmlHome();
      mainHtml = getHtmlHome(); 
    }
    $('.navigation').html(navHtml);
    $('.center').html(mainHtml);
  };

  //eventBinder
  const eventBinder = function() {
    handleClickHome();
    handleClickProjects();
    handleClickAboutMe();
    handleClickHamburger();
  };

  //handle click home
  const handleClickHome = function() {
    $('header').on('click', '.js-home', e => {
      console.log(window.matchMedia('(max-width: 600px)'));
      // console.log($('#nav').attr());
      e.preventDefault();
      store.page='home';
      if (window.matchMedia('(max-width: 600px)').matches) {
        $('#nav').toggleClass('nav nav responsive');
      }
      render();
    });
  };

  //handle click projects
  const handleClickProjects = function() {
    $('header').on('click', '.js-projects', e => {
      e.preventDefault();
      store.page='projects';
      if (window.matchMedia('(max-width: 600px)').matches) {
        $('#nav').toggleClass('nav nav responsive');
      }
      render();
    });
  };

  //handle click about me
  const handleClickAboutMe = function() {
    $('header').on('click', '.js-about-me', e => {
      e.preventDefault();
      store.page='about';
      if (window.matchMedia('(max-width: 600px)').matches) {
        $('#nav').toggleClass('nav nav responsive');
      }
      render();
    });
  };

  //handle click on hamburger menu, opens up navigation
  const handleClickHamburger = function() {
    $('nav').on('click', '.icon', e => {
      e.preventDefault();
      $('#nav').toggleClass('nav nav responsive');
    });
  };

  //returns navigation html for home page
  const getNavHtmlHome = function() {
    return `
      <button type="submit" class="button, js-projects">projects</button>
      <button type="submit" class="button, js-about-me">about me</button>`;
  };

  //returns navigation html for home page
  const getNavHtmlProjects = function() {
    return `
      <button type="submit" class="button, js-home">home</button>
      <button type="submit" class="button, js-about-me">about me</button>`;
  };

  //returns navigation html for home page
  const getNavHtmlAbout = function() {
    return `
      <button type="submit" class="button, js-home">home</button>
      <button type="submit" class="button, js-projects">projects</button>
      `;
  };
  
  //returns home html
  const getHtmlHome = function() {
    return `
    <section class="about-me">
      <p>Welcome, I am a full-stack developer and Ph.D. Chemist.</p>
      <p>I believe I missed the mark on finding my calling in life by a small degree.</p>
      <p>See, I have always been an engineer!!!</p>
      <p>As a child, I loved science and mathematics. What I did not discover was how much of a hands-on learner I was. I suppose it should have occurred to me, I was always repairing video game remotes, by taking them apart and sodering the cables back on the breadboard. Or, as a college student getting my best grades as in my lab class. Organic Chemistry lab was the best, whereas, Organic Chemistry class was the worst. Please don't tell anyone I said that. (I am a Physical Chemist.)</p>
      <p>I discovered programming as a hobby when I took a class at Portland Community College. I thought it was going to be about sodering and electronic components, and the first day we did build a blinking LED toy. The magic happened the next time our class met when we learned how to program the circuit in that little toy using an Arduino. Soon after, I discovered and bought a Raspberry Pi. I heard people were programming python on them, and I had also learned years earlier that some scientists used python to analyze data and do computational chemistry. The software engineering bug had bitten and I was hooked on the idea of learning python.</p>
      <p>Years later, working as a Material Scientist for M-Disc, I had done work for them as a graduate student. Because the entire optical disc market was tanking (burning CDs or DVDs was so 1990's),  we were sending customers data burnt on our archival media. One of my many responsibilities was to take care of the robots burning our discs, and I had a theory. The disc printers needed less attention if they were used more regularly, and wrote a simple batch file that did just that. That batch file, turned into many batch files, then into a simple python GUI. I added the ability to send QA/QC burn and print jobs. It also had a function that would take an external hard drive, parse the data into 5, 25, 50 or 100 Gb increments and burn and print the data to disc.</p>
      <p>It was through these experiences, I discovered I not only had a love of learning but a love of applied learning. Building cool stuff, as a software engineer, fulfills my passion for both learning and application.</p>
      </section>`;
  };

  //return about me html
  const getHtmlAboutMe = function() {
    return `
      <section class="about-me">
      <p>Hi, I'm Richard a full-stack developer and an inventive problem solver.</p>
      <p>I am a web developer currently in the Engineering Immersion full-stack Bootcamp at Thinkful. 
      I find implementing new ideas and creating applications from scratch very fulfilling. I am a life-long learner and am excited to learn more...</p>
      <p>In my downtime, I like hanging out with family and close friends, fishing, and experiencing the great outdoors. Having a healthy work-life balance is important to me.</p>
      </section>`;
  };

  //return projects html
  const getHtmlProjects = function() {
    return `
      <section class="my-bookmarks">
        <h2 id="alignLeft">My Bookmarks</h2>
        <img src="${store.images.bookmark}" alt="My Bookmarks App">
        <p id="alignLeft">My Bookmarks was created for people who like collecting bookmarks of their favorite websites. Users can create, collect and delete their favorite bookmarks.</p>
        <p class="project-links">
            <a href="${store.links.bookmark.live}" target="_blank">Live</a>
            <a href="${store.links.bookmark.repo}" target="_blank">Repo</a>
        </p>
        <p class="technologies">
            <i class="fab fa-html5"></i>
            <i class="fab fa-css3"></i>
            <i class="fab fa-js"></i>
            <img id="jqueryImg" src="${store.images.jquery}">
        </p>
      </section>
      <section class="president's-quiz">
        <h2>Presidents Quiz</h2>
        <img id="presQuizPic" src="${store.images.quiz}" alt="Presidents Quiz">
        <p>Examine your familiarity with US presidents! The Presidents Quiz was created for those who would like to test their trivia knowledge of US Presidents. I built this app to help users learn more abstract knowledge of Presidents of the United States.</p>
        <p class="project-links">
            <a href="${store.links.quiz.live}" target="_blank">Live</a>
            <a href="${store.links.quiz.repo}" target="_blank">Repo</a>
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