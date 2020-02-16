import React from 'react';
import {  
    IonSelect, 
    IonSelectOption, 
    IonItem,
    IonLabel
} from '@ionic/react';


interface Props {
    options: {
        value: string,
        label: string
    }[];
    label?: string
}

export default function AppSelectComponent(props: Props) {
    
    const {
        options,
        label
    } = props;

    return (
    <IonItem>
        {label && <IonLabel>Gender</IonLabel> }
        <IonSelect placeholder="Select One">
            {options.map(({value, label}) => (
                <IonSelectOption value={value}>{label}</IonSelectOption>
            ))}
        </IonSelect>
      </IonItem>
    )
}
