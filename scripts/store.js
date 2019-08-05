'use strict';

//eslint-disable-next-line no-unused-vars
const store = (function() {
  const page='home';

  const images={
    bookmark: 'src="./images/bookmarks.png" alt="My Bookmarks App"',
    quiz: 'src="./images/presidentsQuiz.png" alt="Presidents Quiz"',
    jquery: 'id="jqueryImg" src="./images/jquery-1.svg" alt="jQuery',
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

  const textContent = {
    home: {
      p1: 'Welcome, I am a full-stack developer and Ph.D. Chemist.',
      p2: 'I believe I missed the mark on finding my calling in life by a small degree.',
      p3: 'See, I have always been an engineer!!!',
      p4: 'As a child, I loved science and mathematics. What I did not discover was how much of a hands-on learner I was. I suppose it should have occurred to me, I was always repairing video game remotes, by taking them apart and sodering the cables back on the breadboard. Or, as a college student getting my best grades as in my lab class. Organic Chemistry lab was the best, whereas, Organic Chemistry class was the worst. Please don\'t tell anyone I said that. (I am a Physical Chemist.)',
      p5: 'I discovered programming as a hobby when I took a class at Portland Community College. I thought it was going to be about sodering and electronic components, and the first day we did build a blinking LED toy. The magic happened the next time our class met when we learned how to program the circuit in that little toy using an Arduino. Soon after, I discovered and bought a Raspberry Pi. I heard people were programming python on them, and I had also learned years earlier that some scientists used python to analyze data and do computational chemistry. The software engineering bug had bitten and I was hooked on the idea of learning python.',
      p6: 'Years later, working as a Material Scientist for M-Disc, I had done work for them as a graduate student. Because the entire optical disc market was tanking (burning CDs or DVDs was so 1990\'s),  we were sending customers data burnt on our archival media. One of my many responsibilities was to take care of the robots burning our discs, and I had a theory. The disc printers needed less attention if they were used more regularly, and wrote a simple batch file that did just that. That batch file, turned into many batch files, then into a simple python GUI. I added the ability to send QA/QC burn and print jobs. It also had a function that would take an external hard drive, parse the data into 5, 25, 50 or 100 Gb increments and burn and print the data to disc.',
      p7: 'It was through these experiences, I discovered I not only had a love of learning but a love of applied learning. Building cool stuff, as a software engineer, fulfills my passion for both learning and application.',
    },
    projects: {
      presidentsQuiz: {
        title: 'Presidents Quiz',
        desc: 'Examine your familiarity with US presidents! The Presidents Quiz was created for those who would like to test their trivia knowledge of US Presidents. I built this app to help users learn more abstract knowledge of Presidents of the United States.'
      },
      myBookmarks: {
        title: 'My Bookmarks',
        desc: 'My Bookmarks was created for people who like collecting bookmarks of their favorite websites. Users can create, collect and delete their favorite bookmarks.'
      }
    },
    aboutMe: {
      p1: 'Hi, I\'m Richard a full-stack developer and an inventive problem solver.',
      p2: 'I am a web developer currently in the Engineering Immersion full-stack Bootcamp at Thinkful. I find implementing new ideas and creating applications from scratch very fulfilling. I am a life-long learner and am excited to learn more...',
      p3: 'In my downtime, I like hanging out with family and close friends, fishing, and experiencing the great outdoors. Having a healthy work-life balance is important to me.',
    },
  };

  return {
    page,
    images,
    links,
    textContent
  };
})();