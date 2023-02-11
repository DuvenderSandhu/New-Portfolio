let body= document.body

body.querySelector('.ham').addEventListener('click',()=>{
    let secul=body.querySelector('.sec-nav ul')
    if(secul.style.display!="flex"){
        secul.style.display="flex"
    }
    else{
        secul.style.display="none"
    }
})