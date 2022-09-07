import React from 'react'
import { capitalizeFirstLetter } from '../../../../utils/stringManipulation'
import './styles.css'

interface TooltipProps {
    title: string;
    unit: string;
    active?: boolean;
    payload?: any;
    label?: string;
}

function Tooltip({ title, unit, active, payload, label }: TooltipProps) {
    if (active) {
        return (
            <div className='tooltip'>
                <h3>
                    {label && capitalizeFirstLetter(label)}
                </h3>
                <p>
                    {unit}{payload && payload[0].value} {title ? title : ''}
                </p>
            </div>
        )
    }
    return null;
}

export default Tooltip