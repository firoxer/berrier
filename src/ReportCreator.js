import { useRef, useState } from 'react';
import { Marker, Tooltip, useMapEvent } from 'react-leaflet';
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';

import { newReportIcon } from './icons';
import config from './config.json';
import { Button } from './ui';
import store from './store';

const Select = styled.select`
`;

const CreateButton = styled(Button)`

`;

export default function ReportCreator() {
  const [type, setType] = useState(config.reportables[0].type);
  const [latLng, setLatLng] = useState(null);
  const tooltipRef = useRef(null);

  const isInTooltipDomTree = (element) => {
    if (element === tooltipRef.current._contentNode) {
      return true;
    } else if (element.parentElement) {
      return isInTooltipDomTree(element.parentElement);
    } else {
      return false;
    }
  };

  useMapEvent('click', (event) => {
    console.log(event);
    if (latLng) {
      if (!isInTooltipDomTree(event.originalEvent.target)) {
        setLatLng(null);
      }
    } else {
      setLatLng(event.latlng);
    }
  });

  const onTypeChange = (event) => {
    setType(event.target.value);
  };

  const onSubmit = () => {
    const reportable = config.reportables.find((reportable) => reportable.type === type);

    const newReport = {
      id: uuidv4(),
      type,
      name: reportable.name,
      latitude: latLng.lat,
      longitude: latLng.lng,
    };

    store.update((s) => {
      s.reports = [...s.reports, newReport];
    })

    setLatLng(null);
  };

  if (!latLng) {
    return null;
  }

  return (
    <Marker icon={newReportIcon} position={latLng}>
      <Tooltip direction="bottom" interactive permanent ref={tooltipRef}>
        <Select onChange={onTypeChange} value={type}>
          {config.reportables.map(({ type, name }) => (
            <option key={type} value={type}>{name}</option>
          ))}
        </Select>

        <CreateButton onClick={onSubmit}>Luo</CreateButton>
      </Tooltip>
    </Marker>
  );
}