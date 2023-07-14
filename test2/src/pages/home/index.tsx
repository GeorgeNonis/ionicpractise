import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonPage,
  IonRouterLink,
} from "@ionic/react";
import IonTabBarComp from "../../components/iontabbar";

const HomePage = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonRouterLink routerLink="/">Go to landing page</IonRouterLink>
      </IonContent>
      <IonTabBarComp />
    </IonPage>
  );
};

export default HomePage;
