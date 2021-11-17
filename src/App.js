import React from "react";
import Views from "./containers/views/Views";
import Navigation from "./components/structure/Navigation";
import PopUpNotes from "./components/elements/PopUpNotes";

function App() {
  return (
    <>
      <PopUpNotes />
      <Views />
      <Navigation />
    </>
  );
}

export default App;
