let $ = data => document.querySelector(data);

let div = $('div');

let num = true;


div.addEventListener('click', () =>{
    if(num){
    div.style.bottom = '90px';
    num = false;
    }else{
        div.style.bottom = '170px';
        num = true;
    }
})