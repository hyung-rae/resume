import { Flex, MantineProvider, Paper, RingProgress, Text, Timeline, Title, List, ThemeIcon } from '@mantine/core'
import { IconCircleCheck, IconCircleDashed } from '@tabler/icons-react'
import '@mantine/core/styles.css'

const App = () => {
  return (
    <MantineProvider>
      <Paper maw="900px" shadow="xs" radius="sm" withBorder p="xl" m="auto" mt="xl">
        <Flex>
          <Title order={2} c="dark">
            우형래
          </Title>
        </Flex>

        <Flex gap="xs" mt="2px">
          <Text size="sm">3년차 주니어</Text>
          <Text size="sm">Frontend 웹 개발자</Text>
          <Text size="sm">1994.11.09</Text>
        </Flex>

        <Title order={4} c="dark">
          경력 사항
        </Title>

        <Timeline color="green" active={1} lineWidth={2} bulletSize={18}>
          <Timeline.Item title="New branch">
            <Text c="dimmed" size="sm">
              You&apos;ve created new branch{' '}
              <Text variant="link" component="span" inherit>
                fix-notifications
              </Text>{' '}
              from master
            </Text>
            <Text size="xs" mt={4}>
              2 hours ago
            </Text>
          </Timeline.Item>

          <Timeline.Item title="Commits">
            <Text c="dimmed" size="sm">
              You&apos;ve pushed 23 commits to
              <Text variant="link" component="span" inherit>
                fix-notifications branch
              </Text>
            </Text>
            <Text size="xs" mt={4}>
              52 minutes ago
            </Text>
          </Timeline.Item>

          <Timeline.Item title="Commits">
            <Text c="dimmed" size="sm">
              You&apos;ve pushed 23 commits to
              <Text variant="link" component="span" inherit>
                fix-notifications branch
              </Text>
            </Text>
            <Text size="xs" mt={4}>
              52 minutes ago
            </Text>
          </Timeline.Item>

          <Timeline.Item title="Commits">
            <Text c="dimmed" size="sm">
              You&apos;ve pushed 23 commits to
              <Text variant="link" component="span" inherit>
                fix-notifications branch
              </Text>
            </Text>
            <Text size="xs" mt={4}>
              52 minutes ago
            </Text>
          </Timeline.Item>
        </Timeline>

        <Title order={4} c="dark">
          개발 스킬
        </Title>

        <RingProgress
          size={170}
          thickness={22}
          roundCaps
          sections={[
            { value: 40, color: 'cyan' },
            { value: 15, color: 'blue' },
            { value: 15, color: 'green' },
          ]}
        />

        <List
          spacing="xs"
          size="sm"
          center
          icon={
            <ThemeIcon color="teal" size={24} radius="xl">
              <IconCircleCheck size={16} />
            </ThemeIcon>
          }
        >
          <List.Item>Clone or download repository from GitHub</List.Item>
          <List.Item>Install dependencies with yarn</List.Item>
          <List.Item>To start development server run npm start command</List.Item>
          <List.Item>Run tests to make sure your changes do not break the build</List.Item>
          <List.Item
            icon={
              <ThemeIcon color="blue" size={24} radius="xl">
                <IconCircleDashed size={16} />
              </ThemeIcon>
            }
          >
            Submit a pull request once you are done
          </List.Item>
        </List>
      </Paper>
    </MantineProvider>
  )
}

export default App
