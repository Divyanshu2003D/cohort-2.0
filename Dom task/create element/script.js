let btn=document.querySelector('button')
let main=document.querySelector('main')

let arr=['I am Divyanshu','I recently download Forza horizon 5','My ingame name is GandiNazar','I am 22 years old','I purchase a course from sheriyans']


btn.addEventListener('click',function(){
    let h1=document.createElement('h1')
    let a= Math.floor(Math.random()*arr.length)
    h1.innerHTML=arr[a]
    
    let x=Math.random()*100
    let y=Math.random()*100
    let rot=Math.random()*360
    let scl=Math.random()*3
    var c1= Math.floor(Math.random()*256)
    var c2= Math.floor(Math.random()*256)
    var c3= Math.floor(Math.random()*256)

    h1.style.position='absolute'
     
    h1.style.left= x+'%'
    h1.style.top=y+'%'
    h1.style.rotate=rot+'deg'
    h1.style.scale=scl   

    
    h1.style.color=`rgb(${c1},${c2},${c3})`
    


    main.appendChild(h1)

})