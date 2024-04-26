import { useAppSelector } from '@/store'
import { Text, Avatar, Container, Flex, Pill, List } from '@mantine/core'
import { IconBriefcase, IconSparkles } from '@tabler/icons-react'
import React from 'react'

export default function InsightPanel() {
  const { user } = useAppSelector((state) => state.global)
  const CurrentUserTraits = [
    "Introvert",
    "Perfectionist",
    "Moody",
    "Straightforward"
  ]
  const Advice = [
    "Create a distraction-free work environment to enhance productivity, such as by organizing the workspace efficiently.",
    "Establish a structured work schedule to manage time effectively and avoid stress.",
    "Develop effective communication skills to convey ideas clearly without sacrificing tactfulness.",
    "Implement the principle 'Done is Better than Perfect' to avoid getting trapped in excessive perfectionism and focus on completing tasks well rather than perfectly.",
  ]
  return (
    <Flex gap="lg" direction="column">
      <Container className="insight-section-user">
        <Flex direction="column" gap={10} className="InsightPanel">
          <Flex gap="sm" align="center">
            <Avatar />
            <Text size="lg" fw={700}>{user?.name}</Text>
          </Flex>
          <Container m={0} className="jobdesk-container">
            <Flex gap={5} mb="xs" align="center">
              <IconBriefcase />
              <p>{user?.jobDesc}</p>
            </Flex>
            <Flex wrap="wrap" gap="sm">
              {CurrentUserTraits.map((Trait, index) => (<Pill key={index}>{Trait}</Pill>))}
            </Flex>
          </Container>
        </Flex>
      </Container>
      <Container className="insight-section-user">
        <Flex direction="column" gap={10} className="InsightPanel">
          <Flex gap="sm" align="center">
            <div className="Sparkle">
              <IconSparkles />
            </div>
            <Text size="lg" fw={700}>Improvement Advice</Text>
          </Flex>
          <Container m={0} className="jobdesk-container">
            <List type="ordered">
              {Advice.map((advice, index) => (<List.Item key={index}>{advice}</List.Item>))}
            </List>
          </Container>
        </Flex>
      </Container>
    </Flex>
  )
}
