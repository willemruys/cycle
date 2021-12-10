import { readFile } from "fs";

import FitParser from "fit-file-parser";
import { parseActivityToGeoJson } from "../utils.js";

const filePath = "../cycle_ride.fit";

/**
 * Read cycle data from file. Returns a promise. When resolved it returns a JSON object.
 * @returns Promise
 */
const readCycleDataFromFile = () => {
  return new Promise((resolve, reject) => {
    readFile(filePath, (error, content) => {
      if (error) {
        reject(error);
      }

      const fitParser = new FitParser.default({
        force: true,
        speedUnit: "km/h",
        lengthUnit: "km",
        temperatureUnit: "kelvin",
        elapsedRecordField: true,
        mode: "cascade",
      });

      fitParser.parse(content, function (error, data) {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
  });
};

const readGeoJsonFromDataFile = () => {
  return new Promise((resolve, reject) => {
    readFile(filePath, (error, content) => {
      if (error) {
        reject(error);
      }

      const fitParser = new FitParser.default({
        force: true,
        speedUnit: "km/h",
        lengthUnit: "km",
        temperatureUnit: "kelvin",
        elapsedRecordField: true,
        mode: "cascade",
      });

      fitParser.parse(content, function (error, data) {
        if (error) {
          reject(error);
        } else {
          const geoJson = parseActivityToGeoJson(
            data.activity.sessions[0].laps
          );
          resolve(geoJson);
        }
      });
    });
  });
};

export { readCycleDataFromFile, readGeoJsonFromDataFile };
