//const listWrapperEl = document.querySelector('.side-scroll-list-wrapper');
//const listEl = document.querySelector('.side-scroll-list');
//
//gsap.to(listEl, {
//  x: () => -(listEl.clientWidth - listWrapperEl.clientWidth),
//  ease: 'none',
//  scrollTrigger: {
//    trigger: '.side-scroll',
//    start: 'top top', // 要素の上端（top）が、ビューポートの上端（top）にきた時
//    end: () => `+=${listEl.clientWidth - listWrapperEl.clientWidth}`,
//    scrub: true,
//    pin: true,
//    anticipatePin: 1,
//    invalidateOnRefresh: true,
//  },
//});



const itemWrapper = document.querySelector('.side-scroll__itemOuter');
const itemInner = document.querySelector('.side-scroll__itemInner');

gsap.to(itemInner, {
  x: () => -(itemInner.clientWidth - itemWrapper.clientWidth),
  ease: 'none',
  scrollTrigger: {
    trigger: '.side-scroll__section', 
    start: 'top top',
    end: () => `+=${itemInner.clientWidth - itemWrapper.clientWidth}`,
   // markers: true,
    scrub: true, 
    pin: true,  
    invalidateOnRefresh: true, 
    anticipatePin: 1, 
  },
});