(function(w) {
  w.onload = function() {
    console.log("la pagina se cargo");
    fetch("http/swapi.co/api/planets/1/")
      .then(res => res.json())
      .then(resul => console.log(resul));
  };
}.call(window));
