if (!window.screenTop && !window.screenY) {
    alert("Please set your browser To FULL SCREEN !!\n(For Best Experience)\n(Press F11)")
}
var tl = gsap.timeline();


tl
.from("#loader",{
    y: "-100%",
    duration: 1.5,
    ease: Expo.easeInOut
})

.from("#lineOne",{
    top: "-10%",
    left: "-15%",
    duration: .5,
    opacity: "0",
    ease: "Back.easeInOut.config(1.7)"
})

.from("#lineThree",{
    bottom: "-16%",
    left: "23%",
    duration: .5,
    opacity: "0",
    ease: "Back.easeInOut.config(1.7)"
},"-=.5")

.from("#lineTwo",{
    top: "36%",
    right: "-17%",
    duration: .5,
    opacity: "0",
    ease: "Back.easeInOut.config(1.7)"
},"-=.5")

.from("#lineFour",{
    top: "-11%",
    left: "65%",
    duration: .5,
    opacity: "0",
    ease: "Back.easeInOut.config(1.7)"
},"-=.5")

.from(".texti",{
    y: 10,
    opacity: 0,
    duration: .5,
    // stagger: .5,
    ease: "Power2.easeInOut",
    onStart: function(){
        $('.texti').textillate({ in: { effect: 'fadeInDown' } });
    }
})

.from("#strtbut",{
    y: 10,
    opacity: 0,
    duration: .5,
    ease: "Power2.easeInOut"
})
// -----------for lamp gsap-----------------
var lampG = gsap.from("#lamp",{
    y: -185,
    opacity: 0,
    duration: 4,
    ease:"elastic.out(1, 0.3)",
    paused: true,
    onComplete: function(){
        indicator.style.opacity = "1";
    }
})
var lampt = gsap.from("#CloseOpenBtn",{
    y: -185,
    opacity: 0,
    duration: 4,
    ease:"elastic.out(1, 0.3)",
    paused: true
})
// -----------for lamp gsap-----------------

var strtbtn = document.querySelector("#strtbut");
var main = document.querySelector("#main");
var blklyr = document.querySelector("#blackLayer");
strtbtn.addEventListener("click",function(){
    tl.reverse();
    setTimeout(function(){
        // main.style.visibility = "visible";
        blklyr.style.display = "none";
        lampG.play();
        lampt.play();
    },3000)
})
// -----------------------

var h6 = document.querySelector("#likediv h6");
var likediv = document.querySelector("#likediv");
var likeicon = document.querySelector("#like");

var prt = document.querySelector("#parentdiv");

var arr = [
    {heading: "Deep Fried",description: "Idli", tagline: "#1 Most Loved Dish", img: "./media/idli2.png", idforback: "backOne", detailHead: "Chef Viman", detailTag: "Intersting Idli", detailPara: "A type of savoury rice cake, origination from the Indian Subcontinent.", rating: "4.5", likes: "69 likes", ratecolor: "rgb(145,220,212)"},
    {heading: "Sizzly",description: "Khaman", tagline: "#2 Most Loved Dish", img: "./media/khaman.png", idforback: "backTwo", detailHead: "Chef Kamlesh", detailTag: "Cumen Khaman ", detailPara: "Khaman occupies pride of place in its state of origin - Gujarat.", rating: "4.7", likes: "74 likes", ratecolor: "pink"},
    {heading: "Crispy",description: "Appe", tagline: "#3 Most Loved Dish", img: "./media/appe.png", idforback: "backThree", detailHead: "Chef Prakash", detailTag: "Antique Appe", detailPara: "Instant Rava Appe, also known as Poddu and Paniyaram.", rating: "4.3", likes: "58 likes", ratecolor: "rgb(145,220,212)"},
    {heading: "2-min",description: "Maggi", tagline: "#4 Most Loved Dish", img: "./media/maggi.png", idforback: "backFour", detailHead: "Chef Raman", detailTag: "Delicious Maggi", detailPara: "Just boil the water, add the tastemaker & noodles, and your maggi is ready.", rating: "4.9", likes: "79 likes", ratecolor: "rgb(212,188,229)"}
]

var clutter = '';

arr.forEach(function(elem){
    clutter += `<div class="dishback" id="${elem.idforback}">
    <img id="${elem.description}" src="${elem.img}" alt="">
    <h4>${elem.heading}</h4>
    <h4>${elem.description}</h4>
    </div>`
})

prt.innerHTML = clutter;


var ringcontainer = document.querySelector("#ringcontainer");
var dishItemBack = document.querySelector("#dishItemBack");

var headHfive = document.querySelector("#headline h5");
var headHone = document.querySelector("#hone");
var headHtwo = document.querySelector("#htwo");
var ring = document.querySelector("ring");
var textHone = document.querySelector("#text h1");
var textPara = document.querySelector("#text p");
var textHfour = document.querySelector("#text h4");
var rating = document.querySelector("#ratesec h1");
var ratecolor = document.querySelector("#ratesec");
var detailsTextDiv = document.querySelector("#text");

// variables declared for allTaskPerformer function
var angle = 0;
var state = 0;
var move = 0;
// variables declared for allTaskPerformer function

var menu = document.querySelector("#menu");
var mic = document.querySelector("#mic");
var details = document.querySelector("#details");
var dishmenu = document.querySelector("#dishmenu");
var dishbackOne = document.querySelector("#backOne");

var headline = document.querySelector("#headline");
var btndiv = document.querySelector("#button");

var CloseOpenBtn = document.querySelector("#CloseOpenBtn");
var CloseOpenImg = document.querySelector("#CloseOpenBtn img");
var indicator = document.querySelector("#indicator");
var indicator2 = document.querySelector("#indicator2");
var s;
var flag = 0;
var clicked = false;
var clicked2 = false;
CloseOpenBtn.addEventListener("click",function(){
    if(flag === 0)
    {   
        clicked = true; 
        indicator.style.opacity = "0"
        s = setInterval(allTaskPerformer,5000)
        CloseOpenBtn.style.opacity = "0";
        setTimeout(function(){
            menu.style.transform = "translateY(0)";
            menu.style.opacity = "1";
            mic.style.transform = "translateX(0)";
            mic.style.opacity = "1";
            details.style.transform = "translateY(0)";
            details.style.opacity = "1";
            dishmenu.style.transform = "translateX(0)";
            dishmenu.style.opacity = "1";
            headline.style.transform = "translateY(0)";
            headline.style.opacity = "1";
            ringcontainer.style.transform = "translate(0)";
            ringcontainer.style.opacity = "1";
            setTimeout(function(){
                btndiv.style.transform = "translateX(0)";
                btndiv.style.opacity = "1";
            },350)
        },1000)
        setTimeout(function(){
            CloseOpenBtn.style.opacity = "1";
            CloseOpenImg.setAttribute("src",`./media/3dTextclose.png`)
        },350)
        setTimeout(function(){
            dishItemBack.style.opacity = '1';
            dishbackOne.style.backgroundColor = "transparent";
        },3000)
        setTimeout(function(){
            indicator2.style.visibility = "visible";
            indicator2.style.animationPlayState = 'running';
        },12000)
        flag = 1;
    }
    else{
        CloseOpenBtn.style.opacity = "0";
        indicator2.style.visibility = "hidden";
        clearInterval(s);
        menu.style.transform = "translateY(45px)";
        menu.style.opacity = "0";
        mic.style.transform = "translateX(75.2)";
        mic.style.opacity = "0";
        details.style.transform = "translateY(65.3px)";
        details.style.opacity = "0";
        dishmenu.style.transform = "translateX(51.4px)";
        dishmenu.style.opacity = "0";
        headline.style.transform = "translateY(-220px)";
        headline.style.opacity = "0";
        ringcontainer.style.transform = "translate(-250px, -250px)";
        ringcontainer.style.opacity = "0";
        dishItemBack.style.opacity = '0';
        dishbackOne.style.backgroundColor = "transparent";
        btndiv.style.transform = "translateX(50px)";
        btndiv.style.opacity = "0";
        CloseOpenBtn.style.opacity = "0";
        setTimeout(function(){
            CloseOpenBtn.style.opacity = "1";
            CloseOpenImg.setAttribute("src",`./media/3dTextOpen.png`)
        },350)
        flag = 0;
    }
})

//Function to perform all js related task continuosly/persistantly/meliculously/consistently

function allTaskPerformer(){
    angle += 90;
    move += 127;
    ringcontainer.style.transform = `rotate(${angle}deg)`;
    
    if(state === 3)
    {
        dishItemBack.style.transform = "translateX(0)"
        headHone.textContent = arr[state-3].heading;
        headHtwo.textContent = arr[state-3].description;
        headHfive.textContent = arr[state-3].tagline;
        textHone.textContent = arr[state-3].detailHead;
        textPara.textContent = arr[state-3].detailTag;
        textHfour.textContent = arr[state-3].detailPara;
        rating.textContent = arr[state-3].rating
        ratecolor.style.backgroundColor = `${arr[state-3].ratecolor}`;

        likeicon.setAttribute("class","ri-thumb-up-fill");
        likediv.style.width = "46%";
        likediv.style.justifyContent = "space-Between";
        likediv.style.borderRadius = "100px";
        likediv.style.padding = "4px 10px";

        h6.style.opacity = "1";
        h6.textContent = arr[state-3].likes;
        h6.style.transform = "translateX(0px)";

        // for moving text details div back-----------
        detailsTextDiv.style.transform = "translateX(-50px)";
        detailsTextDiv.style.opacity = "0";
        rating.style.transform = "translateY(-15px)";
        rating.style.opacity = "0";
        setTimeout(function(){
            detailsTextDiv.style.transform = "translateX(50px)";
            rating.style.transform = "translateY(20px)";
            setTimeout(function(){
            detailsTextDiv.style.transform = "translateX(0px)";
            detailsTextDiv.style.opacity = "1";
            rating.style.transform = "translateY(0px)";
            rating.style.opacity = "1";
            },300)
        },300)
        // for moving text details div back-----------

        setTimeout(function(){
            likeicon.setAttribute("class","ri-thumb-up-line");
            likediv.style.width = "17%";
            likediv.style.justifyContent = "center";
            likediv.style.borderRadius = "50%";
            likediv.style.padding = "4px";

            h6.style.opacity = "0";
            h6.textContent = "";
            h6.style.transform = "translateX(-60px)"
        },4000)

        move = 0;   
        state = 0;
    }
    else{
        dishItemBack.style.transform = `translateX(${move}px)`
        headHone.textContent = arr[state+1].heading;
        headHtwo.textContent = arr[state+1].description;
        headHfive.textContent = arr[state+1].tagline;
        textHone.textContent = arr[state+1].detailHead;
        textHfour.textContent = arr[state+1].detailPara;
        textPara.textContent = arr[state+1].detailTag;
        rating.textContent = arr[state+1].rating
        ratecolor.style.backgroundColor = `${arr[state+1].ratecolor}`;

        likeicon.setAttribute("class","ri-thumb-up-fill");
        likediv.style.width = "46%";
        likediv.style.justifyContent = "space-Between";
        likediv.style.borderRadius = "100px"
        likediv.style.padding = "4px 10px";


        h6.style.opacity = "1";
        h6.textContent = arr[state+1].likes
        h6.style.transform = "translateX(0px)"
        
        // for moving text details div back-----------
        detailsTextDiv.style.transform = "translateX(-50px)";
        detailsTextDiv.style.opacity = "0";
        rating.style.transform = "translateY(-15px)";
        rating.style.opacity = "0";
        setTimeout(function(){
            detailsTextDiv.style.transform = "translateX(50px)";
            rating.style.transform = "translateY(20px)";
            setTimeout(function(){
            detailsTextDiv.style.transform = "translateX(0px)";
            detailsTextDiv.style.opacity = "1";
            rating.style.transform = "translateY(0px)";
            rating.style.opacity = "1";
            },300)
        },300)
        // for moving text details div back-----------

        setTimeout(function(){
            likeicon.setAttribute("class","ri-thumb-up-line");
            likediv.style.width = "17%";
            likediv.style.justifyContent = "center";
            likediv.style.borderRadius = "50%";
            likediv.style.padding = "4px";

            h6.style.opacity = "0";
            h6.textContent = "";
            h6.style.transform = "translateX(-60px)"
        },4000)

        state += 1;

    }
}

// --------------------------------
var playbtn = document.querySelector("#butone");
var viddy = document.querySelector("#viddy")
var vidloader = gsap.to("#videoloader",{
    paused: true,
    ease: "Expo.easeInOut",
    top: "0",
    left: "0",
    duration: 1,
})

playbtn.addEventListener("click",function(){
    viddy.play();
    vidloader.play();
    indicator2.style.visibility = "hidden"
    setTimeout(function(){
        vidloader.reverse();
    },15000)
    clicked2 = true;
});
// ---------------------------- To continuosly Check If Open is Clicked -----------------------

setInterval(function(){
    if(clicked){
        indicator.style.opacity = "0";
    }
    if(clicked2){
        indicator2.style.visibility = "hidden"
    }
},0100)