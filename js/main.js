document.addEventListener('keydown', function(event){
    if(event.key.toLowerCase() ==  'r'){
        document.body.style.background = 'red'
    }else if (event.key.toLowerCase() == 'g'){
        document.body.style.background = 'green'
    }else if (event.key.toLowerCase() == 'b'){
        document.body.style.background = 'blue'
    }
})

document.addEventListener('keyup', function(event){
    document.body.style.background = '#ffffff'
})

let box = document.querySelector('.box')
document.addEventListener('keydown', function(event){
    if(event.key.toLowerCase() == 'w'){
        box.style.top = (box.offsetTop - 1) + "px"
    }else if (event.key.toLowerCase() == 'd'){
        box.style.left = (box.offsetTop + 1) + "px"
    }else if (event.key.toLowerCase() == 's'){
        box.style.top = (box.offsetTop + 1) + "px"
    }else if (event.key.toLowerCase() == 'a'){
        box.style.left = (box.offsetTop - 1)
    }
})
