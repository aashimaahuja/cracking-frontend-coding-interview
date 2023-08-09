function all(promises) {
  let res = new Array(promises.length);
  let count = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, i) => {
      if (!(promise instanceof Promise)) {
        promise = Promise.resolve(promise);
      }

      promise
        .then((data) => {
          res[i] = data;
          count++;
          if (count === promises.length) {
            resolve(res);
          }
        })
        .catch((err) => reject(err));
    });
  });
}
