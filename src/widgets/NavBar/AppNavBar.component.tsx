import "./AppNavBar.component.css"
import React from 'react'
import { IonToolbar, IonButtons, IonButton, IonIcon, IonTitle } from "@ionic/react"


export default function AppNavBarComponent() {
    return (
        <IonToolbar color="primary">
    <IonButtons slot="secondary">
      <IonButton>
        <IonIcon slot="icon-only" name="person-circle" />
      </IonButton>
      <IonButton>
        <IonIcon slot="icon-only" name="search" />
      </IonButton>
    </IonButtons>
    <IonButtons slot="primary">
      <IonButton color="primary">
        <IonIcon slot="icon-only" ios="ellipsis-horizontal" md="ellipsis-vertical" />
      </IonButton>
    </IonButtons>
    <IonTitle>Debt Defender</IonTitle>
  </IonToolbar>
    )
}
