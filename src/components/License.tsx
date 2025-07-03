import { Flex, List, Text, ThemeIcon, Title } from '@mantine/core'
import { IconLicense } from '@tabler/icons-react'

const License = () => {
  return (
    <Flex direction="column" gap="md">
      <Title order={4} c="teal">
        자격증
      </Title>

      <Flex gap="sm">
        <List
          spacing="xs"
          size="md"
          center
          icon={
            <ThemeIcon variant="light" color="teal" size={24} radius="xl">
              <IconLicense style={{ width: '70%', height: '70%' }} />
            </ThemeIcon>
          }
        >
          <List.Item>
            <Flex align="center" gap="sm">
              <Title order={6} c="dark">
                정보처리기사
              </Title>

              <Text size="xs" c="dimmed">
                2125.07.19
              </Text>
            </Flex>
          </List.Item>

          <List.Item>
            <Flex align="center" gap="sm">
              <Title order={6} c="dark">
                PCCP(코딩전문역량인증)
              </Title>

              <Text size="xs" c="dimmed">
                2125.07.19
              </Text>
            </Flex>
          </List.Item>
        </List>
      </Flex>
    </Flex>
  )
}

export default License
