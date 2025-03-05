function mostrarVentana(seccion, contenido) {
    const ventana = document.getElementById("ventanaEmergente");
    const contenidoVentana = document.getElementById("contenidoVentana");
    const formularioContacto = document.getElementById("formularioContacto");
    
    if (seccion === "contacto") {
        formularioContacto.style.display = "block";
        contenidoVentana.innerHTML = "";
    } else {
        formularioContacto.style.display = "none";
        contenidoVentana.innerHTML = `<p>${contenido}</p>`;
    }
    
    ventana.style.display = "block";
}

function cerrarVentana() {
    document.getElementById("ventanaEmergente").style.display = "none";
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

// Ajustar los botones centrados a la izquierda de forma horizontal
document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector("nav ul");
    if (nav) {
        nav.style.display = "flex";
        nav.style.justifyContent = "flex-start";
        nav.style.alignItems = "center";
        nav.style.gap = "10px";
    }
});
