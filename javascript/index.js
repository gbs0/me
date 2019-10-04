function docReady(e) {
    // see if DOM is already available
  if (document.readyState === "complete" || document.readyState === "interactive") {
    // call on next available tick
    console.log("DOM is ready!");
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
