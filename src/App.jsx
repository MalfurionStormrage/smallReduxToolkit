import React, { Suspense } from "react";
/*route y componentes */
import { BrowserRouter as Router } from "react-router-dom";
import Spinner from "./components/Spinner";
const Navbar = React.lazy(() => import("./components/Navbar"));
const Routes = React.lazy(() => import("./routes/Routes"));

export default function App() {
  return (
    <section>
      <Router>
        <Suspense fallback={<Spinner />}>
          <Navbar />
          <div className="container-fluid mt-3">
            <Routes />
          </div>
        </Suspense>
      </Router>
    </section>
  );
}
