function mostrarVentana(seccion, contenido) {
    const ventana = document.getElementById("ventanaEmergente");
    const contenidoVentana = document.getElementById("contenidoVentana");
    const formularioContacto = document.getElementById("formularioContacto");
    
    if (ventana) {
        if (seccion === "contacto") {
            formularioContacto.style.display = "block";
            contenidoVentana.innerHTML = "";
        } else {
            formularioContacto.style.display = "none";
            contenidoVentana.innerHTML = `<p>${contenido}</p>`;
        }
        
        ventana.style.display = "flex";
    }
}

function cerrarVentana() {
    const ventana = document.getElementById("ventanaEmergente");
    if (ventana) {
        ventana.style.display = "none";
    }
}

// Envío del formulario con AJAX
const form = document.getElementById("contactForm");
if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const formData = new FormData(form);
        
        fetch("contacto.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            document.getElementById("formMessage").innerText = data;
            form.reset();
        })
        .catch(error => {
            document.getElementById("formMessage").innerText = "Hubo un error al enviar el mensaje.";
        });
    });
}
