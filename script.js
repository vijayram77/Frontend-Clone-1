gsap.to(".parent .container", {
    x: "-200%",
    scrollTrigger: {
        trigger: ".parent",
        start: "top top",
        end: "top -200%",
        scrub: 1,
        pin: true
    }
})
document.getElementById("product").onclick = () => {
    document.querySelector("body").style.backgroundColor = "#444"
    document.querySelectorAll(".home1").forEach((val) => {
        val.style.display = "none"
    })
    document.querySelector(".products").style.display = "flex"
}
document.getElementById("home").onclick = () => {
    document.querySelector("body").style.backgroundColor = "#fff"
    document.querySelectorAll(".home1").forEach((val) => {
        val.style.display = "block"
    })
    document.querySelector(".products").style.display = "none"
}
document.getElementById("product2").onclick = () => {
    document.querySelector("body").style.backgroundColor = "#444"
    document.querySelectorAll(".home1").forEach((val) => {
        val.style.display = "none"
    })
    document.querySelector(".products").style.display = "flex"
}
document.getElementById("home2").onclick = () => {
    document.querySelector("body").style.backgroundColor = "#fff"
    document.querySelectorAll(".home1").forEach((val) => {
        val.style.display = "block"
    })
    document.querySelector(".products").style.display = "none"
}


var cards = document.querySelectorAll(".cards");

cards.forEach(card => {
    var count = 0;
    card.onclick = () => {
        var bar = card.querySelector(".bar");
        if (count === 0) {
            bar.style.backgroundColor = "crimson";
            count++;
        } else {
            bar.style.backgroundColor = "grey";
            count--;
        }
    };
});
var count = 0
document.querySelector(".ri-menu-line").addEventListener("click", () => {
    if (count == 0) {
        gsap.to(".menuside", {
            display: "flex",
            right: "0%",
            ease: Power3,
            duration: 0.4
        })
        count++
        document.querySelector(".ri-menu-line").style.color = "#fff"
    } else {
        console.log("hey")
        gsap.to(".menuside", {
            right: "-100%",
            display: "none",
            ease: Power3,
            duration: 0.4
        })
        count--
        document.querySelector(".ri-menu-line").style.color = "#fff"

    }
})
var arr = document.querySelectorAll(".hhhh a")
var arr2 = document.querySelectorAll(".hhhh i")
var defval = document.querySelector(".matter").innerHTML
const qualityCommitment = "Quality Commitment";
const customerFocus = "Customer-Centric Focus";
const tailoredSolutions = "Tailored Solutions";
const afterSalesExcellence = "After-Sales Excellence";
console.log(defval)
console.log(arr)
function move(arrr) {
    arrr.forEach((val, i) => {
        val.addEventListener("click", (v) => {
            if (i == 1) {
                content = defval
            }
            if (i == 0) {
                content = `<h1>1. ${qualityCommitment}</h1><p>We prioritize delivering top-notch lighting solutions at competitive prices, ensuring your project receives the excellence it deserves.</p>`;
            } else if (i == 2) {
                content = `<h1>1. ${qualityCommitment}</h1> We ensure top-notch lighting solutions at competitive prices, guaranteeing excellence for your project.`;
            } else if (i == 3) {
                content = `<h1>1. ${qualityCommitment}</h1> We deliver high-quality lighting solutions at competitive prices, ensuring excellence for your project.`;
            }
            document.querySelector(".matter").innerHTML = content;
            document.querySelector(".crimson").style.left = `${i * 25}%`
            count++
        })
    })
}
move(arr)
move(arr2)

var move = 0
document.querySelector(".rightarr").addEventListener("click", () => {
    if (move > -1350) {
        move -= 450
    }
    console.log("clicked")
    gsap.to(".horizontalscroll", {
        transform: `translateX(${move}px)`,
        duration: 0.4
    })

    if (move <= -1350) {
        move = -1350

    }


})
document.querySelector(".leftarr").addEventListener("click", () => {
    if (move < 450) {
        move += 450
    }
    console.log("lclicked")
    gsap.to(".horizontalscroll", {
        transform: `translateX(${move}px)`,
        duration: 0.4
    })


})
gsap.from("#page1 h1", {
    y: 100,
    opacity: 0,
    duration: 0.7,
    delay: 0.1
})
gsap.from("#page2 h1", {
    scale: 0,
    opacity: 0,
    duration: 0.7,
    scrollTrigger: ".head"
})

