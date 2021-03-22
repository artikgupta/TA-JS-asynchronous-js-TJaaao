// let accessToken = "iXZbsymHTuImE4lwqFcGTqLFMas1OjPEWjEsp865gSk";
// let secretKey = "aAhtn9a8-Tz4w1hj8x_0HZpTKIxCxOqfXLTaB8vjaCY";
// let baseURL ="https://api.unsplash.com/photos/?client_id=";

let root = document.querySelector(".root");

let input = document.querySelector("input");

let xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  "https://api.unsplash.com/photos/?client_id=iXZbsymHTuImE4lwqFcGTqLFMas1OjPEWjEsp865gSk"
);
xhr.onload = () => {
  root.innerHTML = "";
  let randomImages = JSON.parse(xhr.response);
  console.log(randomImages);
  randomImages.map((ele) => {
    let randomIndex = Math.floor(Math.random() * randomImages.length);
    let li = document.createElement("li");
    let img = document.createElement("img");
    img.src = ele.urls.small;
    li.append(img);
    root.append(li);
  });
};

xhr.send();

xhr.onerror = () => {
  console.log("Error");
};

function changeSubmit(event) {
  if (event.keyCode === 13) {
    let val = event.target.value;
    console.log(val);
    let SingleImg = new XMLHttpRequest();
    SingleImg.open(
      "GET",
      `https://api.unsplash.com/search/photos?query=${val}&client_id=cbktwRcMdPLPnGM1cpYPvzejdq3_KwSZ_bQjNLZNj1g`
    );
    SingleImg.onload = function () {
      let imgsArray = JSON.parse(SingleImg.response);

      console.log(imgsArray);
      imgsArray.results.map((ele) => {
        let li = document.createElement("li");
        let img = document.createElement("img");
        img.src = ele.urls.small;
        li.append(img);
        root.append(li);
      });
    };
    SingleImg.send();
  }
}

input.addEventListener("keyup", changeSubmit);
