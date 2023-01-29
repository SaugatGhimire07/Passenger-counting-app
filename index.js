// javascript
let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let entires = count + " - "

    saveEl.textContent += entires
    console.log(entires)
    countEl.innerText = 0
    count = 0
}
