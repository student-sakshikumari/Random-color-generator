 function getRandomColor(){
        return "#" + Math.floor(Math.random()*16777215).toString(16);
    }
 const parent=document.getElementById('parent');
 

 parent.addEventListener('click',(e)=>{
    const child=e.target;
    child.style.color=getRandomColor();
    const body=document.querySelector('body');
    body.style.backgroundColor=child.id;
    
 });