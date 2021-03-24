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
      let container = document.createElement("div");
      container.classList.add("modal");
      let crossBtn = document.createElement("span");
      crossBtn.innerText = "X";
      crossBtn.classList.add("cross-btn");
      crossBtn.addEventListener("click", () => {
        charactersBox.innerHTML = "";
        charactersBox.style.display = "none";
      });
      ele.characters.slice(0, 24).forEach((url) => {
        fetch(url)
          .then((res) => res.json())
          .then((data) => modal(data))
          .then((ele) => container.append(ele));
      });
      container.append(crossBtn);
      charactersBox.append(container);
      charactersBox.style.display = "flex";
    });
    charactersBox.style.display = "none";

    root.append(li);
  });
}

function modal(data) {
  let li = document.createElement("li");
  let name = document.createElement("p");
  let gender = document.createElement("p");
  let aliases = document.createElement("p");
  let tvSeries = document.createElement("p");
  name.innerText = data.name;
  gender.innerText = data.gender;
  aliases.innerText = data.aliases;
  tvSeries.innerText = data.tvSeries;
  li.append(name, gender, aliases, tvSeries);
  return li;
}
