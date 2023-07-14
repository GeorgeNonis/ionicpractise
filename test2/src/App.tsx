import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/home";
import SettingsPage from "./pages/settings";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/settings">
          <SettingsPage />
        </Route>
        <Redirect exact path="/" to={"/home"} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
