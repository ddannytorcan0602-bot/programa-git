document.addEventListener("DOMContentLoaded", function() {

  // Referencias a los elementos
  const botonIngresar = document.getElementById("ingresar");
  const rol = document.getElementById("rol");
  const usuario = document.getElementById("usuario");
  const contrasena = document.getElementById("contrasena");
  const olvidar = document.getElementById("olvidar");
  const registrarme = document.getElementById("registrarme");

  // --- BOTÓN INGRESAR ---
  botonIngresar.addEventListener("click", function(event) {
    event.preventDefault(); 

    // Validaciones
    if (rol.value === "" || usuario.value.trim() === "" || contrasena.value.trim() === "") {
      alert("Por favor, completa todos los campos antes de continuar.");
      return;
    }

    // Simulación de inicio de sesión
    if (usuario.value === "admin" && contrasena.value === "123456789" && rol.value === "admin") {
      alert("¡Bienvenido, has ingresado con éxito! Redirigiendo al menú principal...");
    } 
    else if (usuario.value === "empleado" && contrasena.value === "123456789" && rol.value === "empleado") {
      alert("¡Bienvenido, has ingresado con éxito! Redirigiendo al menú principal...");
    } 
    else {
      alert("Datos incorrectos. Verifica tu usuario, contraseña o rol.");
    }
  });

  // --- OPCIÓN: OLVIDÉ MI CONTRASEÑA ---
  olvidar.addEventListener("click", function(event) {
    event.preventDefault();
    alert("Se ha enviado un enlace de recuperación a tu correo electrónico registrado 📩");
  });

  // --- OPCIÓN: REGISTRARME ---
  registrarme.addEventListener("click", function(event) {
    event.preventDefault();
    alert("Redirigiendo al formulario de registro... ✏️");
  });

});

