import { Flex, Text } from "@mantine/core";
import moment from "moment";

const DateWelcome = () => {
  const date = moment();
  return (
    <Flex className="w-full mb-3" h={200} justify="flex-end" align="center" direction="column">
      <Text c="gray" fw="700" fz={64} lh="32px">{date.date()}</Text>
      <Text c="gray" fz={42}>{date.format("MMM")}</Text>
    </Flex>
  )
}

export default DateWelcome;