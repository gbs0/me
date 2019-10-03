function docReady(e) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        console.log("I'm a true statement");
        docReady(function() {
  			  // DOM is loaded and ready for manipulation here
    			console.log("DOM is ready!");
    			setTimeout(e, 2);
				});
        // setTimeout(e, 1);
    } else {
        document.addEventListener("DOMContentLoaded", e);
        console.log("I'm a false statement");
    }
}  

docReady(function() {
    // DOM is loaded and ready for manipulation here
    console.log("DOM is ready!");
});
