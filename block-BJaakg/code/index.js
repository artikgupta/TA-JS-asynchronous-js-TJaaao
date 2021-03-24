let root = document.querySelector(".root");
let charactersBox = document.querySelector(".characters-box");

fetch("https://www.anapioficeandfire.com/api/books")
  .then((response) => response.json())
  .then((data) => createUI(data));
//   .catch((err) => console.error(err));

function createUI(arr) {
  arr.map((ele) => {
    let li = document.createElement("li");
    li.classList.add("li");
    let name = document.createElement("h2");
    name.innerText = ele.name;
    let authors = document.createElement("p");
    authors.innerText = ele.authors[0];
    let numberOfPages = document.createElement("p");
    numberOfPages.innerText = ele.numberOfPages;
    let publisher = document.createElement("p");
    publisher.innerText = ele.publisher;
    let released = document.createElement("p");
    released.innerText = ele.released;
    let country = document.createElement("p");
    country.innerText = ele.country;
    let characters = document.createElement("a");
    // let charactersArr = ele.characters.map((ele) => console.log(ele));
    // characters.href = ;
    characters.innerText = ele.characters.length;
    // console.log(ele.characters.length);
    // let clickLi = document.querySelector(".li");
    // clickLi.addEventListener("click", () => console.log("Hii"));
    li.append(
      name,
      authors,
      numberOfPages,
      publisher,
      released,
      country,
      characters
    );
    characters.addEventListener("click", () => {
      let arr = [];
      let charactersData = ele.characters.map((val) => fetch(val));
      Promise.all(charactersData).then((v) =>
        v.forEach((item) => {
          item.then((data) => arr.push(data.json()));
        })
      );
      console.log(arr);
    });
    root.append(li);
  });
}

function modal() {
  let container = document.createElement("div");
  container.classList.add("modal");
  let li = document.createElement("li");
}
