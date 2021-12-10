import { Box, Flex } from "@chakra-ui/layout";

function MetaData(props) {
  const { data } = props;
  return (
    <Flex direction={{ base: "row" }}>
      {data.workout?.wkt_name && (
        <Box p="4">Workout: {data.workout.wkt_name}</Box>
      )}
      {data.activity?.timestamp && (
        <Box p="4">Date: {data.activity.timestamp}</Box>
      )}
    </Flex>
  );
}

export default MetaData;
