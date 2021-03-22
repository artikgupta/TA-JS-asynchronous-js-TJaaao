const btn = document.querySelector(".button");

const img = document.querySelector(".image");

btn.addEventListener("click", () => {
  img.innerHTML = "";
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://api.thecatapi.com/v1/images/search?limit=1&size=full"
  );
  xhr.onload = function () {
    let imageData = JSON.parse(xhr.response);
    console.log(imageData);
    let image = document.createElement("img");
    image.src = imageData;
    img.append(image);
  };
  xhr.onerror = function () {
    console.log("Something went wrong...");
  };
  xhr.send();
});
