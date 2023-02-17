//Mouse
let cursor = document.querySelector(".cursor");
document.querySelector("body").addEventListener("mousemove", function(event) {
  cursor.style.left = event.clientX + "px"; 
  cursor.style.top = event.clientY + "px";
});
//Mouse change color - sections
document.querySelector("#section1").addEventListener("mouseover", function(event) {
  cursor.classList.add("cursor1");
  cursor.classList.remove("cursor2");
  cursor.classList.remove("cursor3");
  cursor.classList.remove("cursor4");
  document.querySelector("#navRight1").style.fontStyle = "normal";
  document.querySelector("#navRight2").style.fontStyle = "normal";
  document.querySelector("#navRight3").style.fontStyle = "normal";
});
document.querySelector("#section2").addEventListener("mouseover", function(event) {
  cursor.classList.add("cursor2");
  cursor.classList.remove("cursor1");
  cursor.classList.remove("cursor3");
  cursor.classList.remove("cursor4");
  document.querySelector("#navRight1").style.fontStyle = "italic";
  document.querySelector("#navRight2").style.fontStyle = "normal";
  document.querySelector("#navRight3").style.fontStyle = "normal";
});
document.querySelector("#section3").addEventListener("mouseover", function(event) {
  cursor.classList.add("cursor3");
  cursor.classList.remove("cursor1");
  cursor.classList.remove("cursor2");
  cursor.classList.remove("cursor4");
  document.querySelector("#navRight1").style.fontStyle = "normal";
  document.querySelector("#navRight2").style.fontStyle = "italic";
  document.querySelector("#navRight3").style.fontStyle = "normal";
});
document.querySelector("#section4").addEventListener("mouseover", function(event) {
  cursor.classList.add("cursor4");
  cursor.classList.remove("cursor1");
  cursor.classList.remove("cursor2");
  cursor.classList.remove("cursor3");
  document.querySelector("#navRight1").style.fontStyle = "normal";
  document.querySelector("#navRight2").style.fontStyle = "normal";
  document.querySelector("#navRight3").style.fontStyle = "italic";
});
//Mouse change - navbar
document.querySelectorAll("a").forEach((each) => {
  each.addEventListener("mouseover", function(event) {
    cursor.classList.add("cursorHover");
  });
  each.addEventListener("mouseout", function(event) {
    cursor.classList.remove("cursorHover");
  });
});

//Change banner image
let bannerPic = 0;
let currentBanner = 0;
function slideShowBanner() {
    if (bannerPic === 5) {
        bannerPic = 1;
    } else {
        bannerPic +=1;
    }
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