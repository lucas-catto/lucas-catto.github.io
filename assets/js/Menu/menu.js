
function menu () {
    
    let items = document.getElementById("items");
 
    if (items.style.display == "flex") {
        items.style.display = "none";
    }
    else {
        items.style.display = "flex";
    }
}
