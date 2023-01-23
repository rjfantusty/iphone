

gsap.to(".a",{
    opacity:0,
    ease:Power1.easeInOut,
    duration:2,
    stagger:2,
    scrollTrigger:{
        trigger:"#home",
        start:"top top",
        scrub:1,
        end:"bottom 25%"

    }

})
gsap.to("#second img",{
    width:"30%",
    ease:Power1.easeInOut,
    duration:2,
    stagger:2,
    scrollTrigger:{
        trigger:"#second",
        start:"top 40%",
        scrub:1,
        end:"center 40%" ,
        

    }

})