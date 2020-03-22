
(function(w) {
  let personaje = document.getElementById('personaje');
  let personaje2 = document.getElementById('personaje2');

  w.onload = function() {
    console.log("la pagina se cargo");
    fetch("https://swapi.co/api/people/2")
      .then(res => res.json())
      .then(resul =>{
        personaje.style.display ='none';
        personaje2.innerHTML=resul.name;

      } );
  };
}.call(null, window));
