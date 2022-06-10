let input = document.querySelector('#input');
let add = document.querySelector('#add');
let clearAll = document.querySelector('#clear');
let todoAll = document.querySelector('#todo-section');




add.onclick = function(){
    if(!input.value){
        alert('Enter your notes')
    } else{
        
        let todoinput = document.createElement('div');
        todoinput.classList.add('todo-input');
        todoAll.append(todoinput);

        let left = document.createElement('div');
        left.classList.add('left');
        todoinput.appendChild(left);

        let secinput = document.createElement('input');
        secinput.classList.add('sec-input');
        secinput.type = 'checkbox';
        left.appendChild(secinput);

        let textp = document.createElement('p');
        textp.classList.add('text-p');
        left.appendChild(textp);
        textp.innerText = input.value;

        let right = document.createElement('div');
        right.classList.add('right');
        todoinput.appendChild(right);

        let icon = document.createElement('button');
        icon.classList.add('delete');
        icon.innerText= "❌";
        right.appendChild(icon);

        input.value = '';

        icon.addEventListener('click', ()=> {
            todoAll.removeChild(todoinput)
        })

        clearAll.addEventListener('click', ()=>{
            document.querySelector('.container2').removeChild(todoAll)
            location.reload()
        })

    }
}

input.addEventListener('keydown', (e)=>{
    if(e.keyCode == 13){
        add.click();
        
    }
})

clearAll.addEventListener('keydown', (e)=> {
    if(e.keyCode == 127){
        todoAll.removeChild();
    }
})

clearAll.addEventListener('click', ()=>{
    
})