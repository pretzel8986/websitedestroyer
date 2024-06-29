document.addEventListener('keydown', function (e) {
    // Function to select a random element from an array
    function getRandomElement(array) {
        // Generate a random index
        const randomIndex = Math.floor(Math.random() * array.length);
        // Use array destructuring to directly extract the random element
        const randomElement = array[randomIndex];
        randomElement.remove()
    }
    const randomItem = getRandomElement(Array.from(document.body.children));
});