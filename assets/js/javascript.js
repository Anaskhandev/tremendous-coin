$(document).ready(function () {

    
//   particlesJS("particles-js", {
//     particles: {
//       number: { value: 50, density: { enable: true, value_area: 800 } },
//       color: { value: "#cba87f" },
//       shape: {
//         type: "circle",
//         stroke: { width: 0, color: "#000000" },
//         polygon: { nb_sides: 5 },
//         image: { src: "img/github.svg", width: 100, height: 100 }
//       },
//       opacity: {
//         value: 1,
//         random: true,
//         anim: { enable: true, speed: 1, opacity_min: 0, sync: false }
//       },
//       size: {
//         value: 3,
//         random: true,
//         anim: { enable: false, speed: 4, size_min: 0.3, sync: false }
//       },
//       line_linked: {
//         enable: false,
//         distance: 150,
//         color: "#ffffff",
//         opacity: 0.4,
//         width: 1
//       },
//       move: {
//         enable: true,
//         speed: 2,
//         direction: "top",
//         random: true,
//         straight: false,
//         out_mode: "out",
//         bounce: false,
//         attract: { enable: false, rotateX: 600, rotateY: 600 }
//       }
//     },
//     interactivity: {
//       detect_on: "canvas",
//       events: {
//         onhover: { enable: true, mode: "bubble" },
//         onclick: { enable: true, mode: "repulse" },
//         resize: true
//       },
//       modes: {
//         grab: { distance: 400, line_linked: { opacity: 1 } },
//         bubble: { distance: 250, size: 3, duration: 2, opacity: 0, speed: 3 },
//         repulse: { distance: 400, duration: 0.4 },
//         push: { particles_nb: 4 },
//         remove: { particles_nb: 2 }
//       }
//     },
//     retina_detect: true
//   });


  
    AOS.init();
    // Fixed Header
    var navbarCollapse = function () {
        if ($(window).scrollTop() > 400) {
            $('.main-header').addClass('is-scrolled');
        } else {
            $('.main-header').removeClass('is-scrolled');
        }
    };
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    $('.js-scroll-trigger').click(function (e) {
        e.preventDefault();
        var target = $($(this).attr('href'));
        if (target.length) {
            var scrollTo = target.offset().top;
            $('body, html').animate({ scrollTop: scrollTo + 'px' }, 800);
        }
    });

    var sections = $('section');
    var navigation = $('.navbar-nav');

    $(window).on('scroll', function () {

        var current = $(this).scrollTop() + 200;
        sections.each(function () {
            var top = $(this).offset().top,
                bottom = top + $(this).outerHeight();

            if (current >= top && current <= bottom) {
                if (current <= bottom) {
                    navigation.find('li').removeClass('active');
                }
                navigation.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
            }
            if (current < 300) {
                $(".navbar-nav:first li:first").addClass('active');
            }
        });
    });
    var owl = $('.screenshot_slider').owlCarousel({
        loop: true,
        responsiveClass: true,
        nav: true,
        margin: 10,
        dots:false,
        autoplayTimeout: 3000,
        autoplay:true,
        smartSpeed: 400,
        center: false,
        navText: ['&#8249;', '&#8250;'],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1
            },
            1200: {
                items: 2
            }
        }
    });

    var btn = $('#backToTop');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });

    var clipboard = new Clipboard(".cta-copy");
    clipboard.on("success", function(o) {
        $('.cta-copy').addClass('active');
        $('.cta-btn__txt').html('copied');
        setTimeout(function(){ $('.cta-copy').removeClass('active'); $('.cta-btn__txt').html('Copy to Clipboard');}, 6000);
      console.log(o), $(".result-div").click()
    }), clipboard.on("error", function(o) {
      console.log(o)
    });


    $(document).ready(function(){
        $('.image-popup-vertical-fit').magnificPopup({
            type: 'image',
          mainClass: 'mfp-with-zoom', 
          gallery:{
                    enabled:true
                },
        
          zoom: {
            enabled: true, 
        
            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function
        
            opener: function(openerElement) {
        
              return openerElement.is('img') ? openerElement : openerElement.find('img');
          }
        }
        
        });
        
        });

});


let prtcl=document.getElementById("particles-js")
function setParticles(num){
	for (let i=0; i<num*2; i++){
		let prt=document.createElement("div")
		prt.setAttribute("class","particles")
		prt.style.left=500*Math.random()+"%"
		prt.animate([{
			transform: "translate(-200px,0) scale("+Math.random()*15+")"
		},{
			transform: "translate("+Math.random()*500+"px,112vh) scale("+Math.random()*2+")",
			background: "#cfad85",
			boxShadow: "0 0 4px #cfad85,0 0 8px #cfad85",
			opacity: Math.random()*0.5
		}],{
			duration: Math.random()*400+15000,
			delay: -i++*40,
			iterations: Infinity
		})
		prtcl.appendChild(prt)
	}
}
setParticles(100)