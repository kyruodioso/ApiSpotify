(function(w) {
  w.onload = function() {
    console.log("la pagina se cargo");
    fetch("https://swapi.co/api/planets/1/?format=wookiee")
      .then(res => res.json())
      .then(resul => console.log(resul));
  };
}.call(null, window));
