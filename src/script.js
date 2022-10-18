// Timeline for Landing page elements (Logo, nav, headling, and info icon)
const tl = gsap.timeline({defaults: {duration: 1}})

tl.fromTo('#logo', {y: '-20px', opacity: 0}, {y: '0',opacity: 1}, .5 )
.fromTo('#nav', {y: '-20px', opacity: 0}, {y: '0',opacity: 1}, .5)
.fromTo('#headline', { x: '-20px', opacity: 0}, { x: '0', opacity: 1}, .5)
.fromTo('.info-icon', { y: '20px', opacity: 0}, { y: '0', opacity: 1}, .5);

// Scroll Trigger animations for Hero Bg image and 3 data sections
gsap.registerPlugin(ScrollTrigger);

gsap.to('.hero', {
    scrollTrigger: {
        trigger: '.hero',
        scrub: true,
    },
    scale: 1.9
});

gsap.from('.lorem-right-1, .lorem-left-1', {
    scrollTrigger: {
        trigger: '.lorem-right-1',
        toggleActions: "restart reverse restart none",
        end: 'bottom 200rem',
    },
    x: '-3vw',
    opacity: 0,
    duration: .7
});

gsap.from('.lorem-right-2, .lorem-left-2', {
    scrollTrigger: {
        trigger: '.lorem-right-2',
        toggleActions: "restart reverse restart none",
        end: 'bottom 200rem',
    },
    x: '3vw',
    opacity: 0,
    duration: .7
});

gsap.from('.lorem-right-3, .lorem-left-3', {
    scrollTrigger: {
        trigger: '.lorem-right-3',
        toggleActions: "restart reverse restart none",
        end: 'bottom 200rem',
    },
    x: '-3vw',
    opacity: 0,
    duration: .7
});

// Scroll Trigger Animation that change the color of info icon, logo and nav items
gsap.to('.info-title', {
    scrollTrigger: {
        trigger:'.info-title',
        start: '50px 94%',
        toggleActions: 'restart none none reverse',
    },
    color: 'black',
    duration: .3
});
gsap.to('.nav ul li', {
    scrollTrigger: {
        trigger:'#hero',
        start: 'bottom 40rem',
        toggleActions: 'restart none none reverse',
    },
    color: 'black',
    duration: .3
});

gsap.to('#logo', {
    scrollTrigger: {
        trigger:'#hero',
        start: 'bottom 40rem',
        toggleActions: 'restart none none reverse',
    },
    attr: { src: './src/assets/Traventure-dark.svg' },
    duration: .3
});

// Information Popup2

const btn = document.querySelector('.info-title');
const close = document.querySelector('.close')

btn.addEventListener('click', ()=>{
    gsap.to('#popup', {opacity:1 , zIndex:99 , duration:1, ease: Expo.easeOut})
})
close.addEventListener('click', ()=> {
    gsap.to('#popup', {opacity:0 , zIndex:-1, duration:1, ease: Expo.easeOut})
})
