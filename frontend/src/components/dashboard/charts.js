import { Flex } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

function Chart({ data, yKey, title }) {
  return (
    <Flex align="center" direction={"column"}>
      <chakra.h3
        textAlign={"center"}
        fontSize={"xl"}
        py={10}
        fontWeight={"bold"}
      >
        {title}
      </chakra.h3>
      <LineChart
        width={400}
        height={400}
        data={data.activity.sessions[0].laps[0].records}
      >
        <Line type="monotone" dataKey={yKey} stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="distance" />
        <YAxis />
      </LineChart>
    </Flex>
  );
}

export { Chart };
