window.addEventListener("load", function() {
    // Simulate a 4-second loading time
    setTimeout(function() {
        // Hide loading screen
        const loadingScreen = document.getElementById("loadingScreen");
        loadingScreen.style.opacity = 0;

        // Show content with fade-in effect
        const content = document.getElementById("content");
        content.style.display = "block";
        content.classList.add("fade-in", "active");

        // Allow content overflow after loading
        document.body.style.overflow = "visible";

        // Enable pointer events on navbar and other clickable elements
        const clickableElements = document.querySelectorAll(".navbar *, .clickable-elements *");
        clickableElements.forEach(function(element) {
            element.style.pointerEvents = "auto";
        });

        // Enable pointer events on individual content elements
        const contentElements = document.querySelectorAll("#content *");
        contentElements.forEach(function(element) {
            element.style.pointerEvents = "auto";
        });

        // Debugging: Log a message to the console
        console.log("Page loaded successfully!");
    }, 3000); // 4000 milliseconds (4 seconds)
});

