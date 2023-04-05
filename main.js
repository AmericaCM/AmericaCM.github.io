let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2000)
  .typeString('<span style="color: #c5448f;"> Estudiante de Ingenieria en Mecatronica en la UPA.</span>')
  .pauseFor(500)
  .deleteChars(10)
  .start();
