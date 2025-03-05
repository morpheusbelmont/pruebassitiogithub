<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST["nombre"]);
    $email = htmlspecialchars($_POST["email"]);
    $mensaje = htmlspecialchars($_POST["mensaje"]);
    
    $destinatario = "atila@utp.edu.co";
    $asunto = "Nuevo mensaje de contacto";
    $contenido = "Nombre: $nombre\nCorreo: $email\nMensaje: $mensaje";
    $cabeceras = "From: $email";
    
    if (mail($destinatario, $asunto, $contenido, $cabeceras)) {
        echo "¡Mensaje enviado con éxito!";
    } else {
        echo "Error al enviar el mensaje.";
    }
}
?>
