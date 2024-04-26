import { useAppSelector, useAppStore } from '@/store'
import { UserDataT } from '@/types'
import { Avatar, Text, Container, Flex, List, Pill, Button } from '@mantine/core'
import { IconArrowBack, IconBinaryTree2, IconHierarchy3, IconSparkles } from '@tabler/icons-react'
import React, { useMemo, useState } from 'react'

export const ColleagePanel = () => {
  const { user, Superior, Peer } = useAppSelector((state) => state.global)
  const [SelectedUser, setSelectedUser] = useState<UserDataT | null>(null)

  function RenderHowToComunicate(uzer: UserDataT | undefined) {
    switch (uzer?.name) {
      case "Freddy":
        return [
          "Be Direct and Clear: be concise and to the point. Avoid ambiguity and provide clear, actionable information or request.",
          "Acknowledge Their Emotions: If you notice mood swings, acknowledge their feelings without judgment. Showing empathy can help diffuse tension and build rapport.",
          "Choose the Right Timing: Try to approach them when they seem more receptive or when they're not under too much pressure.",
        ]
      case "Natasha":
        return [
          "Respectful: Respect their introversion and give them space",
          "Provide Feedback Thoughtfully: Provide feedback privately and constructively.",
          "Choose the Right Communication Channels: Some introverts may feel more comfortable communicating through written channels like email or messaging rather than face-to-face conversations.",
        ]
      case "Rafael":
        return [
          "Respect their demeanor: Honor their calm and mysterious nature.",
          "Be direct but respectful: Be clear but considerate in communication.",
          "Active Listening: Pay attention to understand fully.",
          "Ask open-ended questions: Encourage dialogue with open-ended queries.",
          "Give them space: Allow time for reflection and response.",
        ]
      default:
        break;
    }
  }

  function renderTags(uzer: UserDataT | undefined) {

    switch (uzer?.name) {
      case "Freddy":
        return [
          "Extrovert",
          "Moody",
          "Strict",
          "Discipline"
        ]
      case "Natasha":
        return [
          "Introvert",
          "Cheerful",
          "Friendly",
          "Helpful"
        ]
      case "Rafael":
        return [
          "Calm",
          "Mysterious",
          "Diligent"
        ]
      default:
        break;
    }
  }

  function renderRelation(uzer: UserDataT | undefined) {
    const superiorname = Superior.find((superior) => superior.name === uzer?.name)
    if (superiorname) {
      return "Your Superior"
    }
    return "Your peers"
  }

  const renderComponent = useMemo(() => {
    if (SelectedUser) {
      return <Container>
        <Container mb="xl" py={10} className="peer-details">
          <Flex gap="sm" align="center">
            <Avatar color={RenderWarnaAvatar(SelectedUser.relation)} />
            <Text fw={500}>{SelectedUser.name}</Text>
          </Flex>
          <Flex direction="column" gap="sm">
            <Flex gap="xs" pl={50}>
              <IconBinaryTree2 />
              <Text>{renderRelation(SelectedUser)}</Text>
            </Flex>
            <Flex gap="sm" pl={50}>
              {renderTags(SelectedUser)?.map((Tag, index) => (<Pill key={index}>{Tag}</Pill>))}
            </Flex>
          </Flex>
        </Container>
        <Container>
          <Flex gap="sm" mb={20} align="center">
            <IconSparkles />
            <Text>How To Communicate efficiently</Text>
          </Flex>
          <List type="ordered">
            {RenderHowToComunicate(SelectedUser)?.map((H, index) => (<List.Item key={index}>{H}</List.Item>))}
          </List>
        </Container>
        <Flex gap="sm" align="center" mt={50}>
          <Button onClick={() => setSelectedUser(null)} variant="light">Back</Button>
        </Flex>
      </Container>
    }
    return <div>
      <Flex direction="column" align="start">
        <p>Your Superior</p>
        {Superior.map((Superior, index) => {
          return <Flex key={index} onClick={() => setSelectedUser(Superior)} direction="column" gap="sm" align="center" py="sm" px="xl" className={`Colleague`}>
            <Avatar color={RenderWarnaAvatar(Superior.relation)} radius="xl" />
            <p>{Superior.name}</p>
          </Flex>
        })}
      </Flex>
      <Flex direction="column" align="start">
        <p>Your Peers</p>
        <Flex direction="row" gap="md">
          {Peer.map((Peer, index) => {
            return <Container key={index} className="Colleague" px={0}>
              <Flex onClick={() => setSelectedUser(Peer)} direction="column" gap="sm" align="center" py="sm" px="xl" >
                <Avatar color={RenderWarnaAvatar(Peer.relation)} radius="xl" />
                <p>{Peer.name}</p>
              </Flex>
            </Container>
          })}
        </Flex>
      </Flex>
    </div>
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [SelectedUser])

  function RenderWarnaAvatar(relation: string) {
    switch (relation) {
      case "bad":
        return "red"
        break;
      case "great":
        return "green"
        break;
      default:
        return "gray"
        break;
    }
  }
  return (
    <>
      {renderComponent}
    </>
  )
}
