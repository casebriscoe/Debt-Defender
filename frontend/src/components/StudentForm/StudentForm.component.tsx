import React, { useEffect, useRef } from 'react'
import { IonHeader, IonContent, IonInput, IonSlides, IonSlide, IonButton, IonIcon } from '@ionic/react'
import AppNavBarComponent from '../../widgets/NavBar/AppNavBar.component'
import "./StudentForm.component.css"
import AppInputComponent from '../../widgets/AppInput/AppInput.component'
import AppPaddingComponent from '../../widgets/AppPadding/AppPadding.component'

const slideOpts = {
    initialSlide: 0
};

export default function StudentFormComponent({
    onSubmit
}) {

    const swiperRef = useRef(null);


    const onNext = async () => {
        if (swiperRef.current) {

            const swiper = await swiperRef.current.getSwiper();
            await swiper.slideNext();

        }
    }

    const onPrev = async () => {
        if (swiperRef.current) {

            const swiper = await swiperRef.current.getSwiper();
            await swiper.slidePrev();

        }
    }


    return (
        <React.Fragment>
            <IonHeader>
                <AppNavBarComponent />
            </IonHeader>
            <IonContent>

                <AppPaddingComponent className="form-container" padding={20}>
                    <IonSlides className="swiper-no-swiping" ref={swiperRef} options={slideOpts}>
                        <IonSlide>
                            <div className="personal-info">
                                <h4 id="info-prompt">
                                    Please provide personal info
                                </h4>
                                <AppInputComponent label="Name..." />
                                <AppInputComponent label="Expected income (yearly)..." />
                                <AppInputComponent label="Scholarships (yearly)..." />

                                <div className="actions">
                                    <IonButton fill="clear" onClick={onNext}>
                                        Next
                                        <IonIcon name="chevron-foward" slot="end" />
                                    </IonButton>
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
                                    <IonButton fill="clear" onClick={onPrev}>
                                        Back
                                    </IonButton>

                                    <IonButton  onClick={onSubmit}>
                                        Submit
                                    </IonButton>
                                </div>
                            </div>
                        </IonSlide>
                    </IonSlides>
                </AppPaddingComponent>
            </IonContent>
        </React.Fragment>
    )
}
