let one1 = new Promise((res, rej) => {
  setTimeout(() => {
    res(1);
  }, 1000);
});

let two2 = new Promise((res, rej) => {
  setTimeout(() => {
    res(2);
  }, 2000);
});

let three3 = new Promise((res, rej) => {
  setTimeout(() => {
    res(3);
  }, 3000);
});

let four = new Promise((res, rej) => {
  setTimeout(() => {
    res(4);
  }, 4000);
});

let all = Promise.all([one1, two2, three3, four]).then((res) => {
  console.log(res);
});

let arr = ["Kate", "Joe", "Anna", "Mac", "Joseph"].map((user) => {
  return fetch(`https://api.github.com/users/${user.toLowerCase()}`);
});

console.log(arr);

Promise.all(arr)
  .then((val) =>
    val.map((v) => {
      return v.json();
    })
  )
  .then((val) => {
    console.log(val);
  });

let promise1 = fetch("https://random.dog/woof.json");
let promise2 = fetch("https://aws.random.cat/meow");

Promise.race([promise1, promise2]).then((response) => {
  console.log(response);
});

const one = new Promise((resolve, reject) =>
  setTimeout(() => resolve("Arya"), 1000)
);
const two = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error("Whoops!")), 2000)
);
const three = new Promise((resolve, reject) =>
  setTimeout(() => resolve("John"), 3000)
);

const promises = [one, two, three, four, promise1, promise2];

Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result))
);
