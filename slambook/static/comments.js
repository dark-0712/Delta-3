`use strict`
document.addEventListener('DOMContentLoaded',setup)
let clickingEnabled = false;
function setup() {
    let addcomment= document.querySelector('addnew');
    addcomment.forEach(element => {
        element.style.backgroundColor='yellow'
        element.addEventListener('click',evt =>{
            if(clickingEnabled){
                clickTile(evt)
            }
        })
    });
};