import { Flex } from "@mantine/core";
import { Box, SimpleGrid, Text } from "@mantine/core";

const ChatLegend = () => {
  return (
    <SimpleGrid cols={3} className="chat-legend">
      <Flex gap={4}><Box className="color-icon" bg="success.4" mt={4}/><Text w={120}>Understanding situation</Text></Flex>
      <Flex gap={4}><Box className="color-icon" bg="warning.4" mt={4}/><Text w={120}>{`Recognizing who's involved`}</Text></Flex>
      <Flex gap={4}><Box className="color-icon" bg="primary.4" mt={4}/><Text w={120}>Giving advice</Text></Flex>
    </SimpleGrid>
  )
}

export default ChatLegend;