import React from 'react'
import "./AppInput.component.css"
import { 
    IonInput, 
    IonItem, 
    IonLabel,    
} from '@ionic/react';


export default function AppInputComponent({
    label
}) {
    return (
    <IonItem className="app-input-box" lines="inset">
        <IonLabel  position="floating">{label}</IonLabel>
        <IonInput></IonInput>
      </IonItem>
    )
}
