import React from "react";
import UnitContainer from "./UnitContainer";
import ImageWithTitle from "./ImageWithTitle";
import TestUnitContainer from "./TestComponents/TestUnitContainer";

export default function LearnTab() {
  return (
    <div className="space-y-6 py-8">
      <TestUnitContainer
        title="Unidad 1: Básicos"
        unidad={1}
        color="bg-green-500"
        description={
          "Descubrir los componentes esenciales y palabras claves de esta unidad"
        }
        content={
          <div>
            ¡Hola viajero! 🚗💨 Hoy aprenderemos sobre los movimientos
            esenciales en tu vehículo. ¡Listo para la aventura? 🌍{" "}
            <p>
              1. ¡<b>Avanzar</b>! 🚀
            </p>
            Presiona el pedal y avanza con este movimiento. Cada kilómetro es un
            logro en tu recorrido.{" "}
            <p>
              2. ¡Gira a la <b>izquierda</b>! 🔄
            </p>{" "}
            Haz el giro izquierdo como un héroe en las curvas. Explora nuevas
            rutas y destinos emocionantes.
            <p>
              3. ¡Gira a la <b>derecha</b>! 🔄
            </p>{" "}
            La derecha te lleva a descubrimientos sorprendentes. Abraza el giro
            y encuentra tesoros en tu camino. ¡Recuerda estos movimientos clave
            y convierte tu viaje en una emocionante lección! 🛣️🌟
          </div>
        }
        imageSrc={
          "https://media.istockphoto.com/id/1414384384/es/foto/el-render-3d-del-coche-viaja-con-accesorios-de-playa-concepto-de-verano.webp?s=1024x1024&w=is&k=20&c=1P6LjS1gOiqjUWSBP-Fv1tM1XH0W3JC2NBDLrcxR6Mg="
        }
        tipImage={
          "https://cdn.pixabay.com/photo/2016/04/09/07/55/one-way-street-1317585_960_720.jpg"
        }
        tipContent={
          "¡No olvides que puedes arrastrar tus movimientos para reorganizarlos!"
        }
        videoId="jNQXAC9IVRw"
      />
      <TestUnitContainer
        unitNumber={2}
        title="Unidad 2: Condicionales"
        color="bg-purple-400"
        unidad={2}
        description={
          "Ahora tendrás que tener en cuenta semáforos en tu recorrido"
        }
        content={
          <div>
            ¡Hola viajero! 🚦🕰️ En el camino, a veces nos encontramos con
            semáforos, ¡una lección de paciencia! 🌈{" "}
            <p>
              1. <b>Esperar</b> en el semáforo 🛑:
            </p>{" "}
            Cuando la luz roja brilla, es momento de <b>detenerse</b> con el
            boton de Observar. La paciencia es la llave mientras esperas tu
            turno.{" "}
            <p>
              2. ¡Verde, <b>avanza</b>! 🟢:
            </p>{" "}
            Cuando el semáforo cambia a verde, es tu momento. ¡<b>Avanza</b> con
            confianza hacia tu destino! Recuerda, incluso cuando esperas, cada
            luz cambia y te acerca un paso más a tu meta. 🚗💨 ¡Mantén la calma
            y disfruta del viaje! 🌟
          </div>
        }
        imageSrc={
          "https://media.istockphoto.com/id/1414384384/es/foto/el-render-3d-del-coche-viaja-con-accesorios-de-playa-concepto-de-verano.webp?s=1024x1024&w=is&k=20&c=1P6LjS1gOiqjUWSBP-Fv1tM1XH0W3JC2NBDLrcxR6Mg="
        }
        tipImage={
          "https://media.istockphoto.com/id/1432690920/es/foto/pixel-hand-cursor-mascot-person-character-with-traffic-green-light-renderizado-3d.jpg?s=1024x1024&w=is&k=20&c=N5CtjzPwJIG7U1GleICYiJYj4ueycJqELH5TKJaijfo="
        }
        tipContent={
          "Para esperar un semáforo, puedes agregar la instrucción de Observar. ¡Usa la instrucción de Avanzar en el momento adecuado!"
        }
      />
    </div>
  );
}
