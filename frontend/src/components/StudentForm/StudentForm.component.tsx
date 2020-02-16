import React, { useRef } from 'react'
import { 
    IonHeader, 
    IonContent, 
    IonSlides, 
    IonSlide, IonButton, IonIcon } from '@ionic/react'
import AppNavBarComponent from '../../widgets/NavBar/AppNavBar.component'
import "./StudentForm.component.css"
import AppInputComponent from '../../widgets/AppInput/AppInput.component'
import AppPaddingComponent from '../../widgets/AppPadding/AppPadding.component'

const slideOpts = {
    initialSlide: 0
};

export default function StudentFormComponent({
    name,
    expected_income,
    scholarships,
    school_name,
    residency_status,
    semesters,
    enrollment_status,
    handleChange,
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
                                <AppInputComponent
                                    label="Name..."
                                    onChange={handleChange('name')}
                                    value={name}
                                />
                                <AppInputComponent
                                    label="Expected income (yearly)..."
                                    onChange={handleChange('expected_income')}
                                    value={expected_income}
                                />
                                <AppInputComponent
                                    label="Scholarships (yearly)..."
                                    onChange={handleChange('scholarships')}
                                    value={scholarships}
                                />

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
                                <AppInputComponent
                                    label="School Name"
                                    onChange={handleChange('school_name')}
                                    value={school_name}
                                />
                                <AppInputComponent
                                    label="Residency Status"
                                    onChange={handleChange('residency_status')}
                                    value={residency_status}
                                />
                                <AppInputComponent
                                    label="Total Semester"
                                    onChange={handleChange('semesters')}
                                    value={semesters}
                                />
                                <AppInputComponent
                                    label="Enrollment Status"
                                    onChange={handleChange('enrollment_status')}
                                    value={enrollment_status}
                                />
                                <div className="actions">
                                    <IonButton fill="clear" onClick={onPrev}>
                                        Back
                                    </IonButton>

                                    <IonButton onClick={onSubmit}>
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
