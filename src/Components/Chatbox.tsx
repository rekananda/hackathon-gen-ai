import { ChatDataT, PropBaseT } from "@/types";
import { Box } from "@mantine/core";

type PropsChatboxT = {
  data: ChatDataT
} & PropBaseT

const Chatbox = (props: PropsChatboxT) => {
  const { data, ...rest } = props;
  return (
    <Box className={`${data.noPadding ? "!p-0":""} chat-box ${data.isBot ? "bot-message": "my-message"} ${rest.className||""}`}>
      {data.message}
    </Box>
  )
}

export default Chatbox;