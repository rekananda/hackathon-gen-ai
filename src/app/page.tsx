'use client'

import ChatDialogue from "@/Components/ChatDialogue";
import ChatLegend from "@/Components/ChatLegend";
import { ColleagePanel } from "@/Components/ColleaguePanel";
import DateWelcome from "@/Components/DateWelcome";
import FormInit from "@/Components/FormInit";
import IconTab from "@/Components/IconTab";
import InsightPanel from "@/Components/InsightPanel";
import { dummyChatGroupAgreement, dummyChatGroupAssement, dummyChatGroupInit, dummyChatGroupInteraction, templateIntake } from "@/dummy/chatdummy";
import { useAppSelector } from "@/store";
import { setUserData } from "@/store/GlobalSlice";
import { ChatDataT, ChatGrouppedT } from "@/types";
import { convertToChatGroup, greetings } from "@/utils";
import { ActionIcon, Box, Button, Divider, Flex, Group, Popover, Stack, Tabs, TabsList, TabsTab, Text, Textarea } from "@mantine/core";
import { getHotkeyHandler, useDisclosure, useFocusTrap, useTimeout } from "@mantine/hooks";
import { IconCirclePlus, IconHistory, IconMoodConfuzedFilled, IconMoodHappyFilled, IconMoodSad, IconMoodSadFilled, IconMoodSmileFilled, IconSend } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const { user } = useAppSelector((state) => state.global);
  const dispatch = useDispatch();
  const userLocal = localStorage.getItem("UserInfo") ? JSON.parse(localStorage.getItem("UserInfo")||"{}") : undefined;
  const [fakeAiLoding, {open, close}] = useDisclosure(false);
  const focusTrapRef = useFocusTrap();
  const focusTrapRef2 = useFocusTrap();

  const [numState, setState] = useState<number>(userLocal ? 4:1);
  const [activeTab, setActiveTab] = useState<string | null>('curhat');
  const [dummyChat] = useState<ChatGrouppedT[][]>([dummyChatGroupInit, dummyChatGroupAssement, dummyChatGroupAgreement]);
  const [interactionChat, setInteraction] = useState<ChatDataT[]>([]);
  const [firstStatement, setStatement] = useState<string>("I feel sad today, buddy.");
  const [indexResponse, setIndexResponse] = useState<number>(1);
  // console.log(indexResponse)
  const { start, clear } = useTimeout((index) => {
    close();
    setInteraction((prev) => ([
      ...prev,
      ...dummyChatGroupInteraction.filter((d) => d.order === index[0]) 
    ]))
    setStatement(templateIntake[index[0]]);
  }, 1000);

  // console.log(interactionChat);
  const nextState = () => {
    setState(numState+1);
  }
  const startNewChat = () => {
    setState(4);
    setInteraction([{
      isBot: true,
      name: "Work Buddy",
      message: <div>{`Hello ${user ? user.name : ""}, ${greetings()}!`}<br/>how was your workday?</div>
    }])
  }

  const handleSubmit = () => {
    if (firstStatement !== "") {
      clear();
      setState(5);
      setInteraction((prev) => [...prev, {
        isBot: false,
        name: user ? user.name : "",
        message: firstStatement
      }]);
      setStatement("");
      open();
      start(indexResponse);
      setIndexResponse(indexResponse+1);
    }
  }

  useEffect(() => {
    if (!user) {
      const userL = localStorage.getItem("UserInfo") ? JSON.parse(localStorage.getItem("UserInfo")||"{}") : undefined;
      userL && dispatch(setUserData({data: userL}));
    } else {
      setInteraction([{
        isBot: true,
        name: "Work Buddy",
        message: <div>{`Hello ${user.name || ""}, ${greetings()}!`}<br/>how was your workday?</div>
      }])
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, dispatch])

  return (
    <Box className="workspace">
      <Box className="content-box">
        <Tabs value={activeTab} onChange={setActiveTab} color="primary">
          <Tabs.Panel value="curhat">
            {numState === 5 && <ChatLegend/>}
            {numState === 4 && <DateWelcome />}
            <ChatDialogue 
              datas={numState < 4 ? dummyChat[numState-1]:convertToChatGroup(interactionChat)} 
              aiLoading={fakeAiLoding}
              {...(numState>4 ? {h: "calc(100vh - 217px)"}:{})}
            />
            {numState === 4 && <Flex className="dialogue-message mt-2">
              <Box className="!p-0 !border-0 chat-box my-message" ref={focusTrapRef}>
                <Textarea w="300px" 
                  data-autofocus
                  autosize
                  placeholder="type something you feel here"
                  value={firstStatement}
                  // onChange={(e) => setStatement(e.target.value)}
                  onKeyDown={getHotkeyHandler([
                    ['Enter', handleSubmit],
                  ])}
                  description="Enter to send"
                  inputWrapperOrder={['input', 'description']}
                />
              </Box>
            </Flex>}
          </Tabs.Panel>
          <Tabs.Panel value="people"><ColleagePanel /></Tabs.Panel>
          <Tabs.Panel value="insight"><InsightPanel /></Tabs.Panel>
          
          <Box className="bottom-content">
            {numState == 5 && 
              <Group align="flex-start" ref={focusTrapRef2}>
                <Textarea
                  data-autofocus
                  autosize
                  rows={2}
                  maxRows={3}
                  className="flex-grow"
                  placeholder="Type here"
                  value={firstStatement}
                  // onChange={(e) => setStatement(e.target.value)}
                  onKeyDown={getHotkeyHandler([
                    ['Enter', handleSubmit],
                  ])}
                  disabled={fakeAiLoding}
                  description="Enter to send"
                  inputWrapperOrder={['input', 'description']}
                />
                <ActionIcon variant="filled" color="primary" radius="xl" size="lg" disabled={fakeAiLoding} onClick={handleSubmit}>
                  <IconSend style={{ width: '70%', height: '70%' }} stroke={1.5} />
                </ActionIcon>
              </Group>
            }
            {numState == 1 ? 
            <FormInit onSuccess={nextState}/>: 
            numState <= 3 ? 
            <Flex justify={"center"}>
              <Button onClick={nextState} color="primary">
                {numState === 2 ? "Take Assesment": "I Understand"}
              </Button>
            </Flex>
            : 
            <TabsList grow justify="center">
              <TabsTab value="curhat"><IconTab type="curhat"/></TabsTab>
              <TabsTab value="people"><IconTab type="people"/></TabsTab>
              <TabsTab value="insight"><IconTab type="insight"/></TabsTab>
            </TabsList>}
          </Box>
        </Tabs>
        {activeTab === "curhat" && numState >= 4 && <Popover position="right" offset={{ mainAxis: -42, crossAxis: -60 }} shadow="md">
          <Popover.Target>
            <Button className="history-button" variant="default"><IconHistory/></Button>
          </Popover.Target>
          <Popover.Dropdown className="history-bar">
            <Stack>
              <Button color="primary" fullWidth onClick={startNewChat}><IconCirclePlus size={16}/> New Chat</Button>
              <Divider />
              <Box>
                <Text fw="bold" fz={14} mb={8} >Chat History</Text>
                <Stack>
                  <Box className="history-box">
                    <Group>
                      <Box className="flex-grow">
                        <Text fw="bold" fz={14}>Fear of Missing Out</Text>
                        <Text fz={12}>today</Text>
                      </Box>
                      <IconMoodSadFilled size={32} className="text-grey-9"/>
                    </Group>
                  </Box>
                  <Box className="history-box">
                    <Group>
                      <Box className="flex-grow">
                        <Text fw="bold" fz={14} lineClamp={1}>New Achievement in Project</Text>
                        <Text fz={12} c="gray">2 days ago</Text>
                      </Box>
                      <IconMoodHappyFilled size={32} className="text-grey-9"/>
                    </Group>
                  </Box>
                  <Box className="history-box">
                    <Group>
                      <Box className="flex-grow">
                        <Text fw="bold" fz={14} lineClamp={1}>Carrer Aspiration</Text>
                        <Text fz={12} c="gray">5 days ago</Text>
                      </Box>
                      <IconMoodSmileFilled size={32} className="text-grey-9"/>
                    </Group>
                  </Box>
                  <Box className="history-box">
                    <Group>
                      <Box className="flex-grow">
                        <Text fw="bold" fz={14} lineClamp={1}>Development Progress</Text>
                        <Text fz={12} c="gray">7 days ago</Text>
                      </Box>
                      <IconMoodConfuzedFilled size={32} className="text-grey-9"/>
                    </Group>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Popover.Dropdown>
        </Popover>}
      </Box>
    </Box>
  );
}
