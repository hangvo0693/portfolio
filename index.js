//MOUSE CURSOR
let cursor = document.querySelector(".cursor");
document.body.addEventListener("mousemove", function(event) {
  cursor.style.left = event.clientX + "px"; 
  cursor.style.top = event.clientY + "px";
});
document.querySelectorAll(".detail").forEach((each) => {
  each.addEventListener("mousemove", function(event) {
    cursor.style.left = event.clientX + "px"; 
    cursor.style.top = event.clientY + "px";
  });
});
//MOUSE CHANGE COLOR - SECTIONS
document.querySelector("#section1").addEventListener("mouseover", function(event) {
  cursor.classList.add("cursor1");
  cursor.classList.remove("cursor2");
  cursor.classList.remove("cursor3");
  cursor.classList.remove("cursor4");
  document.querySelector("#navRight1").style.fontStyle = "normal";
  document.querySelector("#navRight1").classList.remove("is-on");
  document.querySelector("#navRight2").style.fontStyle = "normal";
  document.querySelector("#navRight2").classList.remove("is-on");
  document.querySelector("#navRight3").style.fontStyle = "normal";
  document.querySelector("#navRight3").classList.remove("is-on");
});
document.querySelector("#section2").addEventListener("mouseover", function(event) {
  cursor.classList.add("cursor2");
  cursor.classList.remove("cursor1");
  cursor.classList.remove("cursor3");
  cursor.classList.remove("cursor4");
  document.querySelector("#navRight1").style.fontStyle = "italic";
  document.querySelector("#navRight1").classList.add("is-on");
  document.querySelector("#navRight2").style.fontStyle = "normal";
  document.querySelector("#navRight2").classList.remove("is-on");
  document.querySelector("#navRight3").style.fontStyle = "normal";
  document.querySelector("#navRight3").classList.remove("is-on");
});
document.querySelector("#section3").addEventListener("mouseover", function(event) {
  cursor.classList.add("cursor3");
  cursor.classList.remove("cursor1");
  cursor.classList.remove("cursor2");
  cursor.classList.remove("cursor4");
  document.querySelector("#navRight1").style.fontStyle = "normal";
  document.querySelector("#navRight1").classList.remove("is-on");
  document.querySelector("#navRight2").style.fontStyle = "italic";
  document.querySelector("#navRight2").classList.add("is-on");
  document.querySelector("#navRight3").style.fontStyle = "normal";
  document.querySelector("#navRight3").classList.remove("is-on");
});
document.querySelector("#section4").addEventListener("mouseover", function(event) {
  cursor.classList.add("cursor4");
  cursor.classList.remove("cursor1");
  cursor.classList.remove("cursor2");
  cursor.classList.remove("cursor3");
  document.querySelector("#navRight1").style.fontStyle = "normal";
  document.querySelector("#navRight1").classList.remove("is-on");
  document.querySelector("#navRight2").style.fontStyle = "normal";
  document.querySelector("#navRight2").classList.remove("is-on");
  document.querySelector("#navRight3").style.fontStyle = "italic";
  document.querySelector("#navRight3").classList.add("is-on");
});
//MOUSE CHANGE STYLE - LINKS
document.querySelectorAll("a").forEach((each) => {
  each.addEventListener("mouseover", function(event) {
    cursor.classList.add("cursorHover");
  });
  each.addEventListener("mouseout", function(event) {
    cursor.classList.remove("cursorHover");
  });
});
//MOUSE CHANGE STYLE - BUTTONS
document.querySelectorAll("button").forEach((each) => {
  each.addEventListener("mouseover", function(event) {
    cursor.classList.add("cursorHover");
  });
  each.addEventListener("mouseout", function(event) {
    cursor.classList.remove("cursorHover");
  });
});



//BANNER IMAGE SLIDE
const totalImage = 3
let bannerPic = 0;
let currentBanner = 0;
function slideShowBanner() {
    if (bannerPic === totalImage) {
        bannerPic = 1;
    } else {
        bannerPic +=1;
    }
    if (currentBanner !== bannerPic) {
      document.querySelectorAll(".bannerImg")[bannerPic-1].style.opacity = "1";
      document.querySelectorAll(".bannerTitle")[bannerPic-1].style.opacity = "1";
      if (bannerPic === 1) {
          document.querySelectorAll(".bannerImg")[totalImage-1].style.opacity = "0";
          document.querySelectorAll(".bannerTitle")[totalImage-1].style.opacity = "0";
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
let onMain = true;
document.body.addEventListener('wheel', checkScrollDirection);
function checkScrollDirection(event) {
  if (onMain === true) {
    if (checkScrollDirectionIsUp(event)) {
      document.querySelector("nav").style.transform = 'translateY(0)';
    } else {
      document.querySelector("nav").style.transform = 'translateY(-100px)';
    }
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



//PROJECT SLIDE
const totalProject = document.querySelectorAll(".project").length;
let slidePos = 0;
let currentProject = Math.ceil(totalProject / 2);
document.querySelectorAll(".project")[currentProject-1].classList.add("is-in");
document.querySelectorAll(".dot")[currentProject-1].classList.add("is-at");
//Next
document
  .querySelector(".nextBut")
  .addEventListener("click", function(event) {
    document.querySelectorAll(".project")[currentProject-1].classList.remove("is-in");
    document.querySelectorAll(".dot")[currentProject-1].classList.remove("is-at");
    if (currentProject === totalProject) {
      slidePos = -(slidePos);
      currentProject = 1;
      document.querySelector(".wrapper").style.translate = slidePos + "px";
      document.querySelectorAll(".project")[currentProject-1].classList.add("is-in");
      document.querySelectorAll(".dot")[currentProject-1].classList.add("is-at");
    } else {
      slidePos = slidePos - document.querySelector(".wrapper").getBoundingClientRect().width / totalProject;
      currentProject = currentProject + 1;
      document.querySelector(".wrapper").style.translate = slidePos + "px";
      document.querySelectorAll(".project")[currentProject-1].classList.add("is-in");
      document.querySelectorAll(".dot")[currentProject-1].classList.add("is-at");
    }
});
//Previous
document
  .querySelector(".prevBut")
  .addEventListener("click", function(event) {
    document.querySelectorAll(".project")[currentProject-1].classList.remove("is-in");
    document.querySelectorAll(".dot")[currentProject-1].classList.remove("is-at");
    if (currentProject === 1) {
      slidePos = -(slidePos);
      currentProject = totalProject;
      document.querySelector(".wrapper").style.translate = slidePos + "px";
      document.querySelectorAll(".project")[currentProject-1].classList.add("is-in");
      document.querySelectorAll(".dot")[currentProject-1].classList.add("is-at");
    } else {
      slidePos = document.querySelector(".wrapper").getBoundingClientRect().width / totalProject + slidePos;
      currentProject = currentProject - 1;
      document.querySelector(".wrapper").style.translate = slidePos + "px";
      document.querySelectorAll(".project")[currentProject-1].classList.add("is-in");
      document.querySelectorAll(".dot")[currentProject-1].classList.add("is-at");
    }
});
//Refresh on resize
function onWindowResize() {
  document.querySelectorAll(".project")[currentProject-1].classList.remove("is-in");
  document.querySelectorAll(".dot")[currentProject-1].classList.remove("is-at");
  slidePos = 0;
  currentProject = Math.ceil(totalProject / 2);
  document.querySelector(".wrapper").style.translate = slidePos + "px";
  document.querySelectorAll(".project")[currentProject-1].classList.add("is-in");
  document.querySelectorAll(".dot")[currentProject-1].classList.add("is-at");
}
window.addEventListener("resize", onWindowResize, false);



//PROJECT DETAIL BOARD
//Project 1
document.querySelector("#view1").addEventListener("click", function(event) {
  document.querySelector("#detail1").style.display = "flex";
  document.body.style.overflowY = "hidden";
  onMain = false
});
document.querySelector("#close1").addEventListener("click", function(event) {
  document.querySelector("#detail1").style.display = "none";
  document.body.style.overflowY = "scroll";
  onMain = true
});
//Project 2
document.querySelector("#view2").addEventListener("click", function(event) {
  document.querySelector("#detail2").style.display = "flex";
  document.body.style.overflowY = "hidden";
  onMain = false
});
document.querySelector("#close2").addEventListener("click", function(event) {
  document.querySelector("#detail2").style.display = "none";
  document.body.style.overflowY = "scroll";
  onMain = true
});
//Project 3
document.querySelector("#view3").addEventListener("click", function(event) {
  document.querySelector("#detail3").style.display = "flex";
  document.body.style.overflowY = "hidden";
  onMain = false
});
document.querySelector("#close3").addEventListener("click", function(event) {
  document.querySelector("#detail3").style.display = "none";
  document.body.style.overflowY = "scroll";
  onMain = true
});
//Project 4
document.querySelector("#view4").addEventListener("click", function(event) {
  document.querySelector("#detail4").style.display = "flex";
  document.body.style.overflowY = "hidden";
  onMain = false
});
document.querySelector("#close4").addEventListener("click", function(event) {
  document.querySelector("#detail4").style.display = "none";
  document.body.style.overflowY = "scroll";
  onMain = true
});
//Project 5
document.querySelector("#view5").addEventListener("click", function(event) {
  document.querySelector("#detail5").style.display = "flex";
  document.body.style.overflowY = "hidden";
  onMain = false
});
document.querySelector("#close5").addEventListener("click", function(event) {
  document.querySelector("#detail5").style.display = "none";
  document.body.style.overflowY = "scroll";
  onMain = true
});
//Project 6
document.querySelector("#view6").addEventListener("click", function(event) {
  document.querySelector("#detail6").style.display = "flex";
  document.body.style.overflowY = "hidden";
  onMain = false
});
document.querySelector("#close6").addEventListener("click", function(event) {
  document.querySelector("#detail6").style.display = "none";
  document.body.style.overflowY = "scroll";
  onMain = true
});
//Project 7
document.querySelector("#view7").addEventListener("click", function(event) {
  document.querySelector("#detail7").style.display = "flex";
  document.body.style.overflowY = "hidden";
  onMain = false
});
document.querySelector("#close7").addEventListener("click", function(event) {
  document.querySelector("#detail7").style.display = "none";
  document.body.style.overflowY = "scroll";
  onMain = true
});
//Project 8
document.querySelector("#view8").addEventListener("click", function(event) {
  document.querySelector("#detail8").style.display = "flex";
  document.body.style.overflowY = "hidden";
  onMain = false
});
document.querySelector("#close8").addEventListener("click", function(event) {
  document.querySelector("#detail8").style.display = "none";
  document.body.style.overflowY = "scroll";
  onMain = true
});
//Project 9
document.querySelector("#view9").addEventListener("click", function(event) {
  document.querySelector("#detail9").style.display = "flex";
  document.body.style.overflowY = "hidden";
  onMain = false
});
document.querySelector("#close9").addEventListener("click", function(event) {
  document.querySelector("#detail9").style.display = "none";
  document.body.style.overflowY = "scroll";
  onMain = true
});