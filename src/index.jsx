import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
// Importing Routes
import Home from "./routes/Home";
import Reader from "./routes/Reader";
import NativeDocs from "./routes/NativeDocs";
import NativeSlides from "./routes/NativeSlides";
import NativeSheets from "./routes/NativeSheets";
import NativeDrawings from "./routes/NativeDrawings";
import WithId from "./routes/WithId";
import NoMatched from "./routes/NoMatched";
// Importing components
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
