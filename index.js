//Change banner image
let bannerPic = 0;
let currentBanner = 0;
function slideShowBanner() {
    if (bannerPic === 5) {
        bannerPic = 1;
    } else {
        bannerPic +=1;
    }
    setTimeout(slideShowBanner, 5000);
}
slideShowBanner();

//Hide-show navbar
document.body.addEventListener('wheel', checkScrollDirection);
function checkScrollDirection(event) {
  if (checkScrollDirectionIsUp(event)) {
    document.querySelector("nav").style.transform = 'translateY(0)';
  } else {
    document.querySelector("nav").style.transform = 'translateY(-100px)';
  }
}
function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}

//COLLAPSE SUBMENU ON CHOOSE
document.querySelector("#navRight1").addEventListener("click", function(event) {
  document.querySelector("nav").style.transform = 'translateY(-100px)';
});
document.querySelector("#navRight2").addEventListener("click", function(event) {
  document.querySelector("nav").style.transform = 'translateY(-100px)';
});
document.querySelector("#navRight3").addEventListener("click", function(event) {
  document.querySelector("nav").style.transform = 'translateY(-100px)';
});

//Animation
const animate = () => {
    if (currentBanner !== bannerPic) {
        document.querySelectorAll(".bannerImg")[bannerPic-1].style.opacity = "1";
        document.querySelectorAll(".bannerTitle")[bannerPic-1].style.opacity = "1";
        if (bannerPic === 1) {
            document.querySelectorAll(".bannerImg")[4].style.opacity = "0";
            document.querySelectorAll(".bannerTitle")[4].style.opacity = "0";
        } else {
            document.querySelectorAll(".bannerImg")[bannerPic-2].style.opacity = "0";
            document.querySelectorAll(".bannerTitle")[bannerPic-2].style.opacity = "0";
        }
        currentBanner = bannerPic;
    }
    requestAnimationFrame(animate);
};
animate();