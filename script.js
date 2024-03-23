const v1 = gsap.timeline()
v1.from("#nav h3",{
    y: -50,
    opacity:0,
    delay: 0.3,
    duration:0.6,
    stagger:0.5
})

v1.from("#main h1",{
    x:-1000,
    opacity: 0,
    delay:0.5,
    duration:1,
    stagger:0.5
})

v1.from("img",{
    duration: 0.5,
    x:-40,
    scale: 0.8, // Starting scale (smaller size)
    opacity: 0, // Starting opacity (invisible)
    ease: 'power3.out',
    duration:1,
    rotate:45,
    stagger:1,
})