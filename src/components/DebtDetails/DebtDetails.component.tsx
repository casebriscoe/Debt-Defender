import React from 'react'
import DebtDetailsImageComponent from '../DebtDetailsImage/DebtDetailsImage.component'
import DebtDetailsCardComponent from '../DebtDetailsCard/DebtDetailsCard.component'
import AppInputCheckboxComponent from '../../widgets/AppInputCheckbox/AppInputCheckbox.component';
import { IonHeader, IonContent } from '@ionic/react';
import AppListItemComponemt from '../../widgets/AppListItem/AppListItem.componemt';
import AppNavBarComponent from '../../widgets/NavBar/AppNavBar.component';

export default function DebtDetailsComponent() {
    return (
        <React.Fragment>
            <IonHeader>
                <AppNavBarComponent />
            </IonHeader>

            <IonContent>
                <DebtDetailsImageComponent
                    src='http://placekitten.com/g/200/300'
                />
                <DebtDetailsCardComponent
                    title="Debt"
                    subtitle="$80,000"
                >

                    <AppInputCheckboxComponent
                        label="Tuition"
                    />

                    <AppInputCheckboxComponent
                        label="Room and Board"
                    />

                    <AppInputCheckboxComponent
                        label="Off Campus housing"
                    />

                    <AppInputCheckboxComponent
                        label="Transportation"
                    />

                    <AppInputCheckboxComponent
                        label="Books"
                    />

                    <AppInputCheckboxComponent
                        label="Dining"
                    />
                </DebtDetailsCardComponent>

                <DebtDetailsCardComponent
                    title="Capital"
                    subtitle="$20,000"
                >

                    <AppInputCheckboxComponent
                        label="Income"
                    />

                    <AppInputCheckboxComponent
                        label="Scholarships"
                    />


                </DebtDetailsCardComponent>

                <DebtDetailsCardComponent
                    title="Job titles"
                >

                    <AppListItemComponemt
                        title="Senior Developer"
                        subtitle="$150,000"
                    />
                    <AppListItemComponemt
                        title="Senior Developer"
                        subtitle="$150,000"
                    />
                </DebtDetailsCardComponent>

                <DebtDetailsCardComponent
                    title="Other Students"
                >
                    <AppListItemComponemt
                        title="Jane Doe"
                        subtitle="Payed off in 3 years"
                    />

                    <AppListItemComponemt
                        title="John Doe"
                        subtitle="Paid off in 5 years"
                    />
                </DebtDetailsCardComponent>


            </IonContent>

        </React.Fragment>


    )
}
