'use strict';

const scrollingDown = () => {
  const scrollLinks = document.querySelectorAll('a[href*="#"]');
  const menuButton = document.querySelector('.menu-button--light'),
        burgerMenu = document.querySelector('.burger-menu');
  // const hero = document.querySelector('.hero');
  scrollLinks.forEach((scrollLink) => {
    scrollLink.addEventListener('click', (elem) => {
        elem.preventDefault();
        const blockID = scrollLink.getAttribute('href').substr(1);
        if (document.getElementById(blockID) !== null) {
          document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          if (menuButton.classList.contains('menu-button-activ')) {
            menuButton.classList.toggle('menu-button-activ');
            burgerMenu.classList.toggle('burger-menu-none');
          }
        }
      });
  });

  // hero.addEventListener('wheel', (event) => {
  //   const blockID = scrollLinks[0].getAttribute('href').substr(1);
  //   if (event.deltaY > 0) {
  //     // event.preventDefault();
       
  //       if (document.getElementById(blockID) !== null) {
  //         let height = 0;
  //         const arr = event.composedPath();
  //         arr.forEach((elem) => {
  //           if (elem.nodeName === 'SECTION') {
  //             console.log('window.pageYOffset: ', window.pageYOffset);

  //             if (elem.classList.contains('works')) {
  //               const headerHeight = document.querySelector('.header').offsetHeight;
  //               height = elem.offsetHeight + headerHeight; 
  //             }
  //             else { height = elem.offsetHeight - window.pageYOffset; }
  //             console.log('height: ', height);

  //           }
  //         });
  //         window.scrollBy({ top: height, behavior: 'smooth'});
  //         // window.scrollBy(0, window.innerHeight);
  //       }
      
  //   }
  // });
};

  scrollingDown();

const sliderWorks = () => {
  const slider = document.querySelector('.slider'),
        slide = slider.querySelectorAll('.slide'),
        sliderDots = document.querySelector('.slider-dots');

    for (let i = 0; i < slide.length; i++) {
      const li = document.createElement('li');
      li.classList.add('dot');
      sliderDots.append(li);
    }

    const dot = document.querySelectorAll('.dot');
    dot[0].classList.add('dot-active');
  
  let currentSlide = 0,
    interval;

  const prevSlide = (elem, index, strClass) => { 
      elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass)  => { 
      elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
      prevSlide(slide, currentSlide, 'slide--active');
      prevSlide(dot, currentSlide, 'dot-active');
      currentSlide++;
      if (currentSlide>=slide.length) {
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide, 'slide--active');
      nextSlide(dot, currentSlide, 'dot-active');
    };

    const startSlide = (time = 3000) => {
      interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
      clearInterval(interval);
    };

    startSlide(4000);

    slider.addEventListener('click', (event) => {
      let target = event.target;
      if (!target.matches('.slide__image')) {
        event.preventDefault();
      }

      if (!target.matches('.slider-btn, .dot')) {
        return;
      }
      
      prevSlide(slide, currentSlide, 'slide--active');
      prevSlide(dot, currentSlide, 'dot-active');

      if (target.matches('.slider-btn--next')) {
        currentSlide++;
      }
      else if (target.matches('.slider-btn--prev')) {
        currentSlide--;
      }
      else if (target.matches('.dot')) {
        dot.forEach((elem, index) => {
          if (elem === target) {
            currentSlide = index;
          }
        });
       }

      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      if (currentSlide < 0) {
        currentSlide = slide.length - 1;
      }
      nextSlide(slide, currentSlide, 'slide--active');
      nextSlide(dot, currentSlide, 'dot-active');

    });

    slider.addEventListener('mouseover', (event) => {
      let target = event.target;

      if (target.matches('.slider-btn, .dot')) {
        stopSlide();
      }
    });

    slider.addEventListener('mouseout', (event) => {
      let target = event.target;

      if (target.matches('.slider-btn, .dot')) {
        startSlide(4000);
      }
    });
};

sliderWorks();

const wow = new WOW({ mobile: false });
wow.init();

// бургер-меню
  
const menuBurger = () => {
  const menuButtonmain = document.querySelector('.menu-button--light'),
      burgerMenu = document.querySelector('.burger-menu'),
      menuButtonActive = document.querySelector('.menu-button-activ');

  menuButtonmain.addEventListener('click', function() {
    menuButtonmain.classList.toggle('menu-button-activ');
    // menuButtonmain.css('display', 'block');
    burgerMenu.classList.toggle('burger-menu-none');
  });
};

menuBurger();

// ресайз окна

const resizeWindow = () => {
  const menuButton = document.querySelector('.menu-button--light'),
        burgerMenu = document.querySelector('.burger-menu');

  window.addEventListener('resize', event => {
    if (window.screen.width > 992) {
     if (menuButton.classList.contains('menu-button-activ')) {
        menuButton.classList.toggle('menu-button-activ');
        burgerMenu.classList.toggle('burger-menu-none');
      }
    }
  });
};

resizeWindow();