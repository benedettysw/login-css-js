function validar(){
    const n1 = document.getElementById("nombre").value;
    const n2 = document.getElementById("clave").value;

    if (n1 === "prueba" && n2 === "123"){
        window.location.href = "welcome.html";
    }else{
        alert("Datos no encontrado")
        document.getElementById('nombre').value="";
        document.getElementById('clave').value="";
    }
}