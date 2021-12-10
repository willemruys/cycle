import MetaData from "./metaData";


import Map from "../map/map";
import SessionData from "./sessionData";
import { Chart } from "./charts";
import { SimpleGrid } from "@chakra-ui/layout";
function Dashboard({ data, geoJson }) {
  
  return (
    <>
      <MetaData data={data} />
      {geoJson && <Map geoJson={geoJson}></Map>}
      <SessionData activities={data.activity.sessions} />
      <SimpleGrid
        mx={"auto"}
        pb={5}
        pt={5}
        maxW="7xl"
        columns={{ base: 1, md: 2, xl: 3 }}
        spacing={{ base: 5, lg: 8 }}
      >
        <Chart data={data} yKey="heart_rate" title="Heart rate" />
        <Chart data={data} yKey="speed" title="Speed"/>
        <Chart data={data} yKey="power" title="Power"/>
      </SimpleGrid>
    </>
  );
}

export default Dashboard;
