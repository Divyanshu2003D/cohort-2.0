var arr=[
    {
        team:'CSK',
        primary: 'yellow',
        secondary: 'blue',
        fullName:'Chennai Super Kings',
        captain:'Mahindra Singh Dhoni'
    },
    {
        team:'RCB',
        primary: 'red',
        secondary: 'black',
        fullName:'Royal Chalangers Banglore',
        captain:'Virat Kohli'
    },
    {
        team:'PBKS',
        primary: 'crimson',
        secondary: 'silver',
        fullName:'Punjab Kings',
        captain:'Shreyas Eyer'
    },
    {
        team:'KKR',
        primary: 'purple',
        secondary: 'gold',
        fullName:'Kolkata Knight Riders',
        captain:'Shubhman Gill'
    },
    {
        team:'DC',
        primary: 'blue',
        secondary: 'Red',
        fullName:'Delhi Capitals',
        captain:'Axar Patel'
    },
    {
        team:'LSG',
        primary: 'blue',
        secondary: 'orange',
        fullName:'Lucknow Super Giants',
        captain:'Rishabh Pant '
    },

]

let body=document.querySelector('body')
let btn=document.querySelector('button')
let h1=document.querySelector('h1')
let fname=document.querySelector('h2')
let captain=document.querySelector('h3')
let main=document.querySelector('main')



btn.addEventListener('click',function(){
    let winner=arr[Math.floor(Math.random()*arr.length)]
    
    h1.innerHTML=winner.team
    main.style.backgroundColor =winner.secondary
    body.style.backgroundColor= winner.primary
    fname.innerHTML=winner.fullName
    captain.innerHTML=winner.captain
})
