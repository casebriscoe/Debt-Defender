import React from 'react'
import { IonHeader, IonContent, IonInput } from '@ionic/react'
import AppNavBarComponent from '../../widgets/NavBar/AppNavBar.component'
import "./StudentForm.component.css"
import AppInputComponent from '../../widgets/AppInput/AppInput.component'
import AppPaddingComponent from '../../widgets/AppPadding/AppPadding.component'
import AppButtonComponent from '../../widgets/AppButton/AppButton.component'

export default function StudentFormComponent() {
    return (
        <React.Fragment>
            <IonHeader>
                <AppNavBarComponent />
            </IonHeader>
            <IonContent>

                <AppPaddingComponent padding = {20}>
                    <h4 id="info-prompt">
                        Please provide personal info
                    </h4>
                    <AppInputComponent label="Name..."/>
                    <AppInputComponent label="Expected income (yearly)..."/>
                    <AppInputComponent label="Scholarships (yearly)..."/>
                    <AppButtonComponent/>
                </AppPaddingComponent>

            </IonContent>
        </React.Fragment>
    )
}
