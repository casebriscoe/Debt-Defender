import React from 'react'
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonLabel } from '@ionic/react'

export default function DebtDetailsCardComponent({
    children,
    title,
    subtitle = ""
}) {
    return (
        <IonCard  className="app-card">
            <IonCardHeader>
                {(title || subtitle) && <IonItem lines="none">
                    {title &&
                        <IonLabel slot="start">
                            {title}
                        </IonLabel>
                    }
                    {subtitle &&
                        <IonLabel >
                            {subtitle}
                        </IonLabel>
                    }
                </IonItem>
                }
            </IonCardHeader>

            <IonCardContent no-padding>
                {children}
            </IonCardContent>
        </IonCard>
    )
}
