 var opcion = confirm("¿Eres Estudiante del CUVALLES ?")
        var resp;
        var contestado = false

        while (contestado == false) {
            if (opcion == true) {
                resp = prompt("Estudias Tecnologias de la Informacion ?");
                if (resp.toLowerCase() == "si") {
                    alert("Felicidades, estas en la mejor carrera")
                    contestado = true;
                } else if (resp.toLowerCase() == "no") {
                    alert("Uy, te recomiendo que estudies Tecnologias")
                    contestado = true;
                } else {
                    alert("No hiciste caso de contestar con un SI o NO, LEA bien");
                }

            }
            if (opcion == false) {
                alert("Usted no es alumno del CUVALLES, buuuu!!!!!!")
                contestado = true;
            }
        }

        alert("Este Juego lo programo Jesus Emmanuel Santos Chavez")