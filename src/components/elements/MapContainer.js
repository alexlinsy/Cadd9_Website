import React, {useState} from 'react';
import {motion} from 'framer-motion';
import GoogleMapReact from 'google-map-react';

import '../../styles/elements/map-container.scss';

const Marker = ({show}) => {
  return (
    <>
      <motion.div whileHover={{y: -10, scale: 1.5}} transiation={{duration: 5}}>
        <i className="fas fa-map-marker fa-3x map-marker"></i>
      </motion.div>
      {show && <p className="font-heading-english map-popup">Cadd9 北京校区</p>}
    </>
  );
};

const MapContainer = () => {
  const center = {lat: 39.920313, lng: 116.433569};
  const zoom = 18;
  const [show, setShow] = useState(false);

  const mapApiKey = process.env.REACT_APP_GOOGLE_API_KEY;
  return (
    <div className="map-container full-width">
      <GoogleMapReact
        bootstrapURLKeys={{key: mapApiKey}}
        defaultCenter={center}
        defaultZoom={zoom}
        options={{
          styles: [{stylers: [{saturation: -100}, {gamma: 0.5}]}],
        }}
        onChildClick={() => setShow(!show)}
        onChildMouseEnter={() => setShow(true)}
        onChildMouseLeave={() => setShow(false)}
      >
        <Marker lng={center.lng} lat={center.lat} show={show} />
      </GoogleMapReact>
    </div>
  );
};

export default MapContainer;
