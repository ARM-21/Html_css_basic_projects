let arrow = document.getElementsByClassName('drop-down-header');
let firstSectionBorder = document.getElementsByClassName('drop-down-header');
let arrow_img = document.getElementsByClassName('arrow_down')
let dropDown_items = document.getElementsByClassName('dropDown_items')[0];
var tager = 0;
Array.from(arrow).forEach((ele)=>{ ele.addEventListener('click',(e)=>{
    if(e.target.classList == "svg_par" ){
        e.target.parentElement.nextElementSibling.classList.toggle('dropDown_items_open');
        e.target.classList.toggle('rotateArrow');
    }
    
else if(e.target.classList == 'path_aja'){
    e.target.parentElement.classList.toggle('rotateArrow');
    e.target.parentElement.parentElement.nextElementSibling.classList.toggle('dropDown_items_open');
}
    else if(e.target.classList.contains('drop-down-header')){
        e.target.firstElementChild.nextElementSibling.classList.toggle('rotateArrow')

        e.target.nextElementSibling.classList.toggle('dropDown_items_open');
    if(e.target.style.borderRadius==""){
    e.target.style.borderRadius="10px 10px 0 0";
    }
    else{
        e.target.style.borderRadius="";
    }
}
tager=e.target;
})
})