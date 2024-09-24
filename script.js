var tl = gsap.timeline({scrollTrigger:{
    trigger:".one",
    start:"100% 95%",
    end:"150% 50%",
    scrub:true,
   // markers:true,

}})

tl.to("#fanta",{  
    top:"100%",
    right:"35%"
},'a')

tl.to("#orangecut",{
    top:"160%",
    left:"0%"
},'a')

tl.to("#orange",{
    top:"160%",
    right:"10%"
},'a')

tl.to("#leaf1",{
    top:"140%",
    right:"10%"
},'a')

tl.to("#leaf",{
    rotate:"-90deg", 
    top:"110%",
    left:"80%"
},'a')




var tl2 = gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"100% 95%",
    end:"150% 65%",
    scrub:true,
    markers:true,

}})

tl2.to("#fanta",{  
    top:"190%",
    right:"-1%"
},'a')

tl2.from("#coca-cola",{ 
    rotate:"-90deg", 
    top:"100%",
    left:"-100%"
},'a')

tl2.from("#pepsi",{ 
    rotate:"-90deg", 
    top:"110%",
    right:"-100%"
},'a')


