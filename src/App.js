import React from "react";
import Views from "./containers/views/Views";
import Navigation from "./components/structure/Navigation";
import Footer from "./components/structure/Footer";

function App() {
  return (
    <>
      <Views />
      <Footer />
      <Navigation />
    </>
  );
}

export default App;
