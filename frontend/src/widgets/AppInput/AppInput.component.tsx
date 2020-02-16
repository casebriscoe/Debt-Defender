import React from 'react'
import "./AppInput.component.css"
import {
    IonInput,
    IonItem,
    IonLabel,
} from '@ionic/react';


export default function AppInputComponent({
    label,
    onChange,
    value
}) {
    return (
        <IonItem className="app-input-box" lines="inset">
            <IonLabel position="floating">{label}</IonLabel>
            <IonInput
                value={value}
                onIonChange={({detail: {value}}) => onChange(value)}
            >
            </IonInput>
        </IonItem>
    )
}
