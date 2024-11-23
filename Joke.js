function getJoke() {
    // Fetch data from the API (Official Joke API)
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())  // Convert the response to JSON
        .then(data => {
            // Get the joke and display it
            const joke = `${data.setup} - ${data.punchline}`;
            document.getElementById('joke').textContent = joke;
        })
        .catch(error => {
            // Handle any errors that occur during the fetch operation
            console.error('Error fetching joke:', error);
            document.getElementById('joke').textContent = 'Oops! Something went wrong.';
        });
}