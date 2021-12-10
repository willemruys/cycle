import {
  Stat,
  StatLabel,
  StatNumber,
  StatArrow,
  StatHelpText,
  Tooltip,
} from "@chakra-ui/react";
import { QuestionOutlineIcon } from "@chakra-ui/icons";

function StatsCard({ title, stat, change, arrowText, description }) {
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={"gray.800"}
      rounded={"lg"}
    >
      <StatLabel fontWeight={"medium"} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
        {stat}
      </StatNumber>
      {arrowText && change && (
        <StatHelpText>
          <StatArrow type={change} />
          {arrowText}
        </StatHelpText>
      )}
      {description && (
        <Tooltip label={description} fontSize="md">
          <QuestionOutlineIcon />
        </Tooltip>
      )}
    </Stat>
  );
}

export default StatsCard;
