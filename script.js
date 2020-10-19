document.getElementById("getJoke").addEventListener("click", function(event) {
  event.preventDefault();
  //const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=8911d57336bb270ab17096a4dc6a588a";
  const url = "https://sv443.net/jokeapi/v2/joke/Programming?type=single";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      //console.log(json);
      let results = "";
      results += json.joke;
      document.getElementById("jokeResults").innerHTML = results;
    });

});
