import React from 'react';
import {
    IonInput,
    IonLabel,
    IonCheckbox,
    IonIcon,
    IonButton,
} from '@ionic/react';

import { pencil } from 'ionicons/icons';
import './AppInputCheckbox.component.css';

export default function AppInputCheckboxComponent({
    label,
    checked,
    value,
}) {
    return (
        <div className="app-input-checkbox">
            <div className="checkbox">
                <IonCheckbox checked={checked} />
            </div>

            <div className="label">
                <IonLabel>{label}</IonLabel>
            </div>

            <div className="input">
                <span>$</span> <IonInput value={value}/>
            </div>

            <div className="icon">
                <IonButton fill="clear" size="small" color="primary" >
                    <IonIcon icon={pencil} color="dark" slot="icon-only" />
                </IonButton>
            </div>
        </div>
    )
}
