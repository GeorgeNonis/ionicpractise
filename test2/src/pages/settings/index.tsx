import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonRouterLink,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import IonTabBarComp from "../../components/iontabbar";

const SettingsPage = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonRouterLink routerLink="/home">Home</IonRouterLink>
      </IonContent>
      <IonTabBarComp />
    </IonPage>
  );
};

export default SettingsPage;
