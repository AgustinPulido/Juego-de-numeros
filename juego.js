function numeromisterioso() {
    numero_secreto = Math.random() * 100;
    numero_secreto = parseInt(numero_secreto);
    console.log(numero_secreto);
    mensaje = nombre1.value + " ingresa un numero e intenta adivinar el número secreto";
    while (true) {
        numero_del_usuario = prompt(mensaje, "0");
        numero_del_usuario = parseInt(numero_del_usuario);
        if (numero_del_usuario === numero_secreto) {
            alert("Adivinaste el número secreto!!!");
            break;
        } else if (numero_del_usuario === 0) {
            break;
        } else if (numero_del_usuario > numero_secreto) {
            mensaje = "El numero ingresado es mayor al numero mágico";
        } else if (numero_del_usuario < numero_secreto) {
            mensaje = "El numero ingresado es menor al numero mágico";
        } else {
            mensaje = "Has ingresado un número inválido. Ingresa un número entero del 1 al 100."
        }
    }
}