import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { Box } from "@chakra-ui/layout";
import { useEffect, useRef } from "react";
require("dotenv").config();

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_GL;

function Map({ geoJson }) {
  const mapContainer = useRef(null);

  const map = useRef(null);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [geoJson.lng, geoJson.lat],
      zoom: 8,
    });
    map.current.on("load", () => {
      map.current.addSource("route", {
        type: "geojson",
        data: geoJson,
      });
      map.current.addLayer({
        id: "route",
        type: "line",
        source: "route",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#FF0000",
          "line-width": 6,
        },
      });
    });
  });

  return (
    <Box>
      <Box ref={mapContainer} className="map-container" />
    </Box>
  );
}

export default Map;
