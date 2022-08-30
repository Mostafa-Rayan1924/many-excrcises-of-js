// const youtube = document.getElementById("you");

// const biggerContainer = document.querySelector(".bigger-contaier");

// const kahyaan = document.getElementById("kahyaan");
// const visa = document.getElementById("visa");

// const buy = document.querySelectorAll(".js-buy");

// const addProduct = document.querySelector("#add-pro");
// const procontainer = document.querySelector("#pro-container");

// addProduct.addEventListener("click", (eo) => {
//   const newProduct = `

// <div class="card mycard" style="width: 18rem;">
// <img style="border-radius: 5px;" src="pexels-cottonbro-3826678.jpg" class="card-img-top" alt="...">
// <div class="card-body">
//   <h5 class="card-title">MY Card title</h5>
//   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   <a id="buy" href="#"  class="js-buy btn btn-primary">buy</a>

// </div>
// </div>

// `;

//   procontainer.innerHTML += newProduct;
// });

// // when i click on buy button
// procontainer.addEventListener("click", (eo) => {
//   if (eo.target.classList == "js-buy btn btn-primary") {
//     biggerContainer.classList.add("active");
//     eo.preventDefault();

//     kahyaan.style.display = "none";

//     visa.style.display = "block";
//   }
// });

// const aywaa = document.querySelector(".aywaa");

// aywaa.addEventListener("click", (eo) => {
//   kahyaan.style.display = "block";
//   visa.style.display = "none";

//   setTimeout(() => {
//     kahyaan.style.display = "none";
//     biggerContainer.classList.remove("active");
//   }, 1000);
// });

// const dark = document.getElementById("dark");
// const body = document.getElementById("body");

// dark.addEventListener("click", (eo) => {
//   body.classList.toggle("dark");
// });

// change header and change mode => back color
let dark = document.getElementById("dark");
let main = document.getElementById("main");
let header = document.querySelector(".myheader");
console.log(header);
let headerBg = document.getElementById("head");

headerBg.addEventListener("click", function () {
  let random = Math.round(Math.random() * 360);
  header.style.backgroundColor = `hsl(${random}, 44%, 55%)`;
  main.style.backgroundColor = `hsl(${random}, 44%, 55%)`;
  dark.style.backgroundColor = `hsl( ${Math.round(
    Math.random() * 360
  )} , 44%, 70%)`;
});
// end of  change header and change mode => back color

//  func do random color
let randomly = function () {
  return Math.round(Math.random() * 360);
};

//   change title bg and change mode => back color

let changeTitle = document.getElementById("title");
changeTitle.addEventListener("click", function () {
  let titleBg = document.querySelectorAll("h1:not(#main)");
  titleBg.forEach((item) => {
    item.style.backgroundColor = `hsl(${randomly()}, 44%, 55%)`;
  });
});
// end of  change header and change mode => back color

//   change title color  => back color

let titColor = document.getElementById("titColor");
titColor.addEventListener("click", function () {
  let titleColor = document.querySelectorAll("h1:not(#main)");
  titleColor.forEach((item) => {
    item.style.color = `hsl(${randomly()}, 44%, 35%)`;
  });
});
// end of  change header and change mode => back color

// dark mode
let body = document.getElementById("body");
let changeMode = document.getElementById("dark");
changeMode.addEventListener("click", function () {
  body.classList.toggle("mode");
});

// end of  change sections a => back color
let sectionBg = document.getElementById("sections");

let arrColor = ["#A0E7E5", "#FBE7C6", "blue"];
let i = 0;

sectionBg.addEventListener("click", function () {
  let section = document.querySelectorAll("section");

  section.forEach((item) => {
    item.style.backgroundColor = arrColor[i];
  });
  i++;
  if (i > arrColor.length) {
    i = 0;
  }
});
// end of  change header and change mode => back color

// auto writing for header by set interval
// let mainHeading = document.getElementById("main");

// let counter = 1;

// let seti = setInterval(() => {
//   let title = "rayan";

//   mainHeading.innerText = title.slice(0, counter);

//   counter++;
//   if (title.length < counter) {
//     counter = 1;
//   }
// }, 1000);

//  auto writing for header by function دي الاقضل
let counter = 1;
let mainHeading = document.getElementById("main");
let autoWriting = function () {
  let title = "Rayan";
  mainHeading.innerText = title.slice(0, counter);
  counter++;
  if (title.length < counter) {
    counter = 1;
  }
};

setInterval(autoWriting, 500);

// فيديوهات مختلفه من اليوتيوب

randomvideo.addEventListener("click", function () {
  const videoArr = [
    `
    <iframe id="framedvideo" width="560" height="315" src="https://www.youtube.com/embed/rC6blQtakzQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    `<iframe id="framedvideo" width="560" height="315" src="https://www.youtube.com/embed/tZLDEUFtnX0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    `<iframe id="framedvideo" width="560" height="315" src="https://www.youtube.com/embed/8x4E8kzYNSM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    `<iframe id="framedvideo" width="560" height="315" src="https://www.youtube.com/embed/10wsbG9IsAo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    `<iframe id="framedvideo" width="560" height="315" src="https://www.youtube.com/embed/ZJknc9iqiYU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    `<iframe id="framedvideo" width="560" height="315" src="https://www.youtube.com/embed/nceUSuYjNXM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    `<iframe id="framedvideo" width="560" height="315" src="https://www.youtube.com/embed/Ckj9V74HrY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    `<iframe id="framedvideo" width="560" height="315" src="https://www.youtube.com/embed/Cbk980jV7Ao" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  ];
  contVid.innerHTML = videoArr[Math.floor(Math.random() * videoArr.length - 1)];
  falling();
});

// اقتباسات مختلفه موقع css quotes style
let ind = 0;
randomquotes.addEventListener("click", function () {
  const quoteArr = [
    `<blockquote lang="ar" dir="rtl" class="sidekick">
    لا تُبرر أخطائك بل إجلطهم بالمزيد
    &#128127; &#128514;
    <br>
    <cite>    شخص عادى </cite>
  </blockquote> `,

    `<blockquote lang="ar" dir="rtl" class="sidekick">
  لا تتعلق بأحد فالناس ليست أشجاراً وانت لست قرداً
  &#128514;
  
  <br>
  <cite>  انسان مجروح  </cite>
  </blockquote> `,

    `<blockquote lang="ar" dir="rtl" class="sidekick">
  
  الحياة ليست سباق  ف إهدى كده و relax  يا صاحبى
  &#128526;
  
  <br>
  <cite> شخص رايق  </cite>
  </blockquote> `,

    `<blockquote lang="ar" dir="rtl" class="sidekick">
  
  الحياة إما مغامرة جريئة أو لا شي
  &#129505; &#128170;
  <br>
  <cite> شخص مغامر </cite>
  </blockquote> `,

    `<blockquote lang="ar" dir="rtl" class="sidekick">
  اللى ملوش قلب ملوش رزق
  &#129505; &#128170;
  <br>
  <cite> شخص شجاع</cite>
  </blockquote> `,

    `<blockquote lang="ar" dir="rtl" class="sidekick">
  الثقة بالنفس تصنع المُعجزات
  &#128521;
  <br>
  <cite>   شخص عارف قيمة نفسة  </cite>
  </blockquote> `,
  ];

  contQuote.innerHTML = quoteArr[ind];
  ind++;
  if (ind == quoteArr.length) {
    ind = 0;
  }
  falling();
});

// animation heart
let falling = function () {
  let s = document.createElement("div");
  congratulations.append(s);
  let t = setInterval(() => {
    let h = document.createElement("div");
    s.append(h);
    h.innerHTML = "&#128151";
    h.classList.add("heart");
    h.style.left = `${Math.random() * 100}%`;
    h.style.animationDuration = `${Math.random() * 1.5} s`;

    let f = document.createElement("div");
    s.append(f);
    f.innerHTML = "&#128153";
    f.classList.add("heart");
    f.style.left = `${Math.random() * 100}%`;
    f.style.animationDuration = `${Math.random() * 1.5} s`;
  }, 90);
  setTimeout(() => {
    clearInterval(t);
  }, 3000);
  setTimeout(() => {
    s.remove();
  }, 4000);
};
congratulationsButton.addEventListener("click", function () {
  falling();
});

// accordion
let allPlus = document.querySelectorAll(".plus");
allPlus.forEach((item) => {
  item.addEventListener("click", (eo) => {
    let content =
      item.parentElement.parentElement.getElementsByClassName("content")[0];

    content.classList.toggle("active");

    if (content.classList.contains("active")) {
      item.innerText = "_";
      item.style.transform = "translateY(-8px)";
    } else {
      item.innerText = "+";
      item.style.transform = "translateY(0)";
    }
  });
});

// digital clock
let digitalClock = function () {
  let now = new Date();

  let hours = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();
  let pm = "am";
  let dateDay = now.toDateString();
  if (hours > 12) {
    hours = hours - 12;
    pm = "PM";
  }
  if (min < 10) {
    min = `0${min}`;
  }
  if (pm < 10) {
    pm = `0${pm}`;
  }

  let clock = `    <div class="date">
    ${dateDay}
  </div>
  
  <div class="time">
    ${hours} : ${min} : ${sec} ${pm}
  </div>
  `;
  clockcontainer.innerHTML = clock;
};
setInterval(digitalClock, 1000);
i = 0;
let imgArr = [
  `<img src="1.png" class="img-slider">`,
  `<img src="2.png" class="img-slider">`,
  ` <img src="3.png" class="img-slider">`,
  `<img src="4.png" class="img-slider">`,
  ` <img src="5.png" class="img-slider">`,
];
slidercontainer.innerHTML += imgArr[i];
slidercontainer.innerHTML += `  <p>slide #${i + 1} of ${imgArr.length}</p>  `;

pre.setAttribute("disabled", "");
next.addEventListener("click", function () {
  i++;
  slidercontainer.innerHTML += imgArr[i];
  slidercontainer.innerHTML += `  <p>slide #${i + 1} of ${imgArr.length}</p>  `;
  if (i + 1 == imgArr.length) {
    next.setAttribute("disabled", "");
  }
  parentBtn
    .getElementsByClassName("active-num")[0]
    .classList.remove("active-num");
  parentBtn.getElementsByTagName("button")[i].classList.add("active-num");
  pre.removeAttribute("disabled");
});

pre.addEventListener("click", function () {
  next.removeAttribute("disabled");

  i--;
  slidercontainer.innerHTML += imgArr[i];
  slidercontainer.innerHTML += `  <p>slide #${i + 1} of ${imgArr.length}</p>  `;
  parentBtn
    .getElementsByClassName("active-num")[0]
    .classList.remove("active-num");
  parentBtn.getElementsByTagName("button")[i].classList.add("active-num");
  pre.removeAttribute("disabled");
  if (i == 0) {
    pre.setAttribute("disabled", "");
  }
});

let allBtn = document.querySelectorAll(".mynum");
let parentBtn = document.getElementsByClassName("numbers")[0];

allBtn.forEach((item, index) => {
  item.addEventListener("click", function () {
    parentBtn
      .getElementsByClassName("active-num")[0]
      .classList.remove("active-num");
    item.classList.add("active-num");

    slidercontainer.innerHTML += imgArr[index];
    slidercontainer.innerHTML += `  <p>slide #${index + 1} of ${
      imgArr.length
    }</p>  `;

    i = index;

    if (index == imgArr.length - 1) {
      next.setAttribute("disabled", "");
      pre.removeAttribute("disabled");
    } else if (index == 0) {
      pre.setAttribute("disabled", "");
      next.removeAttribute("disabled");
    } else {
      next.removeAttribute("disabled");
      pre.removeAttribute("disabled");
    }
  });
});

let right = document.querySelector(".right");
let container = document.querySelector(".container");

right.addEventListener("click", function () {
  container.innerHTML += `<div class="box">
<div class="img">
  <img src="2.png" alt="">
</div>
      </div>
      <div class="box">
<div class="img">
  <img src="2.png" alt="">
</div>
      </div>
      <div class="box">
      <div class="img">
        <img src="2.png" alt="">
      </div>
            </div><div class="box">
            <div class="img">
              <img src="2.png" alt="">
            </div>
                  </div>`;
});
left.addEventListener("click", function () {
  container.innerHTML += "";
});
