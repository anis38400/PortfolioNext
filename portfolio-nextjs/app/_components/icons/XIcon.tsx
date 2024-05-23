import React from "react"
import { ComponentPropsWithoutRef } from "react"

export const XIcon = (props: ComponentPropsWithoutRef<"svg"> & {size?: number}) => {
    return (
    <svg 
    width={props.size} 
    height={props.size}  
    viewBox="0 0 512 512"
    version="1.1" 
    preserveAspectRatio="xMidYMid"
    {...props}
    >
    <g>
        <path 
        d="M355.904 100H408.832L293.2 232.16L429.232 412H322.72L239.296 302.928L143.84 412H90.8805L214.56 270.64L84.0645 100H193.28L268.688 199.696L355.904 100ZM337.328 380.32H366.656L177.344 130.016H145.872L337.328 380.32Z"
        fill="currentColor">
        </path>
    </g>
</svg>
    )
}