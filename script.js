let form = document.forms.example
let inputs = form.querySelectorAll('input.fill')
let inputsAll = form.querySelectorAll('input')
let btn = form.querySelector('button')
let errorcol = document.querySelector('.errorcol')
let succescol = document.querySelector('.succescol')
let needFill = document.querySelector('.needFill')
let allInp = document.querySelector('.allInp')
let error = []
let succes = []

let pattern = {
  name: /^[a-z ,.'-]+$/i,
  email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  age: /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/,
}

needFill.innerHTML = inputs.length
allInp.innerHTML = inputsAll.length

btn.onclick = () => {
  error.length = 0
  succes.length = 0
  inputsAll.forEach(inp => {
    let ex = inp.parentElement.classList.contains('error')
    if(ex === true) {
      error.push(inp)
      errorcol.innerHTML = error.length
    } else {
      succes.push(inp)
      succescol.innerHTML = succes.length
    }
  })

}

inputs.forEach(inp => {
  inp.onkeyup = () => {
    if (pattern[inp.name].test(inp.value)) {
      inp.parentElement.classList.remove('error')
    } else {
      inp.parentElement.classList.add('error')
    }
  }
  
})


form.onsubmit = (event) => {
  event.preventDefault();
  let error = false 
  
  inputs.forEach(inp => {
    if(inp.parentElement.classList.contains('fill') && inp.value.length === 0) {
      inp.parentElement.classList.add('error')
      error = true
    } else {
      inp.parentElement.classList.remove('error')
    }

    if(error === false) {
      submit(form);
    } else {
    }
  })

}



function submit(form) {
  user = {}
  
  let fm = new FormData(form)
  
  fm.forEach((value, key) => {
    user[key] = value
  })

}