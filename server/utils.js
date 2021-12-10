const parseActivityToGeoJson = (laps) => {
  const coordinates = [];
  let count = 0;
  let lng;
  let lat;

  laps.forEach((lap) => {
    const lapCoordinates = lap.records
      .filter((record) => {
        return record.position_lat && record.position_long;
      })
      .map((record) => {

        if (count === 0) {
            lng = record.position_long,
            lat = record.position_lat,
            count++
        }
        return [record.position_long, record.position_lat];
      });

    coordinates.push(...lapCoordinates);
  });

  return {
    lng,
    lat,
    type: "Feature",
    properties: {},
    geometry: {
      type: "LineString",
      coordinates: coordinates,
    },
  };
};

export { parseActivityToGeoJson };
