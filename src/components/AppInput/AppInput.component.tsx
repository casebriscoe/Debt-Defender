import React from 'react'
import { 
    IonInput, 
    IonItem, 
    IonLabel,    
} from '@ionic/react';


export default function AppInputComponent({
    label
}) {
    return (
    <IonItem>
        <IonLabel>{label}</IonLabel>
        <IonInput></IonInput>
      </IonItem>
    )
}
