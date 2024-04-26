import { Flex } from "@mantine/core";
import { Box, Group, SimpleGrid, Text } from "@mantine/core";

const ChatLegend = () => {
  return (
    <SimpleGrid cols={3} className="border-solid border-0 border-b border-gray-5 mb-2 pb-1">
      <Flex gap={4}><Box className="h-3 w-3 rounded-xl bg-success-4 mt-1"/><Text w={120}>Understanding situation</Text></Flex>
      <Flex gap={4}><Box className="h-3 w-3 rounded-xl bg-warning-4 mt-1"/><Text w={120}>{`Recognizing who's involved`}</Text></Flex>
      <Flex gap={4}><Box className="h-3 w-3 rounded-xl bg-primary-4 mt-1"/><Text w={120}>Giving advice</Text></Flex>
    </SimpleGrid>
  )
}

export default ChatLegend;