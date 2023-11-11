import React from "react";
import UnitContainer from "./UnitContainer";
import ImageWithTitle from "./ImageWithTitle";

export default function LearnTab() {
  return (
    <div className="space-y-6 py-8">
      <UnitContainer
        title="Unidad 1: Básicos"
        color="purple-400"
        description={
          "Descubrir los componentes esenciales y palabras claves de esta unidad"
        }
        content={
          <div>
            ¡Hola viajero! 🚗💨 Hoy aprenderemos sobre los movimientos
            esenciales en tu vehículo. ¡Listo para la aventura? 🌍 1. ¡Avanzar!
            🚀 Presiona el pedal y avanza. Cada kilómetro es un logro en tu
            recorrido. 2. ¡Gira a la izquierda! 🔄 Haz el giro izquierdo como un
            héroe. Explora nuevas rutas y destinos emocionantes. 3. ¡Gira a la
            derecha! 🔄 La derecha te lleva a descubrimientos sorprendentes.
            Abraza el giro y encuentra tesoros en tu camino. ¡Recuerda estos
            movimientos clave y convierte tu viaje en una emocionante lección!
            🛣️🌟
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
      />
      <UnitContainer title="Unidad 2: Condicionales" />
      <UnitContainer title="Unidad 3: Ciclos" color="purple-400" />
      <UnitContainer title="Unidad 4" />
      <UnitContainer title="Unidad 5" />
    </div>
  );
}
