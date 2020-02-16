import React from 'react';
import {
    IonInput,
    IonItem,
    IonLabel,
    IonCheckbox,
    IonIcon,
    IonButton,
} from '@ionic/react';

import { pencil } from 'ionicons/icons';
import './AppInputCheckbox.component.css';

export default function AppInputCheckboxComponent({
    label
}) {
    return (
        <div className="app-input-checkbox">
            <div className="checkbox">
                <IonCheckbox />
            </div>

            <div className="label">
                <IonLabel>{label}</IonLabel>
            </div>

            <div className="input">
                <span>$</span> <IonInput />
            </div>

            <div className="icon">
                <IonButton fill="clear" size="small" color="primary" >
                    <IonIcon icon={pencil} color="dark" slot="icon-only" />
                </IonButton>
            </div>
        </div>
    )
}
