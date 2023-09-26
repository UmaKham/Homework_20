let form = document.forms.example
let inputs = form.querySelectorAll('.fill')
console.log(inputs);



form.onsubmit = (event) => {
  event.preventDefault();
  let error = false 
  
  inputs.forEach(inp => {
    if(inp.value.length === 0) {
      inp.classList.add('error');
    } else {
      inp.classList.remove('error')
    }
  })
  submit(form)
}

function submit(form) {
  user = {}
  
  let fm = new FormData(form)
  
  fm.forEach((value, key) => {
    user[key] = value
  })
  
}