import { IonIcon, IonLabel, IonTabBar, IonTabButton } from "@ionic/react";
import { home, settings } from "ionicons/icons";

const IonTabBarComp = () => {
  return (
    <IonTabBar slot="bottom">
      <IonTabButton tab="home" href="/home">
        <IonIcon icon={home} />
        <IonLabel>Home</IonLabel>
      </IonTabButton>
      <IonTabButton tab="settings" href="/settings">
        <IonIcon icon={settings} />
        <IonLabel>Settings</IonLabel>
      </IonTabButton>
    </IonTabBar>
  );
};
export default IonTabBarComp;
