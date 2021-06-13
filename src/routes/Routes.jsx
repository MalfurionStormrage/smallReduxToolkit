import React, { Suspense } from "react";
/* componente spinner y funciones de RRD*/
import SpinnerTwo from "../components/SpinnerTwo";
import { Switch, Route } from "react-router-dom";
/* vistas de cada rutas */
const AddView = React.lazy(() => import("../views/Add/AddView"));
const ListView = React.lazy(() => import("../views/List/ListView"));
const EditView = React.lazy(() => import("../views/Edit/EditView"));

export default function Routes() {
  return (
    <Suspense fallback={<SpinnerTwo />}>
      <Switch>
        <Route exact path="/">
          {" "}
          <ListView />{" "}
        </Route>
        <Route exact path="/add">
          {" "}
          <AddView />
        </Route>
        <Route exact path="/edit/:id/:nombre/:descripcion/:precio">
          <EditView />
        </Route>
      </Switch>
    </Suspense>
  );
}
