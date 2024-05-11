const animItems = document.querySelectorAll('.anim-items');

const initAnimationPage = () => {
  if (animItems.length > 0) {

    const animOnScroll = () => {
      for (let i = 0; i < animItems.length; i++) {
        const animItem = animItems[i];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
          animItem.classList.add('anim-active');
        } else {
          if (!animItem.classList.contains('anim-no-hide')) {
            animItem.classList.remove('anim-active');
          }
        }
      }

      function offset(el) {
        const rect = el.getBoundingClientRect();
        const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
      }
    };
    window.addEventListener('scroll', animOnScroll);
    setTimeout(() => {
      animOnScroll();
    }, 300);

  }
};

export {initAnimationPage};
