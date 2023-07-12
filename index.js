let button=document.querySelector('.btn')

let changecolor=()=>{
    let random_num=Math.floor(Math.random()*16777215)
    let random_color='#'+random_num.toString(16)
    document.body.style.backgroundColor=random_color
    
}

button.addEventListener('click', changecolor)