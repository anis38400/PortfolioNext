import React from "react"
import { ComponentPropsWithoutRef } from "react"

export const NextjsLogo = (props: ComponentPropsWithoutRef<"svg"> & {size?: number}) => {
    return (
    <svg 
    width={props.size} 
    height={props.size}  
    viewBox="0 0 256 256"
    version="1.1" 
    preserveAspectRatio="xMidYMid"
    {...props}
    >
            <g>
                <g mask="url(#mask-2)">
                    {/* Utilisez la couleur actuelle (currentColor) pour le remplissage du cercle */}
                    <circle fill="currentColor" cx="128" cy="128" r="128"></circle> 
                    <path d="M212.6336,224.028444 L98.3352889,76.8 L76.8,76.8 L76.8,179.157333 L94.0282311,179.157333 L94.0282311,98.6788978 L199.109689,234.446222 C203.851378,231.273244 208.368356,227.790222 212.6336,224.028444 Z" fill="currentColor"></path>
                    <rect fill="url(#nextjsLinearGradient-4)" x="163.555556" y="76.8" width="17.0666667" height="102.4"></rect>
                </g>
            </g>
</svg>
    )
}