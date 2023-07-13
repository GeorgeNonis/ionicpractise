import { IonCard, IonCardContent, IonHeader, IonTitle } from "@ionic/react";
import dayjs from "dayjs";

interface Props {
  date: string;
}

const formatDate = (date: string) => {
  const day = dayjs(date);

  return day.format("D MMM YYYY");
};

const randomValues = [
  Math.random().toFixed(2),
  Math.random().toFixed(2),
  Math.random().toFixed(2),
];

const BiorthmCard = ({ date }: Props) => {
  return (
    <IonCard className="ion-text-center">
      <IonHeader>
        <IonTitle>{formatDate(date)}</IonTitle>
      </IonHeader>
      <IonCardContent>
        {randomValues.map((number) => {
          return <p key={number}>{number}</p>;
        })}
      </IonCardContent>
    </IonCard>
  );
};
export default BiorthmCard;
