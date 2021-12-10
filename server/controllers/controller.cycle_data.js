import { readCycleDataFromFile, readGeoJsonFromDataFile } from "../services/services.cycle_data.js";

const readCycleData = async (req, res, next) => {
  const data = await readCycleDataFromFile().catch((err) => {
    console.log(err);
    res.status(500);
  });

  return res.json(data);
};

const readMap = async (req, res, next) => {
  const data = await readGeoJsonFromDataFile().catch((err) => {
    console.log(err);
    res.status(500);
  });

  return res.json(data);
};

export { readCycleData, readMap };
