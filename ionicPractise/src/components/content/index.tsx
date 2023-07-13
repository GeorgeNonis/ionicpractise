import { IonContent, IonInput, IonItem, IonLabel, IonList } from "@ionic/react";
import { useState } from "react";
import BiorthmCard from "./biorythm";
import { useBirthday } from "./biorythm/useBirthday";

const today = () => {
  return new Date().toISOString().slice(0, "yyyy-mm-dd".length);
};

const IonicContent = () => {
  const { birthday, stateHandler } = useBirthday("birthday", "");
  const [targetDay, setTargetDay] = useState(today());
  return (
    <IonContent class="ion-padding">
      <IonList>
        <IonItem>
          <IonLabel position="floating">Date of Birth:</IonLabel>
          <IonInput
            type="date"
            placeholder="Your Birthday"
            onIonChange={(event) => {
              stateHandler(event.detail.value!);
            }}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Target Day:</IonLabel>
          <IonInput
            type="date"
            placeholder="Your Birthday"
            onIonChange={(event) => {
              setTargetDay(event.detail.value!);
            }}
          />
        </IonItem>
      </IonList>
      {birthday && <BiorthmCard date={targetDay} />}
    </IonContent>
  );
};
export default IonicContent;
