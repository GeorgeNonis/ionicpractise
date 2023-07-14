import {
  IonContent,
  IonPage,
  IonRouterLink,
  IonText,
  IonTitle,
} from "@ionic/react";
import { styled } from "../../stitches.config";
import { keyframes } from "@stitches/react";

const bounceAnimation = keyframes({
  "0%, 100%": { transform: "translateY(0)" },
  "50%": { transform: "translateY(-7px)" },
});

const NavigationLink = styled(IonRouterLink, {
  all: "unset",
  backgroundColor: "#0f0f0f75",
  padding: "0.5rem 1rem",
  borderRadius: "9px",
  color: "white",
  animation: `${bounceAnimation} 1.5s infinite`,
});

const Content = styled(IonContent, {
  "--background": "none",
  backgroundImage:
    "url(https://wallpapers.com/images/hd/dream-world-mobile-58g8gv3r23zg29kw.webp)",
  backgroundPosition: "center top",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
});

const Title = styled(IonTitle, {
  position: "relative",
  color: "white",
  textAlign: "center",
  paddingTop: "2rem",
  fontFamily: "monospace",
  fontSize: "$3",
});

const Paragraph = styled(IonText, {
  color: "white",
  textAlign: "center",
  paddingTop: "2rem",
  fontFamily: "monospace",
});

const Intro = styled("div", {
  position: "absolute",
  inset: "50% auto auto 50%",
  transform: "translate(-50%, -50%)",
  display: "grid",
  placeItems: "center",
  gap: "2rem",
});

const LandingPage = () => {
  return (
    <IonPage>
      <Content fullscreen className="ion-padding">
        <Title>Linkify</Title>
        <Intro>
          <Paragraph>
            Discover Linkify: Your ultimate URL shortener and analytics tool.
            Shorten, track, and optimize your links with ease. Customize,
            analyze, and boost your online presence today!
          </Paragraph>
          <NavigationLink routerLink="/home">Continue</NavigationLink>
        </Intro>
      </Content>
    </IonPage>
  );
};

export default LandingPage;
