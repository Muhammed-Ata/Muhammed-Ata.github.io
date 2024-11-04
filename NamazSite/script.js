document.getElementById("userInput").addEventListener("input", function() {
    const input = this.value.toLowerCase();
    const responseDiv = document.getElementById("response");
    
    if (input === "hello") {
        responseDiv.textContent = "hello, how are you today";
    } else {
        responseDiv.textContent = "";
    }
});
