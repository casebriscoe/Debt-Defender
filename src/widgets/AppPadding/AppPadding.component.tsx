import "./AppPadding.component.css"
import React from 'react'

interface Props {
    children: any;
    padding?: number;
    className?
}

export default function AppPaddingComponent(props: Props) {

    const {
        children,
        padding = 16,
        className = ""

    } = props;

   

    return (
        <div className={className} style={{padding: padding + "px"}}>
            { children }
        </div>
    )
}
