"use client";
import "./style.css";
import "./App.css";
import React, { useState, useEffect } from "react";
import Preloader from "../components/Pre";
import Navbar from "../components/Navbar";
import Home from "../components/Home/Home";
import ScrollToTop from "../components/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";



export default function Homes() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <main>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Home />
      </div>
    </main>
  );
}
