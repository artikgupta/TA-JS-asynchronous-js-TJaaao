let root = document.querySelector(".root");
// let loader = document.querySelector(".loader-box");

let data = null;

fetch("https://test.spaceflightnewsapi.net/api/v2/articles?_limit=30")
  .then((response) => response.json())
  .then((jsonData) => {
    data = jsonData;
    createUI();
  })
  .catch((error) => {
    data = true;
    let message = "Something went wrong";
    errorUI(message);
  })
  .finally(() => {
    console.log(data);
    loader();
  });

function createUI() {
  console.log(data);
  data.map((ele) => {
    let li = document.createElement("li");
    let image = document.createElement("img");
    image.src = ele.imageUrl;
    let title = document.createElement("h2");
    title.innerText = ele.title;
    let source = document.createElement("h3");
    source.innerText = ele.summary;
    let button = document.createElement("a");
    button.innerText = "Read More";
    button.href = ele.url;
    li.append(image, title, source, button);
    root.append(li);
  });
}

function errorUI(message) {
  let p = document.createElement("p");
  p.innerText = message;
  document.body.append(p);
}

function loader() {
  console.log(data);
  if (data) {
    document.querySelector(".loader-box").remove();
  } else {
    let loader = document.createElement("div");
    let loaderBox = document.createElement("div");
    loader.classList.add("loader");
    loaderBox.classList.add("loader-box");
    loaderBox.append(loader);
    document.body.append(loaderBox);
  }
}

loader();
