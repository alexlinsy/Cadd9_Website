import React from 'react';
import GoogleMapReact from 'google-map-react';

import '../../styles/elements/map-container.scss';

const Marker = () => (
  <div>
    <i className="fas fa-map-marker fa-3x map-marker"></i>
  </div>
);

const MapContainer = ({
  center = {lat: 39.920313, lng: 116.433569},
  zoom = 18,
}) => {
  const mapApiKey = 'AIzaSyAMyIvWT0AY53uUECx-oChgJwM50gsSQRo';
  return (
    <div className="map-container full-width">
      <GoogleMapReact
        bootstrapURLKeys={{key: mapApiKey}}
        defaultCenter={center}
        defaultZoom={zoom}
        options={{
          styles: [{stylers: [{saturation: -100}, {gamma: 0.5}]}],
        }}
      >
        <Marker lng={center.lng} lat={center.lat} />
      </GoogleMapReact>
    </div>
  );
};

export default MapContainer;
