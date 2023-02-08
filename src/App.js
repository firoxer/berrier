import { createGlobalStyle } from 'styled-components';

import Map from './Map';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Helvetica, sans-seirf;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .leaflet-container {
    height: 100vh;
    width: 100%;
  }

  .leaflet-tile {
    filter: saturate(0.5) !important;
  }

  * {
    box-sizing: border-box;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Map />
    </>
  );
}