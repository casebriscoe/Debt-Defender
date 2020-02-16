import React from 'react'
import { IonThumbnail, IonImg } from '@ionic/react';
import './DebtDetailsImage.component.css'

export default function DebtDetailsImageComponent({
    src
}) {
    return (
        <IonThumbnail className="details-image">
            <IonImg src={src} />
        </IonThumbnail>
    )
}
