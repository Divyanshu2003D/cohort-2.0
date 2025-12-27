var h1= document.querySelector('h1')
console.log(h1);
h1.innerHTML = 'Dom padhlo guys!'
h1.style.color = 'red'
h1.style.backgroundColor = 'white'
h1.addEventListener('click', function(){
    console.log("YO ham padh rahe hai")
})