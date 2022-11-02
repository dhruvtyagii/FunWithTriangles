const base = document.querySelector('.base');
const height = document.querySelector('.height');
const calculArea = document.querySelector('#calcArea');
const result = document.querySelector('.area');

function calculateArea(){
    x = base.value;
    y = height.value
    const area = x*y*(1/2)
    result.innerHTML = area;
    return area

}

calculArea.addEventListener("click", calculateArea);

 