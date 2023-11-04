import React from 'react'
import UnitContainer from './UnitContainer'

export default function LearnTab() {
    return (
        <div className='space-y-6 py-8'>
            <UnitContainer title="Unidad 1: Básicos" color="purple-400" />
            <UnitContainer title="Unidad 2: Condicionales" />
            <UnitContainer title="Unidad 3: Ciclos" color="purple-400" />
            <UnitContainer title="Unidad 4" />
            <UnitContainer title="Unidad 5" />
        </div>
    )
}
