import React from 'react'
import { IonHeader, IonContent } from '@ionic/react'
import AppNavBarComponent from '../../widgets/NavBar/AppNavBar.component'

export default function StudentFormComponent() {
    return (
        <React.Fragment>
            <IonHeader>
                <AppNavBarComponent />
            </IonHeader>
            <IonContent>

                <h4>
                    color: primary;
                    Please provide personal info
                 </h4>
            </IonContent>
        </React.Fragment>
    )
}
