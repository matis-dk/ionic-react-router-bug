import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";

const Tab1Nested: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Tab 1 Nested</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h1>Tab1Nested</h1>
      </IonContent>
    </IonPage>
  );
};

export default Tab1Nested;
