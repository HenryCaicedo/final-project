import React from "react";
import UnitContainer from "./UnitContainer";

export default function LearnTab() {
  return (
    <div className="space-y-6 py-8">
      <UnitContainer
        title="Unidad 1: Básicos"
        color="purple-400"
        description={
          <div>
            <div className="text-3xl">Unidad 1: Basicos</div>
            <div>
              El contenido de la unidad está enfocado en enseñar las bases de
              los conceptos.
            </div>
          </div>
        }
      />
      <UnitContainer title="Unidad 2: Condicionales" />
      <UnitContainer title="Unidad 3: Ciclos" color="purple-400" />
      <UnitContainer title="Unidad 4" />
      <UnitContainer title="Unidad 5" />
    </div>
  );
}
