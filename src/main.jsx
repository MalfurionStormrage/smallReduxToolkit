import React from "react";
import ReactDOM from "react-dom";
/* componente app */
import App from "./App";
/* custom css*/
import "./style/index.css";
/* stilos de boostrstrap y boostrstrap icons , js de funciones de booststrap (5)*/
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
/* estilos para las alertas de sweetalert 2 v: */
import "sweetalert2/dist/sweetalert2.css";
/* store y provider de state management*/
import store from "./redux/store";
import { Provider } from "react-redux";
/* persistencia de datos de los estados */
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistStore(store)}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

/*

Imagination
Kina - nobody cares
So low for so long - Shiloh dynasty
The Deli - Flowers (1 hour loop)
CUCO - Lover is a Day
Shingeki no Kyojin Attack on Titan Season 2 Ending Full
Swing Lynn · Twin Cabins
Young · Vacations

*/
