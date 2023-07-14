import { Redirect, Route, useLocation } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import HomePage from "./pages/home";
import SettingsPage from "./pages/settings";
import LandingPage from "./pages/landpage";
import { settings, home } from "ionicons/icons";

setupIonicReact({
  mode: "md",
});

const App = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route exact path="/settings">
            <SettingsPage />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
