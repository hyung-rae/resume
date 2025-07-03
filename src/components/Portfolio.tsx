import { ActionIcon, Card, Flex, Group, Text, Title } from '@mantine/core'
import { IconExternalLink } from '@tabler/icons-react'

const Portfolio = () => {
  return (
    <Flex direction="column" gap="md">
      <Title order={4} c="teal">
        프로젝트
      </Title>

      <Group gap="md" grow>
        <Card w="300px" shadow="sm" padding="lg" radius="md" withBorder>
          <Group justify="space-between" mb="xs">
            <Text fw={500}>Common UI Library</Text>

            <ActionIcon variant="outline" color="teal" size={24}>
              <IconExternalLink style={{ width: '70%', height: '70%' }} stroke={1.5} />
            </ActionIcon>
          </Group>

          <Text size="sm" c="dimmed">
            With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and
            around the fjords of Norway
          </Text>
        </Card>

        <Card w="300px" shadow="sm" padding="lg" radius="md" withBorder>
          <Group justify="space-between" mb="xs">
            <Text fw={500}>Common UI Library</Text>

            <ActionIcon variant="outline" color="teal" size={24}>
              <IconExternalLink style={{ width: '70%', height: '70%' }} stroke={1.5} />
            </ActionIcon>
          </Group>

          <Text size="sm" c="dimmed">
            With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and
            around the fjords of Norway
          </Text>
        </Card>
      </Group>
    </Flex>
  )
}

export default Portfolio
