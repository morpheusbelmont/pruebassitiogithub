document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let formData = new FormData(this);
    fetch("contacto.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("formMessage").textContent = data;
        this.reset();
    })
    .catch(error => {
        console.error("Error al enviar el formulario:", error);
    });
});
