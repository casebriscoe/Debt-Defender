import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';

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

/* Global CSS */
import './global.css';
import StudentFormPage from './pages/StudentForm/StudentForm.page';
import DebtDetailsPage from './pages/DebtDetails/DebtDetails.page';

const App: React.FC = () => (
  <IonApp>

    <IonReactRouter>
      <IonRouterOutlet>
        <Route  path="/debt/:id" component={DebtDetailsPage} />
        <Route exact path="/" component={StudentFormPage} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
