import React from 'react';
import "./AppButton.component"
// import { add } from 'ionicons/icons'


import {
    IonButton,
    IonIcon,
    IonContent,


} from '@ionic/react';


export default function AppButtonComponent({
    children
}) {
    return (
        <IonButton fill="clear">
            {children}
            <IonIcon name="chevron-forward" slot="end" />
        </IonButton>

    )
}
