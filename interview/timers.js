let counter = 0;
const timerId = setInterval(
  () => {
    console.log('Hello World');
    counter += 1;
    if (counter === 3) {
      console.log('Done');
      clearInterval(timerId);
    }
  },
  1000
);
