import { useAppSelector } from '@/store'
import { Avatar, Container, Flex, List, Pill, Stack, Text } from '@mantine/core'
import { IconBriefcaseFilled, IconSparkles } from '@tabler/icons-react'

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
          <Stack className='jobdesk-container' mb={8}>
            <Flex gap={5} align="center">
              <IconBriefcaseFilled />
              <Text fw="bold">{user?.position}</Text>
            </Flex>
            <Flex wrap="wrap" gap="sm">
              {CurrentUserTraits.map((Trait, index) => (<Pill key={index}>{Trait}</Pill>))}
            </Flex>
            <Flex wrap="wrap" gap="sm">
              <a className="text-link" href="https://drive.google.com/file/d/1nnSEl5HJKikaQ3davfy0S6iLkju11Pwg/view?usp=drive_link" target="_blank">Personality Report</a>
            </Flex>
          </Stack>
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
