var flag = 0;

$(".navbar-toggler").on("click", function(){
  flag = flag + 1;
  if(flag % 2 != 0){
    // $(".navbar-collapse").css("text-align", "center"); //ugly
    $(".navbar-collapse").css("margin", "5% 0%");
    $(".navbar-collapse").css("transition", "0.5s ease");
    $(".generic-div").addClass("hamburger");
    $(".hero").addClass("hamburger");
    // $(".hero").css("opacity", "0");
  }
  else{
    $(".generic-div").removeClass("hamburger");
    $(".hero").removeClass("hamburger");

    $(".navbar-collapse").css("margin", "0% 0%");
  }
});



  // background: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.60) 30%, rgba(24, 26, 27, 0.40) 50%);
//
// $(window).on("scroll", function(event){
//   var val = (window).scrollY * 0.8 + "px";
//   var negVal = -1 * (window).scrollY * 0.8 + "px";
//   // $(".sec-head h1").append('<style>background: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.60) 30%, rgba(24, 26, 27, 0.40) 50%)');
// });




var scroll1 = new TimelineMax();
scroll1
.set(".profile", {y: "-90%", opacity: 1, transformOrigin: "center center"})
.to(".profile", 0.8, {y: "0%", opacity: 0.6, transformOrigin: "center center"})

.set(".about", {y: "0%", transformOrigin: "center bottom"})
.to(".about", 0.8, {y: "5%", transformOrigin: "center bottom"})




// .set(".wk-btn", {paddingLeft: "1%", paddingRight: "1%", transformOrigin: "center center"})
// .to(".wk-btn", 0.3, {paddingLeft: "1%", paddingRight: "1%", transformOrigin: "center center"})


var controller1 = new ScrollMagic.Controller();
var scene1 = new ScrollMagic.Scene({
  triggerElement: ".profile",
  duration: "100%"
})
.setTween(scroll1)
// .addIndicators()
.addTo(controller1)



var scroll2 = new TimelineMax();
scroll2


.set(".social-tp", {x: "-220%", opacity: 1, transformOrigin: "center right"})
.to(".social-tp", 0.8, {x: "0%", opacity: 0.6, transformOrigin: "center right"})

// .fromTo(".skl", {scale: 0.9, autoAlpha: 0.5}, {scale: 1, autoAlpha: 1, ease: Power4.easeOut})
// .fromTo(".skl", 0.9, {scale: 0.9, autoAlpha: 0.5}, {scale: 1, autoAlpha: 1, ease: Power4.easeOut}, "-=0.1")

// .set(".emo", {rotate: 0})
// .to(".emo", 0.8, {rotate: 90})

var controller2 = new ScrollMagic.Controller();

var scene2 = new ScrollMagic.Scene({
  triggerElement: ".social-tp",
  duration: "100%"
})
.setTween(scroll2)
// .addIndicators()
.addTo(controller2)


var scroll3 = new TimelineMax();
scroll3

.set(".emo", {rotate: 50, transformOrigin: "center center"})
.to(".emo", 0.1, {rotate: -10, transformOrigin: "center center"})

// .set(".emo", {rotate: 0})
// .to(".emo", 0.8, {rotate: 90})

var controller3 = new ScrollMagic.Controller();

var scene3 = new ScrollMagic.Scene({
  triggerElement: ".social-tp",
  duration: "100%"
})
.setTween(scroll3)
// .addIndicators()
.addTo(controller3)



// var scroll4 = new TimelineMax();
// scroll4

let val;
let negVal;
let degr;

// $(window).on("scroll", function(event){
//   val = (window).scrollY % 30;
//   negVal = 60 - val;
//   degr = ((window).scrollY % 10);
//
//   let gradient = {value: "linear-gradient: 45deg, rgba(255, 255, 255, 0.60) 30%, rgba(24, 26, 27, 0.40) 50%)"},
//   	target = $(".grad")[0];
//     gsap.to(gradient, {
//   	value: "linear-gradient: 45deg, rgba(255, 255, 255, 0.60) 30%, rgba(24, 26, 27, 0.40) 50%)",
//   	duration: 1,
//   	repeat: 3,
//   	yoyo: true,
//   	onUpdate: () => $(".grad").css("background-image", "linear-gradient(180deg, rgba(255, 255, 255, 0.4) " + val + "%, rgba(24, 26, 27, 0.2)" + negVal + "%)")
//   });
//
//   // $(".sec-head h1").append('<style>background: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.60) 30%, rgba(24, 26, 27, 0.40) 50%)');
// });






// .set(".emo", {rotate: 0})
// .to(".emo", 0.8, {rotate: 90})

// var controller4 = new ScrollMagic.Controller();
//
// var scene4 = new ScrollMagic.Scene({
//   triggerElement: ".social-tp",
//   duration: "100%"
// })
// .setTween(scroll4)
// // .addIndicators()
// .addTo(controller4)



// .to(".sec-head h1", 0.8, {linearGradient: "45deg, rgba(255, 255, 255, 0.60) 30%, rgba(24, 26, 27, 0.40) 50%)"})


$(".work-div").each(function(){
  var rightDiv = $(this).find(".right-an");
  var hd = $(this).find(".left-an h1");
  var bt = $(this).find(".left-an .wk-btn");

  var animateIn = new TimelineMax();
  animateIn
  // .fromTo(".dev-sk", 0.6, {scale: 0.5, autoAlpha: 0, transformOrigin: "center center"}, {scale: 1, autoAlpha: 1, transformOrigin: "center center", ease: Power1.easeOut})
  // .fromTo(".oth-sk", 0.4, {scale: 0.5, autoAlpha: 0, transformOrigin: "center center"}, {scale: 1, autoAlpha: 1, transformOrigin: "center center", ease: Power1.easeOut})
  // .from(".proj-pic", 0.4, {autoAlpha: 0, y: "-30", ease: Power4.easeOut})
  .from(rightDiv, 0.9, {scale: 0.5, autoAlpha: 0}, {scale: 1, autoAlpha: 1, ease: Power4.easeOut}, "-=0.1")
  // .from(list, 1, {scale: 0.8, autoAlpha: 0}, {scale: 1.3, autoAlpha: 1, ease: Power4.easeOut}, "-=0.1")

  .from(hd, 0.2, {y: "-10", autoAlpha: 0, transformOrigin: "center top", ease: Power4.easeOut}, "-=1")
  .fromTo(bt, 0.9, {y: "10", autoAlpha: 0, transformOrigin: "center bottom"}, {y: "0", autoAlpha: 1, transformOrigin: "center bottom", ease: Power3.easeOut} , "-=0.7")
  .fromTo(bt, 0.9, {y: "10", autoAlpha: 0, transformOrigin: "center bottom"}, {y: "0", autoAlpha: 1, transformOrigin: "center bottom", ease: Power3.easeOut} , "-=0.7")


  // .fromTo(hd, 0.2, {x: "0", autoAlpha: 1, transformOrigin: "center top"}, {x: "20", autoAlpha: 1, transformOrigin: "center top"})

  // var controller = new ScrollMagic.Controller();
  var controller3 = new ScrollMagic.Controller();
  var scene3 = new ScrollMagic.Scene({
    triggerElement: this,
    duration: "100%"
  })
  .setTween(animateIn)
  // .addIndicators()
  .addTo(controller3)

})
