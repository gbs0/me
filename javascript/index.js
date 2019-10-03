function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        // console.log("I'm a true statement");
        // setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
        console.log("I'm a false statement");
    }
}  

docReady(function() {
    // DOM is loaded and ready for manipulation here
    console.log("DOM is ready!");
});
