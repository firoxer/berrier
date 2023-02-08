import { useEffect, useState } from 'react';

export default function useLocation(initialLatitude, initialLongitude) {
  const [latitude, setLatitude] = useState(initialLatitude);
  const [longitude, setLongitude] = useState(initialLongitude);

  useEffect(() => {
    // FIXME
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });

    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        // TODO: Sanity check
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        // TODO: Graceful handling
        console.error(error);
      },
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return [latitude, longitude]
}