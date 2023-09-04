const input = document.getElementById("wordCountInput");

input.addEventListener("input", function() {
    if (input.value > 100) {
        input.value = 100;
    }
});