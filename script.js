const display = document.getElementById('display');
const buttons  = document.getElementsByClassName('button');
const total = document.getElementById('total');
for(const button of buttons){
    button.addEventListener('click',function(e){
    switch(e.target.innerText){
       case ("C"):
           display.innerText = '';
           total.innerText = '00';
           break
           case ('←'):
           display.innerText = display.innerText.slice(0,-1);
           break
           case ('='):
                display.innerText;
                total.innerText = eval(display.innerText)
               
               break
        default:
            display.innerText += e.target.innerText;
    }

     
    })
}