//text 
const spans = document.querySelectorAll('h1 span')
spans.forEach(span => span.addEventListener('mouseover', function(e) {
    span.classList.add('animated', 'rubberBand')
}))

spans.forEach(span => span.addEventListener('mouseout', function(e) {
    span.classList.remove('animated', 'rubberBand')
}))

//header fixed 

window.onscroll = function(){
    const docScrollTop = document.documentElement.scrollTop;

        if(window.innerWidth > 991){
            if (docScrollTop > 100) {
                document.querySelector("header").classList.add("fixed");
                element = document.getElementsByClassName("top_header");
                for(let i=0; i < element.length; i++)
                {
                    element[i].classList.add("fix");
                }
            }
            else {
                document.querySelector("header").classList.remove("fixed");
                element = document.getElementsByClassName("top_header");
                for(let i=0; i < element.length; i++)
                {
                    element[i].classList.remove("fix");
                }
            }
        }
    
}

/*navbar links

const navbar = document.querySelector(".navbar");
      a = navbar.querySelectorAll("a");

      a.forEach(function(element){
          element.addEventListener("click",function(){
            for(let i = 0; i < a.length; i++){
                a[i].classList.remove("active");
            }
            this.classList.add("active");
            document.querySelector(".navbar").classList.toggle("show");
          })
      })

//ham-burger

const hamBurger = document.querySelector(".ham-burger");

hamBurger.addEventListener("click",function(){
    document.querySelector(".navbar").classList.toggle("show");
})

*/

$(document).ready(function() {
	$("a").click(function() {
		$("a").removeClass('active');
		var index = $(this).index('nav a') + 1;
		$("nav a:nth-child(-n+"+index+")").addClass('active');
	});
	
});

$(window).load(function() {
  $(".containernav").addClass("load");
});