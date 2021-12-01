import React from 'react';
import Views from './containers/views/Views';
import Navigation from './components/structure/Navigation';
import PopUpNotes from './components/elements/PopUpNotes';
import {Helmet, HelmetProvider} from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Cadd9 音乐教育 艺术中心</title>
      </Helmet>
      <PopUpNotes />
      <Views />
      <Navigation />
    </HelmetProvider>
  );
}

export default App;
