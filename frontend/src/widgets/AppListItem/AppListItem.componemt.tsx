import React from 'react'
import { IonItem, IonLabel } from '@ionic/react'

export default function AppListItemComponemt({
    title,
    subtitle
}) {
    return (
        <IonItem>
            <IonLabel>{title}</IonLabel>
            <p>{subtitle}</p>
        </IonItem>
    )
}
