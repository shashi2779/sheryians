// gsap.registerPlugin(scrollTrigger);
var tl = gsap.timeline();

tl.from('nav img',{
    y: -30,
    opacity: 0,
    ease: 'expo.easeInOut',
    delay: .3

})
.from('nav #links a',{
    stagger: .2,
    y: -40,
    opacity: 0,
    ease: 'expo.easeInOut',

})
.from('nav>a',{
    stagger: .2,
    y: -30,
    opacity: 0,
    ease: 'expo.easeInOut',

})
.from('#main .elm',{
    stagger: .2,
    y: 30,
    opacity: 0,
    ease: 'expo.easeInOut',

})
.from('#bigimg img',{
    stagger: 1.05,
    y: 30,
    opacity: 0,
    ease: 'expo.easeInOut',

})

gsap.from('#entrylevel .entrelem', {
    scrollTrigger:{
        trigger:'#entrylevel',
        toggleActions:"restart pause resume pause"
    },
    stagger: .4,
    y: 30,
    duration: .5,
    opacity: 0,
    ease:'expo.easeInOut'
})

gsap.from('#courcebanner .crselem', {
    scrollTrigger:{
        trigger:'#courcebanner',
        toggleActions:"restart pause resume pause"
    },
    stagger: .4,
    y: 50,
    duration: .7,
    opacity: 0,
    ease:'expo.easeInOut'
})

gsap.from('#brandswork .brelem', {
    scrollTrigger:{
        trigger:'#brandswork',
        toggleActions:"restart pause resume pause"
    },
    stagger: .2,
    y: 50,
    duration: .5,
    opacity: 0,
    ease:'expo.easeInOut'
})

gsap.from('#showcasegreen .shwelem', {
    scrollTrigger:{
        trigger:'#showcasegreen',
        toggleActions:"restart pause resume pause"
    },
    stagger: .4,
    x: -50,
    duration: .9,
    opacity: 0,
    ease:'expo.easeInOut'
})

var tl2 =gsap.timeline({
    scrollTrigger:{
        trigger:'#stats',
        toggleActions:"restart pause resume pause"
    }
    // scrollTrigger:{
    //     trigger:'footer',
    //     toggleActions:"restart pause resume pause"
    // }
});

tl2.from('#statstext .sttselem', {
 
    stagger: .4,
    y: 30,
    duration: .7,
    opacity: 0,
    ease:'expo.easeInOut'
})
.from('#cards .card', {
  
    stagger: .4,
    y: 30,
    duration: .7,
    opacity: 0,
    ease:'expo.easeInOut'
})
.from('#cards .card img', {
  
    stagger: .4,
    x: 100,
    delay:.5,
    duration: .7,
    opacity: 0,
    ease:'expo.easeInOut'
})
.from('#footer .ftrelem', {
  
    stagger: .4,
    x: 50,
    delay: -2,
    duration: .6,
    opacity: 0,
    ease:'expo.easeInOut'
})
// .from('body h5', {
  
//     y: 40,
//     duration: .5,
//     opacity: 0,
//     ease:'expo.easeInOut'
// })