// 1. Create a promise. Have it resolve with a value of `Promise Resolved!` in resolve after a delay of 1000ms, using `setTimeout`. Print the contents of the promise after it has been resolved by passing `console.log` to `.then`

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise Resolved!");
  }, 1000);
});

promise.then((msg) => {
  console.log(msg);
});

// 2. Create another promise. Now have it reject with a value of `Rejected Promise!` without using `setTimeout`. Print the contents of the promise after it has been rejected by passing console.log to `.catch`

```js
// Your code
```;
let reject = new Promise((res, rej) => {
  reject(`Rejected Promise!`);
});

reject.catch((error) => {
  console.log(error);
});

// 3. Create another promise. Now have it reject with a value of `Rejected Promise!` without using `setTimeout`. Print the contents of the promise after it has been rejected by passing console.log to `.catch` and also use `.finally` to log message `Promise Settled!`.

// ```js
// // Your code
// ```

let reject = new Promise((res, rej) => {
  reject(`Rejected Promise!`);
});

reject
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log(`Promise Settled!`);
  });

// 4. What will be the output of the code below.

// ```js
// console.log('A');

// // Asynchronous code finises in 0 seconds (Callback Queue)
// setTimeout(() => console.log('B'), 0); // callback queue

// // A promise that resolves right away (Microtask Queue)
// Promise.resolve().then(() => console.log('C'));

// console.log('D');
// ```

Answer: "A";
("D");
("C");
("B");

// 5. Write a function named `wait` that accepts `time` in ms returns a promise. The promise gets resolved after given time.

// ```js
// // Your code
// ```

function wait(time) {
  let promise = new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Promise Resolved!");
    }, time);
  });
  return promise;
}

wait(1000);

// 6. Do the following:

// - Create a new promise
// - Resolve with 21
// - Use `.then` and return adding `10` to the value you will get as parameter
// - Use `.then` and return adding `100` to the value you will get as parameter
// - Use `.then` and check if the value you get is greater than `100` throw new error with any message
// - Catch the error using `.catch`

// ```js
// // Your code
// ```

let promise = new Promise((res, rej) => {
  res(21);
});
promise
  .then((val) => {
    return val + 10;
  })
  .then((val) => {
    return val + 100;
  })
  .then((val) => {
    if (val > 100) {
      return new Error("No is greater than 100");
    }
  })
  .catch((error) => {
    console.log(error);
  });

// 7. Do the following:

// - Create a new promise
// - Resolve the promise with `['A']`
// - Use `.then` and concat `B` into the parameter and return
// - Use `.then` and return and object like `{0: 'A', 1: 'B'}`
// - Use `.then` and log the value

// ```js
// // Your code
// ```

let promise = new Promise((res, rej) => {
  res(["A"]);
});

promise
  .then((val) => {
    let result = val.concat("B");
    return result;
  })
  .then((val) => {
    val = val.map((ele, i) => {
      return [i, ele];
    });
    return Object.fromEntries(val);
  })
  .then((val) => {
    console.log(val);
  });

// 8. Do the following:

// - Create a new promise named `first` and resolve it with `1`
// - Use `.then` on `first` and return `2` also check the value you get access to by logging
// - Chain `.then` on above and return `3` also check the value you get access to by logging
// - Chain `.then` on above and return `4` also check the value you get access to by logging

// ```js
// // Your code
// ```

let first = new Promise((res, rej) => {
  res(1);
});

first
  .then((val) => {
    val = 2;
    console.log(val);
    return val;
  })
  .then((val) => {
    val = 3;
    console.log(val);
    return val;
  })
  .then((val) => {
    val = 4;
    console.log(val);
    return val;
  });

// 9. Do the following:

// - Create a new promise named `first` and resolve it with `1`
// - Use `.then` on `first` and return `2` also check the value you get access to by logging
// - Use `.then` on `first` and return `3` also check the value you get access to by logging
// - Use `.then` on `first` and return `4` also check the value you get access to by logging

// ```js
// // Your code
// ```

let first = new Promise((res, rej) => {
  res(1);
});

first
  .then((val) => {
    val = 2;
    console.log(val);
    return val;
  })
  .then((val) => {
    val = 3;
    console.log(val);
    return val;
  })
  .then((val) => {
    val = 4;
    console.log(val);
    return val;
  });

// 10. Try to understand the difference between the problem 8 and 9. Write your observation.

// 11. Do the following

// - Create a promise and resolve it with `John`
// - Use `.then` and return another promise that resolves with `Arya`
// - Use `.then` log the value you get access to and return another promise that resolves after 2000ms with value `Bran`
// - Use `.then` to log the value

// ```js
// // Your code
// ```

let promise = new Promise((res, rej) => {
  res("John");
});

promise
  .then((val) => {
    return (val = "Arya");
  })
  .then((val) => {
    setTimeout(() => {
      val = "Bran";
    }, 2000);
    return val;
  })
  .then((val) => {
    console.log(val);
  });
