// First recursive function

function countdown(num) {
  // Base case
  if (num <= 0) {
    console.log('All done!');
    return;
  }
  console.log(num);
  num--;
  countdown(num);
}

const check = countdown(3);
