import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
// IMPORT p-min-delay
import pMinDelay from "p-min-delay";
// IMPORT React Router components
import { Route, BrowserRouter, Routes } from "react-router-dom";
// IMPORT Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
// IMPORT Routes with lazy loading and delay
const Home = lazy(() => pMinDelay(import("./routes/Home"), 500));
const Reader = lazy(() => pMinDelay(import("./routes/Reader"), 500));
const NativeDocs = lazy(() => pMinDelay(import("./routes/NativeDocs"), 500));
const NativeSlides = lazy(() =>
  pMinDelay(import("./routes/NativeSlides"), 500)
);
const NativeSheets = lazy(() =>
  pMinDelay(import("./routes/NativeSheets"), 500)
);
const NativeDrawings = lazy(() =>
  pMinDelay(import("./routes/NativeDrawings"), 500)
);
const WithId = lazy(() => pMinDelay(import("./routes/WithId"), 500));
const NoMatched = lazy(() => pMinDelay(import("./routes/NoMatched"), 500));
// Render routes
ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/reader"
        element={
          <Suspense fallback={<Loading />}>
            <Reader />
          </Suspense>
        }
      />
      <Route
        path="/slides"
        element={
          <Suspense fallback={<Loading />}>
            <NativeSlides />
          </Suspense>
        }
      />
      <Route
        path="/docs"
        element={
          <Suspense fallback={<Loading />}>
            <NativeDocs />
          </Suspense>
        }
      />
      <Route
        path="/sheets"
        element={
          <Suspense fallback={<Loading />}>
            <NativeSheets />
          </Suspense>
        }
      />
      <Route
        path="/draw"
        element={
          <Suspense fallback={<Loading />}>
            <NativeDrawings />
          </Suspense>
        }
      />
      <Route
        path="/id"
        element={
          <Suspense fallback={<Loading />}>
            <WithId />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<Loading />}>
            <NoMatched />
          </Suspense>
        }
      />
    </Routes>
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);
