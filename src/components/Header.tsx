import { Blockquote, Flex, Text, Title } from '@mantine/core'
import { IconInfoCircle } from '@tabler/icons-react'

const Header = () => {
  return (
    <>
      <Flex align="flex-end" gap="xs" justify="space-between">
        <Title order={3} c="dark">
          우형래
        </Title>

        <Title order={6} c="dark">
          Junior Frontend Developer
        </Title>
      </Flex>

      <Flex direction="column" gap="sm">
        <Blockquote color="teal" cite="- Steve Krug" icon={<IconInfoCircle />} iconSize={30} p="md">
          <Title order={6} c="dark">
            우리가 하는 일을 조금 더 제대로 하는 것만으로
            <br />
            타인의 삶을 극적으로 개선할 기회가 얼마나 자주 오겠는가?
          </Title>
        </Blockquote>

        <Text size="sm" fw="500" c="dark">
          사용자 경험을 최우선으로 생각하며, 웹의 접근성과 사용성을 중요하게 생각합니다.
          <br />
          기능만 잘 작동하는 것이 아닌, 서비스가 사용자에게 어떤 가치를 전달하는지 고민하는 개발자가 되고 싶습니다.
        </Text>
      </Flex>
    </>
  )
}

export default Header
