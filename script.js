

    let btnEncriptar=document.getElementById('btn-encriptar');
    let btnDesencriptar=document.getElementById('btn-desencriptar');
    let valorEntrada=document.getElementById('input-texto');
    let valorSalida=document.getElementById('msg');
    const input = document.getElementById("input-texto");
    const output = document.getElementById("msg"); 

    input.addEventListener("input", function() {
      input.value = input.value.replace(/[^A-Za-z \r\n¡!¿?.,;:]/g, '');
      input.value = input.value.toLowerCase();
  });

    function encriptar(){
      const a = /a+/g;
      const e = /e+/g;
      const i = /i+/g;
      const o = /o+/g;
      const u = /u+/g;
      
       event.preventDefault(); //Impide que la pagina se recargue por forra y te muestra el resultado
        if  (valorEntrada.value.length > 0){
          let cadena = valorEntrada.value;
          cadena = cadena.replace(e, 'enter');
          cadena = cadena.replace(i, 'imes');
          cadena = cadena.replace(a, 'ai');
          cadena = cadena.replace(o, 'ober');
          cadena = cadena.replace(u, 'ufat');
          valorSalida.textContent = cadena;
          console.log(cadena);
        }else{
          alert("No se puede encriptar un mensaje vacío");
          
        }
    
    }

    
    function desencriptacion(){
      const ai = /ai/g;
      const enter = /enter/g;
      const imes = /imes/g;
      const ober = /ober/g;
      const ufat = /ufat/g;
      event.preventDefault(); //Impide que la pagina se recargue por forra y te muestra el resultado
      let cadena=valorEntrada.value;
      if (valorEntrada.value.length > 0){       
      
      cadena = cadena.replace(ufat, 'u');
        cadena = cadena.replace(ober, 'o');
        cadena = cadena.replace(ai, 'a');
        cadena = cadena.replace(imes, 'i');
        cadena = cadena.replace(enter, 'e');
        valorSalida.textContent = cadena;
      
      }else{
        alert("No se puede desencriptar un mensaje vacío");
      }
  
      }
      function copy() {
        var copyText = document.querySelector("#msg");
        copyText.select();
        document.execCommand("copy");
    }
    
    document.querySelector("#btn-copy").addEventListener("click", copy);
    btnEncriptar.addEventListener('click', encriptar);
    btnDesencriptar.addEventListener('click', desencriptacion); 
