// 슬라이크 전체 크기(width 구하기)
const slide = document.querySelector(".slide");
let slideWidth = slide.clientWidth;

// 버튼 
const prevBtn = document.querySelector(".slide_prev_button");
const nextBtn = document.querySelector(".slide_next_button");

// 슬라이드 전체
let slideItems = document.querySelectorAll(".slide_item");

// 현재 슬라이드 개수
const maxSlide = slideItems.length;

// 슬라이드 위치
let currSlide = 1;

// 보여지는 페이지
const pagination = document.querySelector(".slide_pagination");

for (let i = 0; i < maxSlide; i++) {
  if (i === 0) pagination.innerHTML += `<li class="active">•</li>`;
  else pagination.innerHTML += `<li>•</li>`;
}

const paginationItems = document.querySelectorAll(".slide_pagination > li");

const startSlide = slideItems[0]; //start
const endSlide = slideItems[slideItems.length - 1]; //end
const startElem = document.createElement("div"); //start
const endElem = document.createElement("div"); //end 

endSlide.classList.forEach((c) => endElem.classList.add(c));
endElem.innerHTML = endSlide.innerHTML;

startSlide.classList.forEach((c) => startElem.classList.add(c));
startElem.innerHTML = startSlide.innerHTML;

// 첫번재 엘리먼트 부터 시작하여 처음으로 돌아가는 것
slideItems[0].before(endElem);
slideItems[slideItems.length - 1].after(startElem);


slideItems = document.querySelectorAll(".slide_item");
let offset = slideWidth + currSlide;
slideItems.forEach((i) => {
  i.setAttribute("style", `left: ${-offset}px`);
});

function nextMove() {
  currSlide++;
  // 마지막 슬라이드 넘어가지 않게 하기 위해서
  if (currSlide <= maxSlide) {
    const offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  } else {
    // 무한 슬라이드 
    currSlide = 0;
    let offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
    });
    currSlide++;
    offset = slideWidth * currSlide;
    setTimeout(() => {
      slideItems.forEach((i) => {
        i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
      });
    }, 0);
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  }
}



function prevMove() {
  currSlide--;
  if (currSlide > 0) {
    const offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
     paginationItems.forEach((i) => i.classList.remove("active"));
     paginationItems[currSlide - 1].classList.add("active");
    
  } else {
    currSlide = maxSlide + 1;
    let offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
    });
    currSlide--;
    offset = slideWidth * currSlide;
    setTimeout(() => {
      slideItems.forEach((i) => {
        i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
      });
    }, 0);
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  }
}

nextBtn.addEventListener("click", () => {
  nextMove();
});
prevBtn.addEventListener("click", () => {
  prevMove();
});

window.addEventListener("resize", () => {
  slideWidth = slide.clientWidth;
});

for (let i = 0; i < maxSlide; i++) {
  paginationItems[i].addEventListener("click", () => {
    currSlide = i + 1;
    const offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  });
}


let startPoint = 0;
let endPoint = 0;

slide.addEventListener("mousedown", (e) => {
  startPoint = e.pageX; // 마우스 드래그 시작 위치 저장
});

slide.addEventListener("mouseup", (e) => {
  endPoint = e.pageX; // 마우스 드래그 끝 위치 저장
  if (startPoint < endPoint) {
    // 마우스가 오른쪽으로 드래그 된 경우
    prevMove();
  } else if (startPoint > endPoint) {
    // 마우스가 왼쪽으로 드래그 된 경우
    nextMove();
  }
});

// 모바일 터치 
slide.addEventListener("touchstart", (e) => {
  startPoint = e.touches[0].pageX; // 터치가 시작되는 위치 
});
slide.addEventListener("touchend", (e) => {
  endPoint = e.changedTouches[0].pageX; // 터치가 끝나는 위치
  if (startPoint < endPoint) {
    // 오른쪽으로 스와이프
    prevMove();
  } else if (startPoint > endPoint) {
    // 왼쪽으로 스와이프
    nextMove();
  }
});

// 슬라이드 루프 
let loopInterval = setInterval(() => {
  nextMove();
}, 3000);



