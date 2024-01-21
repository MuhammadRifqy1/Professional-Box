document.addEventListener('DOMContentLoaded', function () {

  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var Header = document.getElementById('header');
  var WeDoImg = document.getElementById('WeDoImg');
  var AboutImg = document.getElementById('AboutImg');
  var BrownBox = document.getElementById('BrownBox');
  var Fragile = document.getElementById('Fragile');
  var Cargo = document.getElementById('Cargo');
  var WhiteBox = document.getElementById('WhiteBox');

  if (screenWidth >= 768) {
      Header.style.backgroundImage = 'url("./assets/box-header.webp")';
      WeDoImg.style.backgroundImage = 'url("./assets/bg-carstack.webp")';
      AboutImg.style.backgroundImage = 'url("./assets/box-storage.webp")';
      BrownBox.src ='./assets/brown-box-stack.webp';
      Fragile.src ='./assets/fragile.webp';
      Cargo.src ='./assets/cargo.webp';
      WhiteBox.src ='./assets/white-box.webp';
  }else if (screenWidth >=  567) {
      Header.style.backgroundImage = 'url("./assets/box-header-md.webp")';
      WeDoImg.style.backgroundImage = 'url("./assets/bg-carstack-md.webp")';
      AboutImg.style.backgroundImage = 'url("./assets/box-storage.webp")';
      BrownBox.src = './assets/brown-box-stack.webp';
      Fragile.src ='./assets/fragile.webp';
      Cargo.src ='./assets/cargo.webp';
      WhiteBox.src ='./assets/white-box.webp';
  }else{
      Header.style.backgroundImage = 'url("./assets/box-header-sm.webp")';
      WeDoImg.style.backgroundImage = 'url("./assets/bg-carstack-sm.webp")';
      AboutImg.style.backgroundImage = 'url("./assets/box-storage-sm.webp")';
      BrownBox.src = './assets/brown-box-stack-sm.webp';
      Fragile.src = './assets/fragile-sm.webp';
      Cargo.src = './assets/cargo-sm.webp';
      WhiteBox.src = './assets/white-box-sm.webp';
  }

  const observerLeft = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('fade-left-animation');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerCenterSlow = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('fade-center-animation-slow');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerCenter = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('fade-center-animation');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerCenterFast = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('fade-center-animation-fast');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerFadeUp = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('fade-up-animation');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerSlideUp = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('slide-up-animation');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerSlideDown = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('slide-down-animation');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerSlideLeft = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('slide-left-animation');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerSlideRight = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('slide-right-animation');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  observerCenterSlow.observe(document.querySelector('.sample-fade-3'));
  observerCenter.observe(document.querySelector('.header'));
  observerCenter.observe(document.querySelector('.sample-fade-2'));
  observerCenterFast.observe(document.querySelector('.sample-fade-1'));
  observerSlideLeft.observe(document.querySelector('.we-desc-container'));
  observerSlideUp.observe(document.querySelector('.ads-img-container'));
  observerSlideDown.observe(document.querySelector('.about'));
  observerSlideDown.observe(document.querySelector('.ads-text'));
})
