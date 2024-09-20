import { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Preview from './pages/Preview';

import { home, chatbubbles, person } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  // State to track login and registration status
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [isRegisteredIn, setIsRegisteredIn] = useState<boolean>(false);

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          {/* Routes for SignIn and Register */}
          <Route exact path='/sign'>
            <SignIn setIsSignedIn={setIsSignedIn} />
          </Route>
          <Route exact path='/register'>
            <Register setIsRegisteredIn={setIsRegisteredIn} />
          </Route>

          {/* Conditionally show the tabs only if the user is logged in or registered */}
          {isSignedIn || isRegisteredIn ? (
            <IonTabs>
              <IonRouterOutlet>
                <Route exact path='/preview'>
                  <Preview />
                </Route>
                <Route exact path="/tab1">
                  <Tab1 />
                </Route>
                <Route exact path="/tab2">
                  <Tab2 />
                </Route>
                <Route exact path="/tab3">
                  <Tab3 />
                </Route>
                <Route exact path="/">
                  <Redirect to="/tab1" />
                </Route>
              </IonRouterOutlet>

              {/* Tab Bar for navigation */}
              <IonTabBar slot="bottom">
                <IonTabButton tab="tab1" href="/tab1">
                  <IonIcon
                    aria-hidden="true"
                    icon={ home }
                    
                  />
                  <IonLabel>Home</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab2" href="/tab2">
                  <IonIcon
                    aria-hidden="true"
                    icon={chatbubbles}
                    
                  />
                  <IonLabel>Chat</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab3" href="/tab3">
                  <IonIcon
                    aria-hidden="true"
                    icon={ person }
                    
                  />
                  <IonLabel>Profile</IonLabel>
                </IonTabButton>
              </IonTabBar>
            </IonTabs>
          ) : (
            // Redirect to sign in if the user is not signed in or registered
            <Redirect to="/sign" />
          )}
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
