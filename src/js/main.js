'use strict';

const scrollingDown = () => {
  const scrollLink = document.querySelector('.scroll-link');
    scrollLink.addEventListener('click', (elem) => {
        elem.preventDefault();
        const blockID = scrollLink.getAttribute('href').substr(1);
        if (document.getElementById(blockID) !== null) {
          document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
  };

  scrollingDown();