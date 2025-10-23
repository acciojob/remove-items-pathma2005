function removecolor(){
    let select=document.getElementById("colorSelect");
    let selectedIndex=select.selectedIndex;
    if(selectedIndex!==-1){
        select.remove(selectedIndex);
    }
}
document.querySelector("input[type='button']").addEventListener("click",removecolor);