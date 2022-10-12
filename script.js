const cdiv = document.querySelector('.container');

for (let i = 1; i < 257; i++) {
  const div = document.createElement('div');
  div.style.cssText = "border: 1px solid black; height: 25px; width: 25px";  
  cdiv.appendChild(div);
}

const button = document.createElement('button')
button.id = 'button'
button.innerText = 'click to change board'
document.body.appendChild(button)

button.addEventListener('click', function () {
    container.innerHTML = ''

    button.addEventListener('click', function () {
        container.innerHTML = ''