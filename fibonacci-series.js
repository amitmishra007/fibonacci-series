const numOfElements = +window.prompt(
  "How many elements of the Fibonacci series do you want to see"
);
let seriesFib = [0, 1];
if (numOfElements === 0) {
  console.log("Please enter a valid number");
  alert("Please enter a valid number");
} else if (numOfElements === 1) {
  console.log("0");
  alert("0");
} else {
  for (i = 0; i < numOfElements - 2; i++) {
    seriesFib.push(seriesFib[i] + seriesFib[i + 1]);
  }
  console.log(seriesFib);
  alert(seriesFib);
}
