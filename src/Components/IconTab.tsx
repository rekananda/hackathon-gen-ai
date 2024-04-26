import { Flex, Text } from "@mantine/core";
import { IconChartDonut, IconMessages, IconUsers } from "@tabler/icons-react";

type PropsIconTabT = {
  type: 'curhat' | 'people' | 'insight'
}

const IconTab = ({type}: PropsIconTabT) => {
  return (
    <Flex direction="column" align="center" className="icon-tab">
      {type === "curhat" && <IconMessages size={32}/>}
      {type === "people" && <IconUsers size={32}/>}
      {type === "insight" && <IconChartDonut size={32}/>}
      <Text fw="bold" fz="sm" tt={"capitalize"}>{type}</Text>
    </Flex>
  )
}

export default IconTab;