import React from 'react'
import DebtDetailsImageComponent from '../DebtDetailsImage/DebtDetailsImage.component'
import DebtDetailsCardComponent from '../DebtDetailsCard/DebtDetailsCard.component'
import AppInputCheckboxComponent from '../../widgets/AppInputCheckbox/AppInputCheckbox.component';
import { IonHeader, IonContent } from '@ionic/react';
import AppListItemComponemt from '../../widgets/AppListItem/AppListItem.componemt';
import AppNavBarComponent from '../../widgets/NavBar/AppNavBar.component';
import AppPaddingComponent from '../../widgets/AppPadding/AppPadding.component';


export default function DebtDetailsComponent({
    jobs,
    students,
    tuition,
    room_and_board,
    off_campus_housing,
    transportation,
    books,
    dining,
    income,
    scholarships,
    debt,
    years
}) {



    const onSubmit = () => {

    }



    return (
        <React.Fragment>
            <IonHeader>
                <AppNavBarComponent />
            </IonHeader>

            <IonContent>
                <AppPaddingComponent>
                    <DebtDetailsImageComponent
                        src='https://pbs.twimg.com/profile_images/1105876329029869568/l_5CkS9I.png'
                    />

                    <h5>It will take {years} years to payoff the loans</h5>
                </AppPaddingComponent>

                <DebtDetailsCardComponent
                    title="Debt"
                    subtitle={`$${debt}`}
                >
                    <AppInputCheckboxComponent
                        label="Tuition"
                        value={tuition.value}
                        checked={tuition.checked}
                    />

                    <AppInputCheckboxComponent
                        label="Room and Board"
                        value={room_and_board.value}
                        checked={room_and_board.checked}
                    />

                    <AppInputCheckboxComponent
                        label="Off Campus Housing"
                        value={off_campus_housing.value}
                        checked={off_campus_housing.checked}
                    />

                    <AppInputCheckboxComponent
                        label="Transportation"
                        value={transportation.value}
                        checked={transportation.checked}
                    />

                    <AppInputCheckboxComponent
                        label="Books"
                        value={books.value}
                        checked={books.checked}
                    />

                    <AppInputCheckboxComponent
                        label="Dining"
                        value={dining.value}
                        checked={dining.checked}
                    />

                </DebtDetailsCardComponent>

                <DebtDetailsCardComponent
                    title="Capital"
                    subtitle="$20,000"
                >


                    <AppInputCheckboxComponent
                        label="Income"
                        value={income.value}
                        checked={income.checked}
                    />

                    <AppInputCheckboxComponent
                        label="Scholarships"
                        value={scholarships.value}
                        checked={income.checked}
                    />
                </DebtDetailsCardComponent>

                <DebtDetailsCardComponent
                    title="Job titles"
                >
                    {
                        jobs.map(({
                            title,
                            salary
                        }, i) => (
                                <AppListItemComponemt
                                    key={i}
                                    title={title}
                                    subtitle={`$${salary}`}
                                />
                            ))
                    }

                </DebtDetailsCardComponent>

                <DebtDetailsCardComponent
                    title="Other Students"
                >
                    {
                        students.map(({
                            name,
                            years_left
                        }, i) => (
                                <AppListItemComponemt
                                    key={i}
                                    title={name}
                                    subtitle={` Paying debt in ${years_left} years`}
                                />
                            ))
                    }
                </DebtDetailsCardComponent>


            </IonContent>

        </React.Fragment>

    )
}
