import React from "react";
import ReactDOM from "react-dom";
// IMPORT React Router components
import { Route, BrowserRouter, Routes } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
// IMPORT Routes
import Home from "./routes/Home";
import Reader from "./routes/Reader";
import NativeDocs from "./routes/NativeDocs";
import NativeSlides from "./routes/NativeSlides";
import NativeSheets from "./routes/NativeSheets";
import NativeDrawings from "./routes/NativeDrawings";
import WithId from "./routes/WithId";
import NoMatched from "./routes/NoMatched";
// IMPORT Components
import Header from "./components/Header";
import Footer from "./components/Footer";

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reader" element={<Reader />} />
      <Route path="/slides" element={<NativeSlides />} />
      <Route path="/docs" element={<NativeDocs />} />
      <Route path="/sheets" element={<NativeSheets />} />
      <Route path="/draw" element={<NativeDrawings />} />
      <Route path="/id" element={<WithId />} />
      <Route path="*" element={<NoMatched />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
