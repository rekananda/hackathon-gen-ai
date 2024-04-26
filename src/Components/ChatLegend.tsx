import { Flex } from "@mantine/core";
import { Box, Group, SimpleGrid, Text } from "@mantine/core";

const ChatLegend = () => {
  return (
    <SimpleGrid cols={3} className="chat-legend">
      <Flex gap={4}><Box className="color-icon" bg="success4" mt={4}/><Text w={120}>Understanding situation</Text></Flex>
      <Flex gap={4}><Box className="color-icon" bg="warning4" mt={4}/><Text w={120}>{`Recognizing who's involved`}</Text></Flex>
      <Flex gap={4}><Box className="color-icon" bg="primary4" mt={4}/><Text w={120}>Giving advice</Text></Flex>
    </SimpleGrid>
  )
}

export default ChatLegend;