import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useHistory } from "react-router-dom";

const SettingsPage = () => {
  const history = useHistory();
  const clickHandler = (location: string) => {
    history.push(`/${location}`);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonButton onClick={() => clickHandler("settings")}>Settings</IonButton>
        <IonButton onClick={() => clickHandler("home")}>Home</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default SettingsPage;
