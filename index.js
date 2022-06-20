// intitalize count as 0
// listent for clicks on button
// increment count when button is clicked
// change count-element in html

let countElement = document.getElementById("count-element")
let saveElement = document.getElementById("save-element")
let count = 0


function increment() {
  count += 1
  countElement.textContent = count
  // console.log(count)
}

// increment()

function decrease() {
  count -= 1
  if (count < 0)
    count = 0;
  countElement.textContent = count
}

function save() {
  let countStr = count + " - "
  saveElement.textContent += countStr
  countElement.textContent = 0
  count = 0
  // console.log(count)
}

// save()
