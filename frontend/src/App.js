import { useCycleData, useMapData } from "./services/data";

import Navigation from "./components/navbar/navigation";
import { Box, CircularProgress, Center } from "@chakra-ui/react";
import AlertBar from "./components/alert/alertBar";
import Dashboard from "./components/dashboard/dashboard";



function App() {
  const { data, error, isLoading } = useCycleData();
  const { geoJson } = useMapData();
  return (
    <div className="App">
      <Navigation />
      <Box>
        {error && (
          <AlertBar
            title="Error retrieving data"
            message="We are experiencing an error retrieving the appropiate data. Please try again later"
          />
        )}
        {isLoading && (
          <Center h="100px">
            <CircularProgress isIndeterminate color="orange.400" />
          </Center>
        )}
        {data && <Dashboard data={data} geoJson={geoJson} />}
      </Box>
    </div>
  );
}

export default App;
