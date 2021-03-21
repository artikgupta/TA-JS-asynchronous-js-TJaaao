let input = document.querySelector("input");
let imageBox = document.querySelector(".img-box");
let username = document.querySelector(".username");
let userData = document.querySelector(".user-data");
// let followersBox = document.querySelector(".followers-box");
// let followingBox = document.querySelector(".following-box");

function displayUI(data) {
  imageBox.innerHTML = "";
  username.innerHTML = "";
  let img = document.createElement("img");
  img.src = data.avatar_url;
  imageBox.append(img);
  username.innerText = data.name;
}

function uIfollwersAndFollowing(val) {
  userData.innerHTML = "";
  let followers = document.createElement("div");
  let followersBox = document.createElement("div");
  let heading = document.createElement("h2");
  heading.innerText = "Followers";
  let following = document.createElement("div");
  let followingBox = document.createElement("div");
  let followingHeading = document.createElement("h2");
  followingHeading.innerText = "Following";

  let followersXhr = new XMLHttpRequest();
  followersXhr.open("GET", `https://api.github.com/users/${val}/followers`);
  followersXhr.onload = function () {
    let followersData = JSON.parse(followersXhr.response);
    let firstFiveFollowers = followersData.slice(0, 5);
    firstFiveFollowers.map((ele) => {
      let image = document.createElement("img");
      image.src = ele.avatar_url;
      followersBox.classList.add("flex");
      followersBox.append(image);
    });
    followers.append(heading, followersBox);
    userData.append(followers);
  };

  followersXhr.onerror = function () {
    console.log("Something went wrong...");
  };
  followersXhr.send();

  let followingXhr = new XMLHttpRequest();
  followingXhr.open("GET", `https://api.github.com/users/${val}/following`);
  followingXhr.onload = function () {
    let followingData = JSON.parse(followingXhr.response);
    let firstFiveFollowing = followingData.slice(0, 5);
    firstFiveFollowing.map((ele) => {
      let image = document.createElement("img");
      image.src = ele.avatar_url;
      followingBox.classList.add("flex");
      followingBox.append(image);
    });
    following.append(followingHeading, followingBox);
    userData.append(following);
  };

  followingXhr.onerror = function () {
    console.log("Something went wrong...");
  };
  followingXhr.send();
}

function handleSubmit(event) {
  if (event.keyCode === 13) {
    let val = event.target.value;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.github.com/users/${val}`);
    xhr.onload = function () {
      let userData = JSON.parse(xhr.response);
      displayUI(userData);
      uIfollwersAndFollowing(val);
    };
    xhr.onerror = function () {
      console.log("Something went wrong...");
    };
    xhr.send();
  }
}

input.addEventListener("keyup", handleSubmit);
