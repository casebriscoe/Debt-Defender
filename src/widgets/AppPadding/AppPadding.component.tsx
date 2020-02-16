import "./AppPadding.component.css"
import React from 'react'

interface Props {
    children: any;
    padding?: number;
}

export default function AppPaddingComponent(props: Props) {

    const {
        children,
        padding = 16
    } = props;

   

    return (
        <div style={{padding: padding + "px"}}>
            { children }
        </div>
    )
}
