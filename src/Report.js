import { Marker, Popup } from 'react-leaflet';
import styled from 'styled-components';

import { typeToIcon, unknownIcon } from './icons';
import { Button } from './ui';
import store from './store';

const DeleteButton = styled(Button)`
`;

export default function Report({ id, type, name, latitude, longitude }) {
  const icon = typeToIcon[type] || unknownIcon;

  const onDelete = () => {
    store.update((s) => {
      const updatedReports = s.reports.filter((report) => report.id !== id);
      s.reports = updatedReports;
    })
  };
  
  return (
    <Marker icon={icon} position={[latitude, longitude]} title={type}>
      <Popup>
        {name}
        <DeleteButton onClick={onDelete}>Poista</DeleteButton>
      </Popup>
    </Marker>
  )
}