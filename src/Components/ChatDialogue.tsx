import { ChatGrouppedT } from "@/types";
import { Avatar, Group, Loader, ScrollArea, ScrollAreaProps, Stack } from "@mantine/core";
import Chatbox from "./Chatbox";
import { useEffect, useRef } from "react";

type PropsChatboxT = {
  datas: ChatGrouppedT[];
  isLoading?: boolean;
  aiLoading?: boolean;
} & ScrollAreaProps

const ChatDialogue = (props: PropsChatboxT) => {
  const { datas, isLoading, aiLoading, className="", ...rest } = props;
  const viewport = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(viewport.current!.scrollHeight);
    viewport.current!.scrollTo({ top: viewport.current!.scrollHeight, behavior: 'smooth' });
  }, [datas])

  return (
    <ScrollArea {...rest} viewportRef={viewport} >
      <Stack gap={8}>
        {datas.map((chat, index) => {
          return (
            <Group key={index} className={`dialogue-message ${className}`}>
              {chat.isBot && <Avatar 
                radius="xl" 
                color={chat.messages[0].state === "advice"? "primary.4":
                  chat.messages[0].state === "recognizing"? "warning.4":
                  chat.messages[0].state === "understanding"? "success.4":
                  "primary"
                } 
                variant="filled"
              />}
              <Stack gap={2} align={chat.isBot ? "flex-start":"flex-end"}>
                {chat.messages.map((d, i) => (
                  <Chatbox key={i} data={d}/>
                ))}
              </Stack>
            </Group>
          )
        })}
        {aiLoading && <Loader ml={48} color="blue" type="dots" />}
      </Stack>
    </ScrollArea>
  )
}

export default ChatDialogue;