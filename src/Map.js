import { useEffect, useState } from 'react';
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet';

import useLocation from './useLocation';
import { userIcon } from './icons';
import ReportCreator from './ReportCreator';
import Report from './Report';
import config from './config.json';
import store from './store';

import 'leaflet/dist/leaflet.css';

function UserMarker({ latitude, longitude }) {
  const map = useMap();

  const [isRealLocationReceived, setIsRealLocationReceived] = useState(false);

  useEffect(() => {
    if (
      !isRealLocationReceived &&
      (latitude !== config.initialLatitude || longitude !== config.initialLongitude)
    ) {
      map.setView([latitude, longitude], 15, { animate: false });
      setIsRealLocationReceived(true);
    }
  }, [latitude, longitude, map, isRealLocationReceived]);

  return (
    <Marker icon={userIcon} position={[latitude, longitude]} />
  );
}

export default function Map() {
  const reports = store.useState((s) => s.reports);
  const [userLatitude, userLongitude] = useLocation(config.initialLatitude, config.initialLongitude);

  console.debug('location', userLatitude, userLongitude);

  return (
    <>
      <MapContainer center={[userLatitude, userLongitude]} zoom={13} zoomControl={false}>
        <ReportCreator />

        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          detectRetina={true}
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <UserMarker latitude={userLatitude} longitude={userLongitude} />

        {reports.map(({ id, type, name, latitude, longitude }) => (
          <Report
            key={id}
            id={id}
            type={type}
            name={name}
            latitude={latitude}
            longitude={longitude}
          />
        ))}
      </MapContainer>
    </>
  );
}