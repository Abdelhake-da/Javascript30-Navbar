function show(){
    let element = document.getElementById('myDropdown');
    if(element.classList.contains('hide')){
        element.classList.remove("hide");
    }
}
function show1(){
    let element = document.getElementById('myDropdown1');
    if(element.classList.contains('hide')){
        element.classList.remove("hide");
        hide_side();
    }
}
function show_side(){
    let element = document.getElementById('side-bar-list');
    if(element.classList.contains('hide')){
        element.classList.remove("hide");
    }else{
        hide_side();
    }
}
function hide_side(){
    let element = document.getElementById('side-bar-list');
    element.classList.add('hide');
    

}
window.onclick= function(event){
    if(!event.target.matches('.dropbtn')){
        var dropdowns = document.getElementsByClassName("dropdown-content");
        
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (!openDropdown.classList.contains('hide')) {
                openDropdown.classList.add('hide');
            }
            
        }
    }
    if(!event.target.matches('.dropbtn-s')){
        var dropdowns1 = document.getElementsByClassName("dropdown-content1");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown1 = dropdowns1[i];
            if (!openDropdown1.classList.contains('hide')) {
                            openDropdown1.classList.add('hide');
                        }
        }
    }
}
   
