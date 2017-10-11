const asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Failed: Not a number');
      }

    }, 2000);
  });
};

const result = asyncAdd(1, 2);

result.then(
  // resolve
  message => {
    console.log(`Success: ${message}`);
  },
  // reject
  message => {
    console.log(`Error: ${message}`);
  }
);

// const somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve('Success!');
//     reject('Failed');
//   }, 2000);
//
//
// });
//
// somePromise.then(
//   // success
//   message => {
//   console.log(`Message: ${message}`);
// },
//   // fail
//   message => {
//   console.log(`Message: ${message}`);
// });
