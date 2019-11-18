console.log('JS linked.');

const burger  = document.querySelector('.burger'),
      bLine1  = document.querySelector('.line2'),
      bLine2  = document.querySelector('.line3'),
      nav     = document.querySelector('.headNav'),
      header  = document.querySelector('.mainHeader'),
      body    = document.querySelector('body');

      function openNav(){
        console.log('Nav toggled.');

        bLine1.classList.toggle('open');
        bLine2.classList.toggle('open2');
        nav.classList.toggle('open');
        body.classList.toggle('color');
    }

burger.addEventListener('click', openNav);