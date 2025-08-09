import "./App.css";
import Hallo from "./pages/Hallo";
import React, { Fragment } from "react";
import Introductie from "./pages/Introductie";
import Apparatuur from "./components/codecomponents/Apparatuur";
import Werk from "./components/codecomponents/Werk";
import Persoon from "./components/codecomponents/Persoon";
import Projecten from "./pages/Projecten";
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Hallo />} />
        <Route path="/introductie" element={<Introductie />}>
          <Route path="apparatuur.js" element={<Apparatuur />} />
          <Route path="persoon.js" element={<Persoon />} />
          <Route path="werk.js" element={<Werk />} />
        </Route>
        <Route path="/projecten" element={<Projecten />} />
        {/* <Route path="/bezoekers" element={<Bezoekers/>} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
}

export default App;
