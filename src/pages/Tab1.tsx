import React from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";

const Tab1: React.FC = (props: any) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h1
          onClick={() => {
            props.history.push("/tab1Nested");
          }}
        >
          Go to Tab1Nested
        </h1>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
