import React from 'react'
import { IonHeader, IonContent, IonInput, IonSlides, IonSlide } from '@ionic/react'
import AppNavBarComponent from '../../widgets/NavBar/AppNavBar.component'
import "./StudentForm.component.css"
import AppInputComponent from '../../widgets/AppInput/AppInput.component'
import AppPaddingComponent from '../../widgets/AppPadding/AppPadding.component'
import AppButtonComponent from '../../widgets/AppButton/AppButton.component'

const slideOpts = {
    initialSlide: 0
};

export default function StudentFormComponent({
    onSubmit
}) {
    return (
        <React.Fragment>
            <IonHeader>
                <AppNavBarComponent />
            </IonHeader>
            <IonContent>

                <AppPaddingComponent className="form-container" padding={20}>
                    {/* slider  */}
                    <IonSlides options={slideOpts}>
                        <IonSlide>
                            <div className="personal-info">
                                <h4 id="info-prompt">
                                    Please provide personal info
                                </h4>
                                <AppInputComponent label="Name..." />
                                <AppInputComponent label="Expected income (yearly)..." />
                                <AppInputComponent label="Scholarships (yearly)..." />

                                <div className="actions">
                                    <AppButtonComponent >
                                        Next
                                    </AppButtonComponent>
                                </div>

                            </div>
                        </IonSlide>
                        <IonSlide>
                            <div className="student-info">
                                <h4 id="info-prompt">
                                    Please provide student information
                                </h4>
                                <AppInputComponent label="School Name" />
                                <AppInputComponent label="Residency Status" />
                                <AppInputComponent label="Total Semester" />
                                <AppInputComponent label="Enrollment Status" />

                                <div className="actions">

                                </div>
                            </div>
                        </IonSlide>
                    </IonSlides>
                    {/* slider */}
                </AppPaddingComponent>
            </IonContent>
        </React.Fragment>
    )
}
