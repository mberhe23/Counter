// intitalize count as 0
// listent for clicks on button
// increment count when button is clicked
// change count-element in html

let countElement = document.getElementById("count-element")
let saveElement = document.getElementById("save-element")
let count = 0


function increment() {
  countElement.innerText = count
  count += 1
  console.log(count)
}

// increment()

function save() {
  let countStr = count + " - "
  saveElement.innerText += countStr
  console.log(count)
}

// save()
