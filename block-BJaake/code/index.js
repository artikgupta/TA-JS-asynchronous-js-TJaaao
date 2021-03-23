let root = document.querySelector(".root");

fetch("https://test.spaceflightnewsapi.net/api/v2/articles?_limit=30")
  .then((response) => response.json())
  .then((data) => createUI(data));

function createUI(arr) {
  console.log(arr);
  arr.map((ele) => {
    //     let div = document.createElement("div");
    //     div.innerHTML = `<div class="dropdown">
    //   <button class="dropbtn">Dropdown</button>
    //   <div class="dropdown-content">
    //     <a href="#">${ele.newsite}</a>
    //     <a href="#">Link 2</a>
    //     <a href="#">Link 3</a>
    //   </div>
    // </div>`;
    let li = document.createElement("li");
    let image = document.createElement("img");
    image.src = ele.imageUrl;
    let title = document.createElement("h2");
    title.innerText = ele.title;
    let source = document.createElement("h3");
    source.innerText = ele.summary;
    let button = document.createElement("a");
    button.href = ele.url;
    li.append(image, title, source, button);
    root.append(li);
  });
}
