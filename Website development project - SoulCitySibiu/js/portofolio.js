//gallery item filter
const filterButtons = document.querySelector("#filter-btns").children;
const items = document.querySelector(".portofolio-gallery").children;


for(let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click",function(){
        for(let j = 0; j < filterButtons.length; j++) {
            filterButtons[j].classList.remove("active")
        }
        this.classList.add("active"); 
        const target = this.getAttribute("data-target");
        for(let k = 0; k < items.length; k++) {
            items[k].style.display = "none";
            if(target == items[k].getAttribute("data-id")) 
            {
                items[k].style.display = "block";
            }
            if(target == "all") {
                items[k].style.display = "block";
            }
        }
    })
}

$(document).ready(function() {
	$(".filter-buttons a").click(function() {
		$(".filter-buttons a").removeClass('active');
		var index = $(this).index('.filter-buttons a') + 1;
        $(".filter-buttons a:nth-child(-n+"+index+")").addClass('active');
        local();
    });
});

$(document).on('keypress', function(e) {
    if(e.which == 13) {
        var x = document.getElementsByClassName("active");
        var index = x.length;
        $(".filter-buttons a:nth-child("+index+")").addClass('active');
        const target = x[index].getAttribute("data-target");
        const items = document.querySelector(".portofolio-gallery").children;
        for(let k = 0; k < items.length; k++) {
            items[k].style.display = "none";
            if(target == items[k].getAttribute("data-id")) 
            {
                items[k].style.display = "block";
            }
            if(target == "all") {
                items[k].style.display = "block";
            }
        }

    }

    if(e.keyCode>=97 && e.keyCode <= 102) {
        $(".filter-buttons a").removeClass('active');
        $(".filter-buttons a:nth-child("+1+")").addClass("active");
        const items = document.querySelector(".portofolio-gallery").children;
        for(let k = 0; k < items.length; k++) {
            items[k].style.display = "none";
            if("all" == items[k].getAttribute("data-id")) 
            {
                items[k].style.display = "block";
            }
            else {
                items[k].style.display = "none";
            }
        }

    }

    if(e.keyCode>=103 && e.keyCode<=108) {
        $(".filter-buttons a").removeClass('active');
        $(".filter-buttons a:nth-child("+2+")").addClass('active');
        const items = document.querySelector(".portofolio-gallery").children;
        for(let k = 0; k < items.length; k++) {
            items[k].style.display = "none";
            if("sibiu" == items[k].getAttribute("data-id")) 
            {
                items[k].style.display = "block";
            }
            else {
                items[k].style.display = "none";
            }
        }
    }

    if(e.keyCode>=109 && e.keyCode<=114) {
        $(".filter-buttons a").removeClass('active');
        $(".filter-buttons a:nth-child("+3+")").addClass('active');
        const items = document.querySelector(".portofolio-gallery").children;
        for(let k = 0; k < items.length; k++) {
            items[k].style.display = "none";
            if("sinaia" == items[k].getAttribute("data-id")) 
            {
                items[k].style.display = "block";
            }
            else {
                items[k].style.display = "none";
            }
        }
        
    }

    if(e.keyCode>=115 && e.keyCode<=122) {
        $(".filter-buttons a").removeClass('active');
        $(".filter-buttons a:nth-child("+4+")").addClass('active');
        const items = document.querySelector(".portofolio-gallery").children;
        for(let k = 0; k < items.length; k++) {
            items[k].style.display = "none";
            if("brasov" == items[k].getAttribute("data-id")) 
            {
                items[k].style.display = "block";
            }
            else {
                items[k].style.display = "none";
            }
        }
    }
    local();
})

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37: 
        {
            var x = document.getElementsByClassName("active");
            var y = document.querySelector("#filter-btns").children;               
            var index = x.length - 1;
            $(".filter-buttons a:nth-child("+index+")").removeClass('active');
            break;
        }
        case 39:
        {
            var x = document.getElementsByClassName("active");              
            var y = document.querySelector("#filter-btns").children;
            var index = x.length - 1;
            if(x.length < y.length) 
                y[x.length-1].classList.add("active");                
            break;
        }
    }
    local();
};



//lightbox
const closeLightbox = document.querySelector(".close-lightbox");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox.querySelector("img")

lightbox.addEventListener("click",function(){
    if(event.target!=lightboxImage) {
        lightbox.classList.remove("show");
        lightbox.classList.add("hide");
    }
})

closeLightbox.addEventListener("click",function(){
    lightbox.classList.remove("show");
    lightbox.classList.add("hide");
})

const gallery = document.querySelector(".portofolio-gallery");
const galleryItem = gallery.querySelectorAll(".item");

galleryItem.forEach(function(element){
    element.querySelector(".fa-search-plus").addEventListener("click",function(){
        lightbox.classList.remove("hide");
        lightbox.classList.add("show");
        lightboxImage.src = element.querySelector("img").getAttribute("src");
    })
})

if(localStorage.getItem('current')==null) {
    localStorage.setItem('current','0');
}   
else
{           
    console.log(parseInt(localStorage.getItem('current')));
    var index=parseInt(localStorage.getItem('current'));
    var x=document.querySelector("#filter-btns").children;
    for(let i=0;i<index;i++) {
        x[i].classList.add("active");
    }
    localStorage.setItem('current',index);

}


function local(){
    var x=document.getElementsByClassName("active");
    var l=x.length;
    localStorage.setItem('current',l - 1);
}
