import { Flex, List, Text, ThemeIcon, Title } from '@mantine/core'
import { IconBrandGithub, IconNotebook, IconBrandGoogleFilled } from '@tabler/icons-react'

const Link = () => {
  return (
    <Flex direction="column" gap="md">
      <Title order={4} c="teal">
        Link
      </Title>

      <Flex gap="sm">
        <List spacing="xs" size="md" center>
          <List.Item
            icon={
              <ThemeIcon variant="light" color="teal" size={24} radius="xl">
                <IconBrandGoogleFilled style={{ width: '70%', height: '70%' }} />
              </ThemeIcon>
            }
          >
            <Flex align="center" gap="sm">
              <Text component="a" target="_blank" href="mailto:woohr1109@gmail.com" size="xs" c="dark" fw={500}>
                woohr1109@gmail.com
              </Text>
            </Flex>
          </List.Item>

          <List.Item
            icon={
              <ThemeIcon variant="light" color="teal" size={24} radius="xl">
                <IconBrandGithub style={{ width: '70%', height: '70%' }} />
              </ThemeIcon>
            }
          >
            <Flex align="center" gap="sm">
              <Text component="a" target="_blank" href="https://github.com/hyung-rae" size="xs" c="dark" fw={500}>
                https://github.com/hyung-rae
              </Text>
            </Flex>
          </List.Item>

          <List.Item
            icon={
              <ThemeIcon variant="light" color="teal" size={24} radius="xl">
                <IconNotebook style={{ width: '70%', height: '70%' }} />
              </ThemeIcon>
            }
          >
            <Flex align="center" gap="sm">
              <Text
                component="a"
                target="_blank"
                href="https://hyung-rae.github.io/front-development"
                size="xs"
                c="dark"
                fw={500}
              >
                https://hyung-rae.github.io/front-development
              </Text>
            </Flex>
          </List.Item>
        </List>
      </Flex>
    </Flex>
  )
}

export default Link
