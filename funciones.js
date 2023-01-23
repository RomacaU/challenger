
    function verificarTa(e){   /*encriptar */

        /*alert("persiono una tecla");*/

                    
        /* captura el codigo ascci de la tecla presionada*/
        key=e.keyCode || e.which; 
        /*alert(key)*/

        /*Muestra el valor del caracter digitado*/
        captura=String.fromCharCode(key).toLocaleLowerCase();
        /*alert(captura)*/

        letras="abcdefghijklmnñopqrstuvwxyz";

        especiales="8-32-37-38-46-164";

        

        captura_especiales=false;
        for(var i in especiales){
            
            if(key==especiales[i]){
                captura_especiales=true;
                break;
            }
        }
        

        /* letras.indexOf(captura) 
        devuelve la posicion dentro de la cadena si lo encontro*/
            
        if(letras.indexOf(captura)==-1 && !captura_especiales && key!==32){

            alert("solo letras ... No se reciben numeros")
            return false;

        }
    }


    function encriptar(){
        /*captura el valor visualizado en la caja  */
        /*https://es.stackoverflow.com/questions/113226/llamar-funci%C3%B3n-javascript-desde-html*/
        var texto=(document.getElementById("textoIn").value); 
         /*alert(texto);*/

        if(document.getElementById("textoIn").value=="") {
            alert("No has digitado ningun texto, por favor digita texto a encriptar");
            document.getElementById("textoIn").focus()
            return;            
        }
    
        /*
            La letra "e" es convertida para "enter"
            La letra "o" es convertida para "ober"
            La letra "i" es convertida para "imes"
            La letra "a" es convertida para "ai"
            La letra "u" es convertida para "ufat"
    
        */
        var texten="";
        
        for (var i =0; i<=texto.length; i++){
            var x=texto.charAt(i);
            switch(x) {
                case "e":
                    x="enter"
                    break;
                case "i":
                    x="imes"
                    break;
                case "a":
                    x="ai"
                    break;
                case "o":
                    x="ober"
                    break;
                case "u":
                    x="ufat"
                    break;
                default:
                    break
            }
        
            texten=texten + x;
        }
        alert( texto + " - " + texten );

        document.getElementById("imgDer").style.display="none";
        document.getElementById("texto").style.display="none";
        document.getElementById("textoEn").innerHTML=texten;
        document.getElementById("btn-copiar").style.display="show";
        document.getElementById("btn-copiar").style.display="inherit"
    }

    
    function desencriptar(){

        var texto=(document.getElementById("textoIn").value); 
        var txtLibre=texto.replaceAll("enter","e");
      
        var txtLibre=txtLibre.replaceAll("imes","i");
        var txtLibre=txtLibre.replaceAll("ai","a");
        var txtLibre=txtLibre.replaceAll("ober","o")
        var txtLibre=txtLibre.replaceAll("ufat","u");
        
        
       
        document.getElementById("imgDer").style.display="none";
        document.getElementById("texto").style.display="none";
        document.getElementById("textoEn").innerHTML=txtLibre;
        document.getElementById("btn-copiar").style.display="show";
        document.getElementById("btn-copiar").style.display="inherit";

    }
    function copiar(){

        var info=document.getElementById("textoEn");
        /*alert(document.getElementById("textoEn").value);*/

        /*captura el foco para copiar al portapapeles*/
        info.focus()
        navigator.clipboard.writeText(info.value);

        // Alert the copied text
        alert("texto copiado: " + info.value);
    }