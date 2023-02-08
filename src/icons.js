import L from 'leaflet';

import bilberrySvg from './assets/bilberry.svg';
import chanterelleSvg from './assets/chanterelle.svg';
import newReportSvg from './assets/newReport.svg';
import unknownSvg from './assets/unknown.svg';
import userSvg from './assets/user.svg';

export const bilberryIcon = L.icon({
  iconUrl: bilberrySvg,
  iconRetinaUrl: bilberrySvg,
  iconAnchor: [12, 12],
  popupAnchor: [0, 0],
  iconSize: [24, 24],
});

export const chanterelleIcon = L.icon({
  iconUrl: chanterelleSvg,
  iconRetinaUrl: chanterelleSvg,
  iconAnchor: [12, 12],
  popupAnchor: [0, 0],
  iconSize: [24, 24],
});

export const newReportIcon = L.icon({
  iconUrl: newReportSvg,
  iconRetinaUrl: newReportSvg,
  iconAnchor: [12, 24],
  popupAnchor: [0, 0],
  iconSize: [24, 24],
});

export const unknownIcon = L.icon({
  iconUrl: unknownSvg,
  iconRetinaUrl: unknownSvg,
  iconAnchor: [12, 12],
  popupAnchor: [0, 0],
  iconSize: [24, 24],
});

export const userIcon = L.icon({
  iconUrl: userSvg,
  iconRetinaUrl: userSvg,
  iconAnchor: [12, 24],
  popupAnchor: [0, 0],
  iconSize: [24, 24],
});

export const typeToIcon = {
  bilberry: bilberryIcon,
  chanterelle: chanterelleIcon,
};