const displayJokes = document.getElementById("display-joke");
const newJoke = document.getElementById("getJoke");

const requestUrl = "https://api.chucknorris.io/jokes/random";

function getNewJoke() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", requestUrl);
  xhr.onreadystatechange = function () {
    //   console.log(xhr.readyState);
    if (xhr.readyState === 4) {
      const data = JSON.parse(this.responseText);
      //   console.log(data.value);
      displayJokes.innerText = data.value;
    }
  };
  xhr.send();
}

newJoke.addEventListener("click", () => {
  displayJokes.innerText = "Getting new Joke.....";
  getNewJoke();
});
