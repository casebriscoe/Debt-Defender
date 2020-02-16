import React from 'react'
import { IonHeader, IonContent, IonInput, IonSlides, IonSlide } from '@ionic/react'
import AppNavBarComponent from '../../widgets/NavBar/AppNavBar.component'
import "./StudentForm.component.css"
import AppInputComponent from '../../widgets/AppInput/AppInput.component'
import AppPaddingComponent from '../../widgets/AppPadding/AppPadding.component'
import AppButtonComponent from '../../widgets/AppButton/AppButton.component'

const slideOpts = {
    initialSlide: 1,
    speed: 400
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

                <AppPaddingComponent padding = {20}>
                   
                    
                         {/* slider  */}
                            <IonSlides pager={true} options={slideOpts} mode={"ios"}>
                            <IonSlide>
                                    <div>
                                         <h4 id="info-prompt">
                                     Please provide personal info
                                        </h4>
                                        <AppInputComponent label="Name..."/>
                                        <AppInputComponent label="Expected income (yearly)..."/>
                                        <AppInputComponent label="Scholarships (yearly)..."/>
                                        <AppButtonComponent/>
                                      </div>
                            </IonSlide>
                            <IonSlide>
                                <h1>Slide 2</h1>
                            </IonSlide>
                            <IonSlide>
                                <h1>Slide 3</h1>
                            </IonSlide>
                            </IonSlides>
                        {/* slider */}
                </AppPaddingComponent>

            </IonContent>
        </React.Fragment>
    )
}
