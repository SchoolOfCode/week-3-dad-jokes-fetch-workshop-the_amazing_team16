// Main function to retrieve and display a new joke
async function getAndDisplayNewJoke() {
  const joke = await betterJokes();
  displayJoke(joke);
}

// Function to retrieve a random joke
//Fetch the API
//return the JSON with the joke sting
//feed into the retrieveJoke function

async function betterJokes() {
  const newJokes = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      accept: "application/json",
    },
  });
  const data = await newJokes.json();
  return data;

  //const returnJoke = newJokes.json();
  //const stringJoke = json.stringify(returnJoke)
  //console.log(stringJoke);
}

// Function to update the DOM with the provided joke
function displayJoke(joke) {
  const jokeElement = document.getElementById("joke");
  jokeElement.textContent = joke.joke;
}

// Waits for the DOM to be fully loaded and then displays an initial joke.
document.addEventListener("DOMContentLoaded", getAndDisplayNewJoke);

// Retrieves the "new joke" button
const newJokeButton = document.getElementById("newJokeBtn");

// Sets up a click event listener to fetch and display a new joke upon clicking the newJokeButton.
newJokeButton.addEventListener("click", getAndDisplayNewJoke);
