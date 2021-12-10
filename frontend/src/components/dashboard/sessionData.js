import { Box, chakra, SimpleGrid } from "@chakra-ui/react";
import StatsCard from "../stats/statsCard";

function SessionData({ activities }) {
  return (
    <Box maxW="7xl" mx={"auto"} pb={5} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      {activities.map((activity, index) => {
        return (
          <>
            <chakra.h3
              textAlign={"center"}
              fontSize={"4xl"}
              py={10}
              fontWeight={"bold"}
            >
              Statistics session {index + 1}
            </chakra.h3>
            <SimpleGrid
              columns={{ base: 1, md: 3 }}
              spacing={{ base: 5, lg: 8 }}
            >
              <StatsCard title={"Calories"} stat={activity.total_calories} />
              <StatsCard
                title={"Max heart rate"}
                stat={activity.max_heart_rate}
              />
              <StatsCard
                change="decrease"
                arrowText="7.0%"
                title={"Normalized power"}
                description="Normalized Power (NP) is a power averaging method, measured in watts, used to compensate for changes in ride conditions for a more accurate depiction of power expenditure. "
                stat={activity.normalized_power}
              />
              <StatsCard
                change="decrease"
                arrowText="7.0%"
                title={"Average speed"}
                stat={activity.avg_speed}
              />
              <StatsCard
                change="increase"
                description="Compared to similar rides, your heart rate was lower than normal"
                arrowText="10.0%"
                title={"Average heart rate"}
                stat={activity.avg_heart_rate}
              />
              <StatsCard
                description="Stress score is calculated using your average heart rate, duration and food consumption"
                title={"Stress score"}
                stat={activity.training_stress_score}
              />
            </SimpleGrid>
          </>
        );
      })}
    </Box>
  );
}

export default SessionData;
