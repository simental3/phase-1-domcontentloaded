// The JavaScript DOMContentLoaded Event Lab Notes

/*
2 important milestones in terms of page load:
    1. The DOMContentLoaded event fires when your page's DOM is fully parsed from the underlying html
    2. The load event fires when a resource and all its dependent resources (including CSS and JavaScript) have finished loading
*/


// I. My Solution:

// (Before): <p id="text">JavaScript is so cool. It lets me add text to my page programmatically.</p>

// DOMContentLoaded Event Listener that detects when the HTML page has loaded & the document is ready to be manipulated:
document.addEventListener("DOMContentLoaded", function(){
    updateDOM();
})


// uses the event's callback function to target the paragraph element with id="text" & replaces the text with "This is really cool"
function updateDOM(){
    document.querySelector("#text").textContent = "This works too!";
}

// (After) LOG: <p id="text">This works too!</p>


// other solution:
function updateDOM(){
    document.getElementById('text').textContent = "This is really cool!";
}





// II. Lab Solution:
document.addEventListener("DOMContentLoaded", function(){
    updateDOM();
})

function updateDOM(){
    document.getElementById("text").innerHTML = "This is really cool!";
}








// III. Lesson Notes:

// addEventListener takes a string with the name of the event & a callback function:
document.addEventListener("DOMContentLoaded", function(){           
    console.log("The DOM has loaded");                              // "The DOM has loaded" will not be logged immediately 
});                                                                 // you can confirm this yourself by putting a 2nd console.log() outside of the event listener callback

console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered"); 
// LOG: This console.log() fires when index.js loads - before DOMContentLoaded is triggered
//      The DOM has loaded