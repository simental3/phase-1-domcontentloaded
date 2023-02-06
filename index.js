// The JavaScript DOMContentLoaded Event Lab

// Event Listener
document.addEventListener("DOMContentLoaded", function(){
    updateDOM();
})


function updateDOM(){
    document.getElementById("text").textContent = "This is really cool!"
}