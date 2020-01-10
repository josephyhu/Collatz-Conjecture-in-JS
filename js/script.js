let n = parseInt(prompt("Enter an integer greater than 1"));
let step = 0;

while (n < 2 || !Number.isInteger(n)) {
  n = parseInt(prompt("Enter an integer greater than 1"));
}

document.write("<p>n: " + n + "</p>");
while (n !== 1) {
  if (n % 2 === 0) {
    n = n/2;
  } else {
    n = n * 3 + 1;
  }
  step += 1
  document.write("<p>Step: " + step + " n: " + n + "</p>");
}