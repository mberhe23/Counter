// intitalize count as 0
// listent for clicks on button
// increment count when button is clicked
// change count-element in html

let countElement = document.getElementById("count-element")

let count = 0

function increment() {
  count = count + 1
  countElement.innerText = count
  console.log(count)
}

increment()
