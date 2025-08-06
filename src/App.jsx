import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import History from "./pages/History";
import ResumeGenerator from "./pages/ResumeGenerator";
import PageNotFound from "./pages/PageNotFound";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Form from "./pages/Form";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/history" element={<History />} />
        <Route path="/Resumegenerator" element={<ResumeGenerator />} />
        <Route path="/Form" element={<Form />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        closeOnClick
        theme="colored"
      />
    </>
  );
}

export default App;
