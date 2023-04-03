AFRAME.registerComponent("player-movement", {
    init: function () {
      this.walk();
    },
    walk: function () {
      window.addEventListener("keydown", (e) => {
        // Añadir la condición para reproducir sonido
        if(e.key === "ArrowUp" || e.key === "ArrowDown" || e.key === "ArrowLeft" || e.key === "ArrowRight"){
          var sonido = document.querySelector("#sound2")
          sonido.components.sound.playSound()
        }


      });
    },
  });


  
